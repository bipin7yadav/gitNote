import {useNotesContext} from "../context/context"
function SortBy() {

    let {styles,dispatchStyles}=useNotesContext()
    const {byPriority}=styles;
    return (
        <>
            <div >
                <div>SortBy</div>
                <hr/>
                <div><button onClick={()=>{
                    dispatchStyles({
                        type:"Clear"
                    })
                }}>Clear Filters</button></div>
                <hr />
            </div>
            <div>
                <div>Date</div>
                <div>
                    <input  type="radio" name="date" 
                    onClick={()=>{
                        dispatchStyles({
                            type:"Sort",
                            payload:"Latest"
                        })
                    }}
                    />
                    <label>Latest</label>
                </div>
                <div>
                    <input type="radio" name="date" 
                    onClick={()=>{
                        dispatchStyles({
                            type:"Sort",
                            payload:"Oldest"
                        })
                    }}
                    />
                    <label>Oldest</label>
                </div>
            </div>
        
            <div>
                <div>Filter By Priority</div>
                <hr />
                <div>
                    <input type="radio" name="priority" 
                    onClick={()=>{
                        dispatchStyles({
                            type:"Low",
                            payload:"Low"
                        })
                    }}/>
                    <label>Low</label>
                </div>
                <div>
                    <input type="radio" name="priority" 
                    onClick={()=>{
                        dispatchStyles({
                            type:"Medium",
                            payload:"Medium"
                        })
                    }}/>
                    <label>Medium</label>
                </div>
                <div>
                    <input type="radio" name="priority" 
                    onClick={()=>{
                        dispatchStyles({
                            type:"High",
                            payload:"High"
                        })
                    }}/>
                    <label>High</label>
                </div>
            </div>
        </>
    )
}

export { SortBy }