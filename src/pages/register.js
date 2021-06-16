import React,{useState} from 'react';

const initialValues = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  role: "",
  location: "",
};

const register = (data) => fetch('http://localhost:4000/users/register', {
  method: 'POST',
  body: JSON.stringify(data)
});

const Register = (props) => {
  const [values, setValues] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("submit", values);
    register(values)
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
  const setFirstName = (e) => {
    const { value } = e.target;

    setValues({
      ...values,
      firstname: value,
    });
  }
  const setLastName = (e) => {
    const { value } = e.target;

    setValues({
      ...values,
      lastname: value,
    });
  }
  const setRole = (e) => {
    const { value } = e.target;

    setValues({
      ...values,
      role: value,
    });
  }
  const setLocation = (e) => {
    const { value } = e.target;

    setValues({
      ...values,
      location: value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
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

            <label htmlFor="firstname"><b>First Name</b></label>
            <input type="text" 
                    placeholder="Enter First Name" 
                    onChange={setFirstName}
                    value={values.firstname}
                    name="firstname" 
                    id="firstname" 
                    required 
            />

            <label htmlFor="lastname"><b>Last Name</b></label>
            <input type="text" 
                   placeholder="Enter Last Name" 
                   onChange={setLastName}
                   value={values.lastname}
                   name="lastname" 
                   id="lastname" 
                   required 
            />

            <label htmlFor="role"><b>Role</b></label>
            <input type="number" 
                   placeholder="Enter Role" 
                   onChange={setRole}
                   value={values.role}
                   name="role" 
                   id="role" 
                   required 
            />

            <label htmlFor="location"><b>Location</b></label>
            <input type="text" 
                   placeholder="Enter Location" 
                   onChange={setLocation}
                   value={values.location}
                   name="location" 
                   id="location" 
                   required 
            />

            <button type="submit" className="registerbtn">Register</button>
        </div>

        <div className="container signin">
            <p>Already have an account? <a href="/login">Sign in</a>.</p>
        </div>
    </form>
  );
};

export default Register;
