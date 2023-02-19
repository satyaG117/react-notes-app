import { useState } from 'react';

export default function NotesForm({ onAdd, isVisible }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!text || !title) {
            alert('Title and Text fields can not be empty');
            return;
        }
        
        onAdd({ title , text }); 
        setTitle('');
        setText('');
    }

    return (
        <div className='container col-lg-6 offset-lg-3 my-3'>

            <form onSubmit={handleSubmit} style={isVisible ? { display: "block" } : { display: 'none' }}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea className="form-control" id="text" rows="4" value={text} onChange={(e) => {
                        setText(e.target.value)
                    }}>
                    </textarea>

                </div>
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>
        </div>
    )
}
