import "./label.css"
import { Link } from "react-router-dom"
import { useNotesContext } from "../../context/context"

function Label() {
    let { styles, dispatchStyles, note: { savedNotes, label, labelArray }, dispatchNote } = useNotesContext();
    // let k=[]
    function newLabel(m = Set(m), array) {
        let k = []
        for (let i of m) {
            for (let j of array) {
                if (j.Label === i & j.Label !== "") {
                    k.push(j)
                }
            }
        }
        return k

    }
    

    return (
        <>
            <div className="labelPage">
                <div className="sideBar">
                    <div className="hover"><Link to="/home"><h2><i class="material-icons">home</i>Home</h2></Link></div>
                    <div className="hover"><Link to="/archive"><h2><i class="material-icons">archive</i>Archive</h2></Link></div>
                    <div className="hover"><Link to="/Label" ><h2><i class="material-icons">label</i>Label</h2></Link></div>
                    <div className="hover"><Link to="/Trash"><h2><i class="material-icons">delete</i>Trash</h2></Link></div>
                </div>
                <div className="labels1">
                    <div className="list" >
                        {
                            newLabel(labelArray, savedNotes).map((item, index) => {
                                return (
                                    <>
                                        {
                                            // item.hw ?
                                            <div className="mapNotes" key={index} style={{ backgroundColor: item.Color }}>
                                                <div className="title">
                                                    <div>Title:{item.Title}</div>
                                                    <div>{item.Prioity}</div>
                                                    {/* <i class="material-icons">push_pin</i> */}
                                                </div>
                                                <hr />
                                                <div dangerouslySetInnerHTML={{ __html: item.Content }}></div>
                                                {
                                                    item.Label === "" ? <div></div> : <div className="lName">{item.Label}</div>
                                                }
                                                <div className="buttons">
                                                    {/* <div><i class="material-icons" onClick={()=>{}}>palette</i></div> */}
                                                    <div><i class="material-icons" onClick={() => {
                                                        dispatchNote({
                                                            type: "Add_To_Archive",
                                                            payload: item
                                                        })
                                                        dispatchNote({
                                                            type: "Remove_Note",
                                                            payload: item
                                                        })
                                                    }}>archive</i></div>

                                                    <div><i class="material-icons" onClick={() => {
                                                        dispatchNote({
                                                            type: "Add_To_Trash",
                                                            payload: item
                                                        })
                                                        dispatchNote({
                                                            type: "Remove_Note",
                                                            payload: item
                                                        })
                                                    }}>delete</i></div>
                                                </div>
                                                <div>{(item.Date).slice(0, 25)}</div>
                                            </div>
                                            // : console.log(item, "hw")
                                        }

                                    </>
                                )

                            })
                        }
                    </div>



                </div>
            </div>

        </>
    )
}

export { Label }