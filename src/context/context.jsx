import { useReducer, useState, useContext, createContext } from "react";


const notesContext = createContext()

const NotesContextProvider = ({ children }) => {

    const initialState = {
        byBold: false,
        byItalic: false,
        byUnderLine: false,
        byStrike: false,
        bySearch: ""
    }

    function reducer(state, action) {
        switch (action.type) {
            case "Bold":
                return {
                    ...state,
                    byBold: action.payload
                }
            case "Italic":
                return {
                    ...state,
                    byItalic: action.payload
                }
            case "UnderLine":
                return {
                    ...state,
                    byUnderLine: action.payload
                }
            case "Strike":
                return {
                    ...state,
                    byStrike: action.payload
                }
            case "Search":
                return {
                    ...state,
                    bySearch: action.payload
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
        }
    }
    const [styles, dispatchStyles] = useReducer(reducer, initialState)

    const [note, dispatchNote] = useReducer(noteReducer, {
        savedNotes: [],
    })
    return (
        <notesContext.Provider value={{ styles, dispatchStyles, note, dispatchNote }}>
            {children}
        </notesContext.Provider>
    )

}

const useNotesContext = () => useContext(notesContext)

export { useNotesContext, NotesContextProvider }
