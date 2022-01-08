import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Note } from "./Note";

const rootElement = document.getElementById("root");

const notesArray = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "Javascript can interract with the browser",
    date: "2019-05-30T18:44:10.838Z",
    important: true,
  },
  {
    id: 4,
    content: "Javascript can change the look and feel of the page",
    date: "2019-05-30T19:28:31.098Z",
    important: false,
  },
];

const Notes = ({ notes, showAll }) => {
  if (notes.length === 0 || typeof notes === "undefined") {
    return <p>Not notes founds</p>;
  }

  return (
    <ul>
      {notes
        .filter((note) => (showAll ? true : note.important))
        .map((note) => (
          <Note key={note.id} {...note} />
        ))}
    </ul>
  );
};

const App = () => {
  const [notes, setNotes] = useState(notesArray);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handelChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNoteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };

    setNotes([...notes, newNoteToAdd]);
    //setNotes(notes.concat(newNoteToAdd));
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <h1>Notes: </h1>
      <button onClick={handleShowAll}>
        {" "}
        {showAll ? "Show only important" : "Show all"}{" "}
      </button>
      <Notes notes={notes} showAll={showAll} />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handelChange} value={newNote} />
        <button>Add Note</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
