import { useReducer, useState, useContext, createContext } from "react";


const notesContext = createContext()

const NotesContextProvider = ({ children }) => {

    const initialState = {
        bySearch: "",
        byPriority:null,
        pallete:true,
        priority:true,
        bySort:"",
    }

    function reducer(state, action) {
        switch (action.type) {
        
            case "Search":
                return {
                    ...state,
                    bySearch: action.payload
                }
                case "Low":{
                    return {
                        ...state,
                        byPriority:action.payload
                    }
                }
    
                case "Medium":{
                    return {
                        ...state,
                        byPriority:action.payload
                    }
                }
    
                case "High":{
                    return {
                        ...state,
                        byPriority:action.payload
    
                    }
                }

                case "Clear":{
                    return{
                        byPriority:null,bySearch:null
                    }
                }
                case "Pallete":{
                    return{
                        ...state,
                        pallete:action.payload
                    }
                }

                case "Priority":{
                    return{
                        ...state,
                        priority:action.payload
                    }
                }

                case "Sort":{
                    return{
                        ...state,
                        bySort:action.payload
                    }
                }

            default:
                return state
        }
    }

    function noteReducer(state, action) {
        switch (action.type) {
            case "Add": {
                return {
                    ...state,
                    savedNotes: [...state.savedNotes, { ...action.payload }]
                }
            }
            case "Filtered":{
                return{
                    ...state,
                    savedNotes:action.payload
                }
            }
            case "Remove_Note":{
                return {
                    ...state,
                    savedNotes:state.savedNotes.filter((note)=>note.id !==action.payload.id)
                }
            }

            case "Add_To_Trash": {
                return {
                    ...state,
                    trash: [...state.trash, { ...action.payload }]

                }
            }
            case "Remove_From_Trash": {
                return {
                    ...state,
                    trash: state.trash.filter(data => data.id !== action.payload.id)
                }
            }
            case "Add_To_Archive": {
                return {
                    ...state,
                    archive: [...state.archive, { ...action.payload }]

                }
            }
            case "Remove_From_Archive": {
                return {
                    ...state,
                    archive: state.archive.filter(data => data.id !== action.payload.id)
                }
            }
            case "Add_To_Label":{
                return {
                    ...state,
                    label: [...state.label, { ...action.payload }]

                }
            }
            case "Remove_From_Label":{
                return {
                    ...state,
                    label: state.label.filter(data => data.id !== action.payload.id)
                }
            }
            case "Label":{
                return {
                    ...state,
                    labelArray:[...state.labelArray,action.payload]
                }
            }

            
        }
    }


    const [styles, dispatchStyles] = useReducer(reducer, initialState)

    const [note, dispatchNote] = useReducer(noteReducer, {
        savedNotes: [],
        trash: [],
        label: [],
        archive: [],
        labelArray:[],
        

    })
    return (
        <notesContext.Provider value={{
            styles, dispatchStyles, note, dispatchNote,}}>
            {children}
        </notesContext.Provider>
    )

}

const useNotesContext = () => useContext(notesContext)

export { useNotesContext, NotesContextProvider }
