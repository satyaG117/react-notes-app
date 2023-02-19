import { useState } from "react"
import NotesForm from "./NotesForm"

export default function AddNotes({onAdd}) {
    const [formVisibility , setVisibility] = useState(false);
    function toggleVisibility(){
        setVisibility(!formVisibility);
        console.log(formVisibility)
    }
    return (
        <>
            <nav className="nav bg-dark text-white p-2">
                <button type="button" className="btn btn-dark" onClick={toggleVisibility}>

                    <span className="material-symbols-outlined" >
                        add_circle
                    </span>
                </button>
                <div className="p-1">
                    <h2>Notes</h2>
                </div>
            </nav>

            <NotesForm onAdd={onAdd} isVisible={formVisibility}/>



        </>
    )
}
