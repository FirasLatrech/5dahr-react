import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;

function Login() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (value) => {
    if (emailRegex.test(value) && value.length !== 0) {
      setEmailError(null);
    } else {
      setEmailError("The email address isn't correct");
    }
  };

  const validatePassword = (value) => {
    if (passwordRegex.test(value) && value.length !== 0) {
      setPasswordError(null);
    } else {
      setPasswordError("Please enter a valid password");
    }
  };

  const handleEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      console.log("success");
      auth.setIsLoggedIn(true);
      navigate("/");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="login_page">
      <h3>Log in with your work email</h3>
      <form action="" onSubmit={handleSubmit}>
        <div>
          Email<br/>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="enter your email"
            onChange={(e) => handleEmail(e)}
            className={emailError ? "error" : "valid"}
          />
          {emailError && <p className="error_msg">{emailError}</p>}
        </div>
        <div>
          Password<br/>
          <input
            name="password"  // Corrected the typo from "passwoed" to "password"
            value={password}
            type="password"
            placeholder="enter your password"
            onChange={(e) => handlePassword(e)}
            className={passwordError ? "error" : "valid"}
          />
          {passwordError && <p className="error_msg">{passwordError}</p>}
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
