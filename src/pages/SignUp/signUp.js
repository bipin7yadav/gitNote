import "./signUp.css"
import { Link } from "react-router-dom"
function SignUp(){
    return(
        <>
        <div className="signup">
                <div className="info">
                    <div className="SignUP">
                        <h2 id="sign-up">sign-up</h2>

                    </div >

                    <div><label for="name">First Name*</label><br />
                        <input type="text" placeholder="Bipin" /><br /></div>

                    <div><label for="name">Last Name*</label><br />
                        <input type="text" placeholder="Yadav" /><br /></div>

                    <div><label for="name">Email Address*</label><br />
                        <input type="text" placeholder="bipinyadav9769@gmail.com" /><br /></div>

                    <div><label for="name">Password*</label><br />
                        <input type="password" placeholder="*************" /><br /></div>

                    <div><label for="name">Confirm Password*</label><br />
                        <input type="password" placeholder="*************" /><br /></div>

                    <div><div className="center-text">I accept all Terms & Conditions</div></div>

                    <button id="submit"><a href="/Login">Create New Account</a></button>

                    <div className="center-text">Already have an account </div>
                    <Link to="/login"><button className="login">Login</button></Link>

                </div>
            </div>
        </>
    )
}

export {SignUp}