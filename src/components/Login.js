import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useFormsHook from "../helpers/useFormsHook";

const initialValue = {
  username: "Lambda School",
  password: "i<3Lambd4",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { push } = useHistory();
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", values)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/colors");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const [values, handleChange] = useFormsHook(initialValue);
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
