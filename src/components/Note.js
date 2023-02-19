
export default function Note({ note ,onDelete}) {
    return (
        <div className="card text-bg-dark mb-3" style={{ minHeight: "125px" }}>
            <h3 className="card-header">{note.title}</h3>
            <div className="card-body">
                <p className="card-text">{note.text}</p>
            </div>
            <div className="me-auto p-2">
                <button className="btn btn-warning btn-sm mx-2 p-1">
                    <span className="material-symbols-outlined card-icon">
                        edit
                    </span>
                </button>
                <button className="btn btn-danger btn-sm mx-2 p-1">
                    <span className="material-symbols-outlined card-icon"
                     onClick={()=>{
                        onDelete(note.id)
                    }}>
                        delete
                    </span>
                </button>
            </div>
        </div>

    )
}
