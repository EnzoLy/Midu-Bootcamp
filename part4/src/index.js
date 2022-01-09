import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { Note } from "./Note";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNote";

const rootElement = document.getElementById("root");

const Notes = ({ notes }) => (
  <ul>
    {notes.map((note) => (
      <Note key={note.id} {...note} />
    ))}
  </ul>
);

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setIsLoading(false);
    });
  }, []);

  const handelChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNoteToAdd = {
      id: notes.length + 1,
      userId: 1,
      title: "",
      body: newNote,
    };

    setError(null);

    createNote(newNoteToAdd)
      .then((note) => setNotes((prevNotes) => [...prevNotes, note])) //Async method
      .catch(() => setError("Error creating note"));

    //setNotes(notes.concat(newNoteToAdd));
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes: </h1>
      {isLoading && <p>Loading...</p>}
      <Notes notes={notes} />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handelChange} value={newNote} />
        <button>Add Note</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
