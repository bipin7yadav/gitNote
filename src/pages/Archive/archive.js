import "./archive.css"
import { Link } from "react-router-dom"
import { useNotesContext } from "../../context/context"


function Archive() {
    let { styles, dispatchStyles, note: { archive }, dispatchNote } = useNotesContext();
    console.log("Archive",archive)
    return (

        <div className="flexMeArchive">
            <div className="sideBar">
                <div className="hover"><Link to="/home"><h2><i class="material-icons">home</i>Home</h2></Link></div>
                <div className="hover"><Link to="/archive"><h2><i class="material-icons">archive</i>Archive</h2></Link></div>
                <div className="hover"><Link to="/Label" ><h2><i class="material-icons">label</i>Label</h2></Link></div>
                <div className="hover"><Link to="/Trash"><h2><i class="material-icons">delete</i>Trash</h2></Link></div>
            </div>
            <div className="labels1">
                <div >
                    {
                    archive.map((item, index) => {
                        return (
                            <>
                                {
                                
                                        <div className="mapNotes" key={index} style={{backgroundColor:item.Color}}>
                                            <div className="title">
                                                <div>Title:{item.Title}</div>
                                                <div>{item.Prioity}</div>
                                                {/* <i class="material-icons">push_pin</i> */}
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: item.Content }}></div>
                                                {
                                                    item.Label === "" ? <div></div> : <div className="lName">{item.Label}</div>
                                                }
                                            <div className="buttons">
                                                {/* <div><i class="material-icons">palette</i></div> */}
                                                {/* <div><i class="material-icons" onClick={()=>{}}>label</i></div> */}
                                                <div><i class="material-icons" onClick={()=>{
                                                    dispatchNote({
                                                        type: "Add",
                                                        payload:item
                                                    })

                                                    dispatchNote({
                                                        type:"Remove_From_Archive",
                                                        payload:item
                                                    })
                                                }}>unarchive</i></div>
                                                <div><i class="material-icons" onClick={()=>{
                                                    dispatchNote({
                                                        type:"Remove_From_Archive",
                                                        payload:item
                                                    })
                                                }}>delete_forever</i></div>
                                            </div>
                                            <div>{(item.Date).slice(0,25)}</div>
                                        </div> 
                                }
                                
                            </>
                        )

                    })
                }
                </div>
            </div>
        </div>

    );
};

export { Archive };

