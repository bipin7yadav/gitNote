import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SortBy } from "../../components/sortby";
import { useNotesContext } from "../../context/context"

function Home() {
    let { styles, dispatchStyles, note: { savedNotes }, dispatchNote } = useNotesContext();

    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const obj = { Title: title, Content: content ,trash:false,archive:false,hw:false,project:false,show:false,meeting:false}

    const { byBold, byItalic, byUnderLine, byStrike,bySearch } = styles;
    
    function displayNotes(){
        let sortedNotes =savedNotes;

        if (bySearch){
            sortedNotes=sortedNotes.filter((a)=>a.Title.toLowerCase().includes(bySearch))
        }
        return sortedNotes
    }

    return (
        <>

            <div className="flexMe">
                <div className="sideBar">
                    <div className="hover"><Link to="/home" ><h2><i class="material-icons">home</i>Home</h2></Link></div>
                    <div className="hover"><Link to="/archive" ><h2><i class="material-icons">archive</i>Archive</h2></Link></div>
                    <div className="hover"><Link to="/Label" ><h2><i class="material-icons">label</i>Label</h2></Link></div>
                    <div className="hover"><Link to="/Trash" ><h2><i class="material-icons">delete</i>Trash</h2></Link></div>
                </div>
                <div className="home">

                    <div className="main-structure" >
                    <div className="searchBar2" >
                    <input className="search" type="text" placeholder="Search..........."
                    onChange={(e)=>{
                        dispatchStyles({
                            type:"Search",
                            payload:e.target.value
                        })
                    }}
                    />
                </div>
                        
                        <div className="imgFlex" >
                            <div >
                                <input style={{}} className="Add" placeholder="Add Title" onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="buttons">
                                <div className="footbtn">
                                    <button className="btn3" style={{ backgroundColor: byBold ? "skyblue" : "inherit" }} onClick={() => {
                                        dispatchStyles({
                                            type: "Bold",
                                            payload: !byBold
                                        })
                                    }}>𝑩</button>
                                    <button className="btn3" style={{ backgroundColor: byItalic ? "skyblue" : "inherit" }} onClick={() => {
                                        dispatchStyles({
                                            type: "Italic",
                                            payload: !byItalic
                                        })
                                    }}>𝙄</button>
                                    <button className="btn3" style={{ backgroundColor: byUnderLine ? "skyblue" : "inherit" }} onClick={() => {
                                        dispatchStyles({
                                            type: "UnderLine",
                                            payload: !byUnderLine
                                        })
                                    }}>U̲</button>
                                    <button className="btn3" style={{ backgroundColor: byStrike ? "skyblue" : "inherit" }} onClick={() => {
                                        dispatchStyles({
                                            type: "Strike",
                                            payload: !byStrike
                                        })
                                    }}>s̶</button>
                                </div>
                                <div>
                                    <button className="btn"><img className="style1" src="https://cdn-icons-png.flaticon.com/128/235/235476.png" /></button>
                                    <button className="btn"><img className="style1" src="https://cdn-icons-png.flaticon.com/128/235/235478.png" /></button>
                                </div>
                                <div className="imgbtn">
                                    <button className="btn"><img className="style1" src="https://cdn-icons-png.flaticon.com/128/834/834147.png" /></button>
                                    <button className="btn"><img className="style1" src="https://cdn-icons-png.flaticon.com/128/92/92353.png" /></button>

                                </div>
                            </div>
                            <div>
                                <textarea style={{
                                    fontWeight: byBold ? "bold" : "inherit", fontStyle: byItalic ? "italic" : "inherit",
                                    textDecoration: byUnderLine ? "underLine" : "inherit", textDecorationLine: byStrike ? "line-through" : "inherit"
                                }} className="AddText" placeholder="Describe Your Note"
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="foot">
                                <div className="footbtn">
                                    <button className="btn2"><img className="style" src="https://cdn-icons-png.flaticon.com/128/565/565789.png" /></button>
                                    <button className="btn2"><img className="style" src="https://cdn-icons.flaticon.com/png/128/3936/premium/3936619.png?token=exp=1649530959~hmac=73550cc91d4ba00f4ba1045d56004b5d" /></button>
                                    <button className="btn2"><img className="style" src="https://cdn-icons.flaticon.com/png/128/2926/premium/2926309.png?token=exp=1649531136~hmac=dd06ab11c6aba2726fea994d9e979805" /></button>
                                </div>
                                <div></div>
                                <div>
                                    <button className="Addbtn" onClick={() => {
                                        dispatchNote({
                                            type: "Add",
                                            payload: obj
                                        })
                                        setContent("")
                                        setTitle("")
                                    }} >Add Note</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sort2">
                    <SortBy />
                </div>

            </div>
            <div className="mappingArea">
                {
                    displayNotes().map((item, index) => {
                        return (
                            <>
                                <div className="mapNotes" key={index}>
                                    <div className="title">
                                        <div>Title:{item.Title}</div>
                                        <i class="material-icons">push_pin</i>
                                    </div>
                                    <div>Content:{item.Content}</div>
                                    <div className="buttons">
                                        <span><input type="checkbox" onClick={()=>{item.hw=true}}/><label onClick={()=>{item.hw=true}}>HW</label></span>
                                        <span><input type="checkbox" onClick={()=>{item.project=true}}/><label >Project</label></span>
                                        <span><input type="checkbox" onClick={()=>{item.show=true}}/><label >Show</label></span>
                                        <span><input type="checkbox" onClick={()=>{item.meeting=true}}/><label>Meeting</label></span>
                                    </div>
                                    <div className="buttons">
                                        <div><i class="material-icons">palette</i></div>
                                        <div><i class="material-icons">label</i></div>
                                        <div><i class="material-icons" onClick={()=>{item.archive=true}}>archive</i></div>
                                        <div><i class="material-icons" onClick={()=>{item.trash=true}}>delete</i></div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }
            </div>
        </>
    )
}

export { Home }