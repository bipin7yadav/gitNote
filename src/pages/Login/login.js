import "./login.css"
import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <div className="signup">
                <div className="info">
                    <div className="SignUP">
                        <h2 id="sign-up">Login</h2>

                    </div >

                    <div className="textbox">
                        <label for="name">Email Address*</label><br />
                        <input type="text" className="login-input" placeholder="bipinyadav9769@gmail.com" /><br />
                    </div>

                    <div className="textbox">
                        <label for="name">Password*</label><br />
                        <input type="password" className="login-input" placeholder="*************" /><br />
                        
                    </div>


                    <div  className="textbox2">
                        <input type="checkbox" className="center-text"></input>
                        <div className="center-text">Remember Me</div>
                    </div>

                    
                    <Link to="/" ><button className="btn-login">Login</button></Link>
                    <Link to=""><div>Forgot Password ?</div></Link>

                    <Link to="/signUp" ><button className="btn-login">Sign Up</button></Link>

                    

                </div>
            </div>
        </>
    )
}

export { Login }