import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    setLogindata({
      ...logindata,
      [event.target.name]: event.target.value,
    });
  };

  const localURL = 'http://localhost:3000';


  const handleSubmit = () => {
debugger
    axios.post(`${localURL}/login`, logindata)
    .then(response => {
      console.log(response);
      setLogindata(response.data);
      history.push("/list");
    })
    .catch(error => {
      console.log(error);
    });
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Username:"
          onChange={(event) => handleChange(event)}
        />
        <br />

        <label>Password:</label>
        <input
          type="text"
          name="password"
          placeholder="Password:"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};
