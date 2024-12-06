import React, { useState } from "react";
import "./form.css";
 
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


 
  return (
<div className="login-form-container">
<form className="login-form">
<h2>Login</h2>
<div className="form-group">
<label htmlFor="email">Email</label>
<input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
</div>
<div className="form-group">
<label htmlFor="password">Password</label>
<input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
</div>
<button type="button" className="submit-btn" onClick={handleClick}>
          Submit
</button>
</form>
</div>
  );
};
 
export default Form;