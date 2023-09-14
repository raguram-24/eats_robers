import "./signup.scss"
import logo from "../../img/logo.png"


function Signup() {
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
                   <input type="email" placeholder="Email "/>
                   <input type="text" placeholder="Mobile number"/>
                   <input type="password" placeholder="Password"/>
                   <button className="loginbutton">Let's Start</button>
                   <span>All ready have accound of EatsRober ? <b><a href="/login"> Sign in now</a></b>
                   <b><a href="/"><br/>Back</a></b>
                   </span>
                </form>
            </div>
        </div>
    )
}

export default Signup
