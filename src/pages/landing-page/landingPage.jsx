import { Link } from "react-router-dom"
import "./landingPage.css"
function FrontView() {
    return (
        <>
            <div className="container">
                <div>
                    <img className="note-img" src="./assets/notesApp.svg" />
                </div>

                <div className="links">
                    <Link to="./home">
                        <button className="Cbtn">CREATE NOTE</button>
                    </Link>
                    <div className="entry">
                        <Link to="/login" >
                            <p className="link">Login /</p>
                        </Link>
                        <Link to="/signUp" ><p className="link margin"> SignUp</p></Link>
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur alias omnis voluptate! Quis tempore nihil ex, sed, distinctio eum, molestiae quos obcaecati veritatis odio voluptatum laudantium tenetur inventore ipsum saepe?
                    </div>
                </div>
            </div>
        </>
    )
}


export { FrontView }