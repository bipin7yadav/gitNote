import "./navigation.css";
import {Link} from "react-router-dom";

function Navigation() {

    return <>

        <div className="header">
            <div className="headSearch">
                <div className="searchBar">
                    <Link to="/"><h1 className="WebName"><i class="material-icons  " style={{color:"blue",fontSize:"49px"}}>cloud</i>Me</h1></Link>
                </div>
                <div className="searchBar2" >
                    <input className="search" type="text" placeholder="Search..........."
                    />
                </div>
            </div>

            <div className="cartWish">
                <h2 className="icon"><i class="material-icons ">login</i> </h2>
                {/* <i class="material-icons ">login</i> */}
                <h2 className="icon">
                    <button className="sortBy">
                        {/* <img className="sort" src="https://cdn-icons-png.flaticon.com/128/318/318146.png" /> */}
                        <i class="material-icons">sort</i>
                    </button></h2>

            </div>
        </div>
    </>
}

export { Navigation }