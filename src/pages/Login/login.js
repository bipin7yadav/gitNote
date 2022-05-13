import "./login.css"
import { Link,useLocation,useNavigate } from "react-router-dom"
import {useAuth} from "../../Authentication/authContext"
import { useState } from "react";

function Login() {

    const [ hidden, setHidden ] = useState(false);
    const {login,setLogin}=useAuth();
    const location =useLocation();
    const navigate =useNavigate();

    return (
        <>
            <div className="signup">
                <div className="info">
                    <div className="SignUP">
                        <h2 id="sign-up">Login</h2>

                    </div >

                    <div className="textbox">
                        <label for="name">Email Address*</label><br />
                        <input type="text" className="login-input" placeholder="bipinyadav9769@gmail.com" defaultValue={ hidden ? "adarshbalika@gmail.com" : ""} /><br />
                    </div>

                    <div className="textbox">
                        <label for="name">Password*</label><br />
                        <input type="password" className="login-input" placeholder="*************" defaultValue={ hidden ? "12345" : ""} /><br />
                        
                    </div>


                    <div  className="textbox2">
                        <input type="checkbox" className="center-text"></input>
                        <div className="center-text">Remember Me</div>
                    </div>

                    
                    
                    <Link to="/home">
                        <button className="btn-login"
                        onClick={()=>{
                            setLogin(hidden ? !login : "")
                            navigate(location.state.from.pathname)
                        }}>Login</button></Link>
                    <div>
                        <button onClick={()=>{setHidden(true)}}>Login as a Guest</button>
                    </div>
                    <Link to=""><div>Forgot Password ?</div></Link>

                    <Link to="/signUp" ><button className="btn-login">Sign Up</button></Link>

                    

                </div>
            </div>
        </>
    )
}

export { Login }