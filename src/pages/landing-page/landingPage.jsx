import {Link} from "react-router-dom"
import "./landingPage.css"
// function FrontView(){
//     return(
//         <>
//         <div className="container">
//             <div className="img">
//                 <img className="noteimg" src="./assets/notesApp.svg"/>
            
//             </div>
//             <div className="links">
//                 <button className="Cbtn"><Link  to="./home"><div className="link">CREATE NOTE</div></Link></button>
//                 {/* <div className="entry">
//                     <Link to="/login" ><div className="link">Login  /</div></Link>
//                     <Link to="/signUp" ><div className="link">SignUp</div></Link>
//                 </div> */}
//             </div>
//         </div>
//         </>
        
//     )
// }


// export {FrontView}

function FrontView(){
    return(
        <div className="logo">
            <div className="main-img">
                <img src="./assets/notesApp.svg" alt="nothing" className="mimg"/>
            </div>
            <div className="btndr">
                <div>
                    <h1>Write and format notes</h1>
                </div>
                <div>
                    <p>
                    Notes is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, memo, email, message, shopping list and to do list. It makes to take a note easier than any other notepad and memo apps.
                    </p>
                </div>
                <div>
                    <Link to="/home">
                    <button className="start"><strong>Make Note</strong></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {FrontView}