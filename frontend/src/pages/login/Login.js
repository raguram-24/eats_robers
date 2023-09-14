import "./login.scss"
import logo from "../../img/logo.png"


function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src={logo}/>
                <p className="title"><a href='/'>EatsRober</a></p>
                </div>
                
            </div>
            <div className="container">
                <form>
                   <h1>Login</h1> 
                   <input type="email" placeholder="Email or Phone number"/>
                   <input type="password" placeholder="Password"/>
                   <button className="loginbutton">submit</button>
                   <span>New to EatsRober ? <b> <a href="/signup">Sign up now</a></b>
                   <b><a href="/"><br/>Back</a></b></span>
                </form>
            </div>
        </div>
    )
}

export default Login
