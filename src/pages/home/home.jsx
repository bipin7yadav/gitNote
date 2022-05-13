import "./home.css";
import { Link } from "react-router-dom";
import {v4 as uuid} from "uuid";
import { useState } from "react";
import { SortBy } from "../../components/sortby";
import { NotesContextProvider, useNotesContext } from "../../context/context";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const formats = ["bold", "italic", "underline", "strike", "image", "list", "link", "clean", "video"];
const modules = {
    toolbar: [
        ["bold", "italic", "underline", "strike"],
        [],
        [{ list: "ordered" }, { list: "bullet" }],
        [],
        ["image", "video", "link"],
        ["clean"],
    ],
};

function Home() {
    let { styles, dispatchStyles, note: { savedNotes,labelArray }, dispatchNote } = useNotesContext();

    const [content, setContent] = useState("")
    const [title, setTitle] = useState("") 
    const [color,setColor] =useState("")
    const [label,setLabel]=useState("")
    const [prioity,setPriority]=useState("Low")
    const [count,setCount]=useState(0)
    const [toggle,setToggle]=useState(false)
    
    const obj = { Title: title, Content: content ,Color:color,Label:label,id:uuid(),Prioity:prioity,Date:(new Date()).toString(),Sort:count}

    const {bySearch,byPriority,priority,pallete,bySort } = styles;


    function displayNotes() {
        let sortedNotes =savedNotes;

        if (bySearch) {
            sortedNotes = sortedNotes.filter((a) => a.Title.toLowerCase().includes(bySearch))
        }

        if (byPriority==="Low"){
            sortedNotes = savedNotes.filter((a)=>a.Prioity==="Low")
        }

        if (byPriority==="Medium"){
            sortedNotes = savedNotes.filter((a)=>a.Prioity==="Medium")
        }

        if (byPriority==="High"){
            sortedNotes = savedNotes.filter((a)=>a.Prioity==="High")
        }
        if (bySort==="Latest"){
            sortedNotes =sortedNotes.sort((a,b)=>
                a.Sort-b.Sort 
                
            )
        }
        if (bySort==="Oldest"){
            sortedNotes =sortedNotes.sort((a,b)=>
                b.Sort-a.Sort
                
            )
        }
        return sortedNotes
    }

    const [editTitle,setEditTitle]=useState("")
    const [editCont,setEditCont]=useState("")
    const [editLabel,setEditLabel]=useState("")

    ////Before Edit

    let [BeforeTitle,setBeforeTitle]=useState("")
    let [BeforeCont,setBeforeCont]=useState("")
    let [BeforeLabel,setBeforeLabel]=useState("")

    ///Id Checker for conformation
    const [checkId,setCheckId]=useState("")

    function editNote(item){
        console.log(item.Title)
        setCheckId(item.id)
        setBeforeTitle(item.Title)
        setBeforeCont(item.Content)
        setBeforeLabel(item.Label)
        setToggle(true)
    }

    function finalEdit(){
        let m=savedNotes.find((a)=>a.id===checkId)
        console.log(m)
        var newArray= savedNotes.map((obj)=>{
            if(obj.id===m.id){
                return {...obj,Title:editTitle,Content:editCont,Label:editLabel,}
            }else{
                return obj
            }
        })
        dispatchNote({
            type:"Filtered",
            payload:newArray
        })
        setBeforeTitle("")
        setBeforeCont("")
        setBeforeLabel("")
        setToggle(false)
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
                                onChange={(e) => {
                                    dispatchStyles({
                                        type: "Search",
                                        payload: e.target.value
                                    })
                                }}
                            />
                        </div>

                        <div className="imgFlex" style={{backgroundColor:color}}>
                            <div >
                                <input style={{}} className="Add" placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div>
                                <ReactQuill
                                    modules={modules}
                                    formats={formats}
                                    value={content}
                                    placeholder="Take a note..."
                                    onChange={(e)=>setContent(e)}

                                // onChange={setValue}
                                />
                            </div>
                            <div>
                                <input className="Add" placeholder="Add Label" value={label}
                                onChange={(e)=>setLabel(e.target.value)}
                                />
                            </div>

                            <div className="foot">
                                <div className="footbtn">
                                    {/* <div ><i class="material-icons" onClick={()=>{
                                        dispatchStyles({
                                            type:"Pallete",
                                            payload:!pallete
                                        })
                                    }}>palette</i></div>
                                    <div><i class='material-icons' onClick={()=>{
                                        dispatchStyles({
                                            type:"Priority",
                                            payload:!priority
                                        })
                                    }}>bar_chart</i></div> */}
                                    <div 
                                    // style={{display:priority?"none":"inherit"}}
                                    >
                
                                        <button className="priority" onClick={()=>{setPriority("Low")}}>L</button>
                                        <button className="priority" onClick={()=>{setPriority("Medium")}}>M</button>
                                        <button className="priority" onClick={()=>{setPriority("High")}}>H</button>
                                    </div>

                                </div>
                                <div className="color" 
                                // style={{display:pallete?"none":"inherit"}}
                                >
                                    <div className="red" onClick={()=>setColor("lightSalmon")}></div>
                                    <div className="blue" onClick={()=>setColor("azure")}></div>
                                    <div className="pink" onClick={()=>setColor("pink")}></div>
                                    <div className="yellow" onClick={()=>setColor("yellow")}></div>
                                </div>
                                <div>
                                    <button className="Addbtn" onClick={() => {
                                        dispatchNote({
                                            type: "Add",
                                            payload: obj
                                        })
                                        dispatchStyles({
                                            type:"Pallete",
                                            payload:!pallete
                                        })
                                        dispatchStyles({
                                            type:"Priority",
                                            payload:!priority
                                        })
                                        const check=labelArray.some(a=>a===label)
                                        if(!check){
                                            dispatchNote({
                                                type:"Label",
                                                payload:label
                                            })
                                        }
                                        setCount((count)=>count+1)
                                        setContent("")
                                        setTitle("")
                                        setColor("")
                                        setLabel("")
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
                                <div className="mapNotes" key={item.id} style={{backgroundColor:item.Color}}>
                                    <div className="title">
                                        <div>Title:{item.Title}</div>
                                        <div>{item.Prioity}</div>
                                    </div>
                                    <hr/>
                                    <div dangerouslySetInnerHTML={{ __html: item.Content }}
                                    ></div>
                                    {
                                        item.Label===""?<div></div>:<div className="lName">{item.Label}</div>
                                    }
                                    {/* <div className="lName">{item.Label}</div> */}
                                    {/* <div className="buttons">
                                        <span><input type="checkbox" onClick={() => { }} /><label onClick={() => { }}>HW</label></span>
                                        <span><input type="checkbox" onClick={() => { }} /><label >Project</label></span>
                                        <span><input type="checkbox" onClick={() => { }} /><label >Show</label></span>
                                        <span><input type="checkbox" onClick={() => { }} /><label>Meeting</label></span>
                                    </div> */}
                                    <div className="buttons">
                                        
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
                                        <div><i class="material-icons" onClick={()=>{editNote(item)}}>edit</i></div>
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
                                    <div>{(item.Date).slice(0,25)}</div>
                                </div>
                            </>
                        )

                    })
                }
            </div>
            <div style={{display:toggle?"inherit":"none"}} className="edit">
                <div className="editItem">
                    <label >Title</label>
                    <input className="editItems" placeholder="change Title" type="text"  defaultValue={BeforeTitle}  onChange={(e)=>setEditTitle(e.target.value)}/>
                </div>
                <div className="editItem">
                    <label >Cont</label>
                    <textarea className="editItems" placeholder="change Content"  type="text"  defaultValue={BeforeCont} onChange={(e)=>setEditCont(e.target.value)} />
                </div>
                <div className="editItem">
                    <label >Label</label>
                    <input className="editItems" placeholder="change Lable"  type="text"  defaultValue={BeforeLabel} onChange={(e)=>setEditLabel(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>finalEdit()}>Edit</button>
                </div>
            </div>
        </>
    )
}

export { Home }