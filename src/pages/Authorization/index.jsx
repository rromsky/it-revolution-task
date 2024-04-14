import React, { useState } from "react";
import { loginUser, registerUser } from "../../services";

const Authorization = ({ setUserToken }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    if (isRegister) {
      const token = await registerUser(email, password);
      setUserToken(token);
    } else {
      const token = await loginUser(email, password);
      setUserToken(token.access_token);
    }
  };

  return (
    <div className="authorization-section">
      <div className="authorization-container">
        <h1 className="authorization-header">Sign In</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="authorization-input"
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="authorization-input"
          type="text"
          placeholder="Password"
        />
        <button
          className="authorization-button-hovered"
          onClick={() => {
            setIsRegister((prevState) => !prevState);
          }}
        >
          {isRegister ? "Sign in" : "Sign Up"}
        </button>
        <button className="authorization-button" onClick={handleAuth}>
          {!isRegister ? "Sign in" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Authorization;
