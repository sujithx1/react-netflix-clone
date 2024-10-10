import "./login.css";
import Logo from "../../assets/netflix_react_assets/assets/logo.png";
import React, { useState } from "react";
import { login, signUp } from "../../firebase";

const Login = () => {
  const [signState, setSignState] = useState<string>("Sign In");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignUpState = (): void => {
    setSignState("Sign Up");
  };
  const handleSignInState = (): void => {
    setSignState("Sign In");
  };
  const user_auth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
  };

  return (
    <div className="login">
      <img src={Logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {" "}
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "Sign Up" ? (
            <p>
              Already have account?{" "}
              <span onClick={handleSignInState}>Sign In Now</span>
            </p>
          ) : (
            <p>
              New to Netflix?{" "}
              <span onClick={handleSignUpState}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
