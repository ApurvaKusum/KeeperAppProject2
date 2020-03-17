import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(NoteContent => (
        <Note
          key={NoteContent.key}
          title={NoteContent.title}
          content={NoteContent.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
