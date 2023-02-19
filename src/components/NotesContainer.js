import Note from "./Note"

export default function NotesContainer({ notes ,onDelete }) {
    return (
        <div className="container col-lg-6 offset-lg-3 my-5">
            {
                notes.length > 0 ? 
                notes.map((n) => {
                    return(
                        <Note note={n} key={n.id} onDelete={onDelete}/>
                    )
                })
                : 'Write some notes'
            }
        </div>
    )
}
