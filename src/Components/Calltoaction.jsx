import React from "react";
import "./Calltoaction.css";
import { useNavigate } from "react-router-dom";

function Calltoaction() {
  // const [contact, setContact] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("hey");
    navigate("/contact");
  };
  return (
    <div className="calltoaction">
      <button className="call__btn" onClick={handleClick}>
        Lets talk about Your Project
      </button>
    </div>
  );
}

export default Calltoaction;
