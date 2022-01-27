import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../firebase";
import db from "../firebase";
import "./Admin.css";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
// import Header from "./Header";
function Admin() {
  const [upload, setUpload] = useState({
    title: "",
    description: "",
    url: "",
    deployed: "",
  });
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpload({ ...upload, [name]: value });
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const filename = file;
    uploadImage(filename);
  };

  const uploadImage = (filename) => {
    if (!filename) return;
    const storageRef = ref(storage, `/portfolioimages/${filename.name}`);
    const uploadTask = uploadBytesResumable(storageRef, filename);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const portfolioCollection = collection(db, "portfolio");
          const payload = {
            title: upload.title,
            description: upload.description,
            url: upload.url,
            deployed: upload.deployed,
            image: url,
          };
          addDoc(portfolioCollection, payload);
          setUpload({
            title: "",
            description: "",
            url: "",
            deployed: "",
          });
          setProgress(0);
        });
      }
    );
  };
  const navigate = useNavigate();

  const { logOut } = useStateValue();
  const logout = async () => {
    await logOut();
    navigate("/");
  };
  return (
    <div className="admin">
      {/* <Header /> */}
      <div className="admin__upload">
        <h2>Upload</h2>
        <form>
          <div className="formcontrol">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={upload.title}
              onChange={handleChange}
            />
          </div>
          <div className="formcontrol">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={upload.description}
              onChange={handleChange}
            />
          </div>
          <div className="formcontrol">
            <label>Url</label>
            <input
              type="text"
              name="url"
              value={upload.url}
              onChange={handleChange}
            />
          </div>
          <div className="formcontrol">
            <label>Deployed</label>
            <input
              type="text"
              name="deployed"
              value={upload.deployed}
              onChange={handleChange}
            />
          </div>
          <div className="formcontrol">
            <label>Image</label>
            <input
              type="file"
              name="image"
              className="admin__inputfile"
              onChange={handleImage}
            />
            {`uploaded ${progress} %`}
          </div>
          <div className="formcontrol">
            <button
              type="submit"
              onClick={handleUpload}
              className="admin__button"
            >
              Upload
            </button>
          </div>
        </form>
        <Button onClick={logout} className="admin__logout">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Admin;
