import "./login.scss";
import logo from "../../img/logo.png";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(event) {
    event.preventDefault();
    console.log(email, password);
    const url = "http://localhost:4000/user/login";
    axios
      .post(url, { email, password })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        toast.error(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} />
          <p className="title">
            <a href="/">EatsRober</a>
          </p>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email or Phone number"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button className="loginbutton" onClick={handleClick}>
            submit
          </button>
          <ToastContainer />
          <span>
            New to EatsRober ?{" "}
            <b>
              {" "}
              <a href="/signup">Sign up now</a>
            </b>
            <b>
              <a href="/">
                <br />
                Back
              </a>
            </b>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
