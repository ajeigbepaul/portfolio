import React from "react";
import { FormControl, Input, FormHelperText, Button } from "@mui/material";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <h2>Welome Admin </h2>
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
            AddUser
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default Login;
