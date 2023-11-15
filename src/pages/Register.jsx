import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(input);
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="password"
          onChange={handleChange}
          name="password"
        />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
