import React, { createContext, useContext, useEffect, useState } from "react";
import { GroupContext } from "./GroupContext";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const { groups } = useContext(GroupContext);
  const [notes, setNotes] = useState([]);

  useEffect(() => {

    // Load Notes from local storage
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    // Update notes in local storage whenever notes is added
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (groupId, noteText, groupColor) => {
    const newNote = {
      groupId,
      noteText,
      groupColor,
      timestamp: new Date().toISOString(),
    };
    setNotes((prevNotes) => [ newNote, ...prevNotes]);
  };

  const getNotesByGroupId = (groupId) => {
    return notes.filter((note) => note.groupId === groupId);
  };

  

  return (
    < NotesContext.Provider value={{ addNote, getNotesByGroupId }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext };
