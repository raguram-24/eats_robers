import "./signup.scss"
import logo from "../../img/logo.png"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pwd, setPwd] = useState("");
    const [address, setAddress] = useState("");

    function handleClick(event) {
        event.preventDefault();
        console.log(name,email,pwd,address,phoneNumber);
        const url = "http://localhost:4000/user/signup";
        axios
          .post(url, { name,email,phoneNumber,pwd,address })
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            // localStorage.setItem("token", response.data.token);
            toast.error(response.data.message);
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }


    return (
        <div className="signup">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src={logo}/>
                <p className="titles"><a href="/login">EatsRober</a></p>
                </div>
                
            </div>
            <div className="container">
                <form>
                   <h1>Sign up</h1> 
                   <input 
                   type="text" 
                   placeholder="Name"
                   value={name}
                    onChange={(e) => {
                    setName(e.target.value);
                        }}
                   />
                   <input
                    type="email" 
                    placeholder="Email "
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                        }}
                    />
                   <input type="text" 
                   placeholder="Mobile number"
                   value={phoneNumber}
                    onChange={(e) => {
                    setPhoneNumber(e.target.value);
                        }}  
                   />
                   <input 
                   type="text" 
                   placeholder="Password"
                   value={pwd}
                    onChange={(e) => {
                    setPwd(e.target.value);
                        }}
                   />
                   <input 
                   type="text" 
                   placeholder="Address"
                   value={address}
                    onChange={(e) => {
                    setAddress(e.target.value);
                        }}
                   />
                    <button className="loginbutton" onClick={handleClick}>
                        submit
                    </button>
                    <ToastContainer />
                   <span>All ready have accound of EatsRober ? <b><a href="/login"> Sign in now</a></b>
                   <b><a href="/"><br/>Back</a></b>
                   </span>
                </form>
            </div>
        </div>
    )
}

export default Signup
