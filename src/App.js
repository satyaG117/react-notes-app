import './App.css';
import AddNotes from './components/AddNotes';
import NotesContainer from './components/NotesContainer';

import { useState , useEffect } from 'react';

function App() {
  
  function getNotes(){
    if (localStorage.getItem("notes") != null)
      return JSON.parse(localStorage.getItem("notes"))
    return [];
  }

  const [notes, setNotes] = useState(getNotes);

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
  } , [notes])

  function addNewNote(note) {
    // console.log(note);
    const id = crypto.randomUUID();
    console.log({id , note})
    setNotes(() => { return [ {id , ...note } , ...notes ] });
    // console.log(notes);
  }

  function deleteNote(id){
    setNotes(notes.filter(t => t.id !== id))
  }

  return (
    <>
      <AddNotes onAdd={addNewNote} />
      <NotesContainer notes={notes} onDelete={deleteNote} />
    </>
  );
}

export default App;
