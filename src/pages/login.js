import React, { useState } from 'react';
import { setToken } from '../services/auth';

const initialValues = {
  email: "",
  password: "",
};

const login = async (data) => {
  const response = await fetch('http://localhost:4000/users/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  console.log(response)

  if (response.status === 200) {
    setToken(response.token);
  }
};

const Login = (props) => {
  const [values, setValues] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Login with", values)
    login(values)
  }
  const setEmail = (e) => {
    const { value } = e.target;

    setValues({
      ...values,
      email: value,
    });
  }
  const setPassword = (e) => {
    const { value } = e.target;

    setValues({
      ...values,
      password: value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="container">
            <h1>Login</h1>
            <hr/>

            <label htmlFor="email"><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={setEmail}
              value={values.email}
              name="email"
              id="email"
              required
            />

            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={setPassword}
              value={values.password}
              name="password"
              id="password"
              required
            />

            <button type="submit" className="loginbtn">Login</button>
        </div>

        <div className="container signup">
            <p>Don't have an account? <a href="/register">Sign up</a>.</p>
        </div>
    </form>
  );
};

export default Login;
