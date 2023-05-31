import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fire";
import "../assents/css/styles/login/login.css";
import LogoPrisma1 from "../assents/imgs/logo-prisma.png";

const Login = ({ setAuthState, setUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function switchRegister() {
    setAuthState("register");
  }

  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUser(email);
          setAuthState("home");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="login">
      <div className="logo_backgrnd1">
        <img src={LogoPrisma1} alt="Logo_Prisma1" className="logo_prisma1" />
      </div>
      <hr className="barra1"></hr>
      <div className="login__container">
         <div label="Email address">
          <p>User</p>
          <input className="email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="name@example.com"
            autoComplete="off"
          />
        </div>
        <div label="Password">
          <p>Password</p>
          <input className="password_input"
          autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        <button onClick={handleLogin} type="submit" className="login_input">Login</button>
        <h3>
          Don't have an Account <span onClick={switchRegister}>SignUp</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Login;
