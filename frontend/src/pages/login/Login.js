import "./login.css"
import logo from "../../img/logo.png"


function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src={logo}/>
                <p className="title">EatsRobar</p>
                </div>
                
            </div>
            <div className="container">
                <form>
                   <h1>Sign In</h1> 
                   <input type="email" placeholder="Email or Phone number"/>
                   <input type="password" placeholder="Password"/>
                   <button className="loginbutton">Sign In</button>
                   <span>New to EatsRober ? <b> Sign up now</b></span>
                </form>
            </div>
        </div>
    )
}

export default Login
