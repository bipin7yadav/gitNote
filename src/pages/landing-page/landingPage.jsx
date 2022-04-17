import {Link} from "react-router-dom"
import "./landingPage.css"
function FrontView(){
    return(
        <>
        <div className="container">
            <div className="img">
                <img className="noteimg" src="./assets/notesApp.svg"/>
            
            </div>
            <div className="links">
                <button className="Cbtn"><Link  to="./home"><div className="link">CREATE NOTE</div></Link></button>
                <div className="entry">
                    <Link to="/login" ><div className="link">Login  /</div></Link>
                    <Link to="/signUp" ><div className="link">SignUp</div></Link>
                </div>
            </div>
        </div>
        </>
    )
}


export {FrontView}