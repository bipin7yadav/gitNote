import "./label.css"
import { Link } from "react-router-dom"
import { useNotesContext } from "../../context/context"

function Label() {
    let { styles, dispatchStyles, note: { savedNotes }, dispatchNote } = useNotesContext();
    return (
        <>
            <div className="flexMeArchive">
                <div className="sideBar">
                    <div className="hover"><Link to="/home"><h2><i class="material-icons">home</i>Home</h2></Link></div>
                    <div className="hover"><Link to="/archive"><h2><i class="material-icons">archive</i>Archive</h2></Link></div>
                    <div className="hover"><Link to="/Label" ><h2><i class="material-icons">label</i>Label</h2></Link></div>
                    <div className="hover"><Link to="/Trash"><h2><i class="material-icons">delete</i>Trash</h2></Link></div>
                </div>
                <div className="labels">
                    <div className="hw">
                        <div>HomeWork:</div>
                        {
                            savedNotes.map((item, index) => {
                                return (
                                    <>
                                        {
                                            item.hw ?
                                                <div className="mapNotes" key={index}>
                                                    <div className="title">
                                                        <div>Title:{item.Title}</div>
                                                        <i class="material-icons">push_pin</i>
                                                    </div>
                                                    <div>Content:{item.Content}</div>
                                                    <div className="buttons">
                                                        <div><i class="material-icons">palette</i></div>
                                                        <div><i class="material-icons">label</i></div>
                                                        <div><i class="material-icons">archive</i></div>
                                                        <div><i class="material-icons">delete</i></div>
                                                    </div>
                                                </div>
                                                : console.log("")
                                        }

                                    </>
                                )

                            })
                        }
                    </div>
                    <div className="project">Project:
                        {
                            savedNotes.map((item, index) => {
                                return (
                                    <>
                                        {
                                            item.project ?
                                                <div className="mapNotes" key={index}>
                                                    <div className="title">
                                                        <div>Title:{item.Title}</div>
                                                        <i class="material-icons">push_pin</i>
                                                    </div>
                                                    <div>Content:{item.Content}</div>
                                                    <div className="buttons">
                                                        <div><i class="material-icons">palette</i></div>
                                                        <div><i class="material-icons">label</i></div>
                                                        <div><i class="material-icons">archive</i></div>
                                                        <div><i class="material-icons">delete</i></div>
                                                    </div>
                                                </div>
                                                : console.log("")
                                        }

                                    </>
                                )

                            })
                        }
                    </div>
                    <div className="show">Show:
                        {
                            savedNotes.map((item, index) => {
                                return (
                                    <>
                                        {
                                            item.show ?
                                                <div className="mapNotes" key={index}>
                                                    <div className="title">
                                                        <div>Title:{item.Title}</div>
                                                        <i class="material-icons">push_pin</i>
                                                    </div>
                                                    <div>Content:{item.Content}</div>
                                                    <div className="buttons">
                                                        <div><i class="material-icons">palette</i></div>
                                                        <div><i class="material-icons">label</i></div>
                                                        <div><i class="material-icons">archive</i></div>
                                                        <div><i class="material-icons">delete</i></div>
                                                    </div>
                                                </div>
                                                : console.log("")
                                        }

                                    </>
                                )

                            })
                        }
                    </div>
                    <div className="meeting">meeting:
                        {
                            savedNotes.map((item, index) => {
                                return (
                                    <>
                                        {
                                            item.meeting ?
                                                <div className="mapNotes" key={index}>
                                                    <div className="title">
                                                        <div>Title:{item.Title}</div>
                                                        <i class="material-icons">push_pin</i>
                                                    </div>
                                                    <div>Content:{item.Content}</div>
                                                    <div className="buttons">
                                                        <div><i class="material-icons">palette</i></div>
                                                        <div><i class="material-icons">label</i></div>
                                                        <div><i class="material-icons">archive</i></div>
                                                        <div><i class="material-icons">delete</i></div>
                                                    </div>
                                                </div>
                                                : console.log("")
                                        }

                                    </>
                                )

                            })
                        }
                    </div>
                    <div className="mappingArea">

                    </div>
                </div>
            </div>

        </>
    )
}

export { Label }