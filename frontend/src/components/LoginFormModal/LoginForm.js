import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import styles from './LoginForm.module.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>Welcome to Court Reserve</label>
      {/* <label> */}
      {/* Username or Email */}
      <input
        placeholder="Username or Email"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      {/* </label> */}
      {/* <label> */}
      {/* Password */}
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {/* </label> */}
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;