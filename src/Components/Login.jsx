import React from "react";
import {
  FormControl,
  Input,
  FormHelperText,
  Button,
  Alert,
} from "@mui/material";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
// import Header from "./Header";

function Login() {
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const { logIn } = useStateValue();
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      {/* <Header /> */}
      <h2>Welome Admin </h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <form>
        <FormControl>
          {/* <InputLabel>UserName</InputLabel> */}
          <Input
            type="email"
            placeholder="email"
            name="email"
            // ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your username.
          </FormHelperText>
          {/* <InputLabel>Password</InputLabel> */}
          <input
            className="login__input"
            type="password"
            placeholder="******"
            name="password"
            // ref={passRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="outlined" onClick={Login}>
            Enter
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default Login;
