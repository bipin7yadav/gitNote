import "./navigation.css";
import {Link} from "react-router-dom";

function Navigation() {

    return <>

        <div className="header">
            <div className="headSearch">
                <div className="searchBar">
                    <Link to="/"><h1 className="WebName"><i class="material-icons  " style={{color:"blue",fontSize:"49px"}}>cloud</i>Me</h1></Link>
                </div>
            </div>

            <div className="cartWish">
                <div className="icon">
                <Link to="/login"><span class='material-icons log'>account_circle</span></Link>
                </div>

            </div>
        </div>
    </>
}

export { Navigation }