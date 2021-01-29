import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

function Login() {
  const { push } = useHistory();
  const [logins, setLogins] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setLogins({ ...logins, [name]: value });
  };

  // make a post request to retrieve a token from the api
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", logins)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        // when you have handled the token, navigate to the BubblePage route
        push("/bubble");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  console.log(logins);
  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <form onSubmit={login}>
          <label htmlFor={"username"}>username</label>
          <input
            id="username"
            value={logins.username}
            name="username"
            onChange={handleChanges}
          />
          <label htmlFor={"password"}>password</label>
          <input
            id="password"
            type="password"
            value={logins.password}
            name="password"
            onChange={handleChanges}
          />
          <button>submit</button>
        </form>
      </h1>
    </>
  );
}

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
