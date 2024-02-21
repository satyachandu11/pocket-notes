import React, { useContext, useState } from 'react'
import { GroupContext } from '../../../contexts/GroupContext'
import { NotesContext } from '../../../contexts/NotesContext';
import styles from './MainScreenNotes.module.css'
import { IoSend } from "react-icons/io5";
import NotesCard from '../../NotesCard/NotesCard';

const MainScreenNotes = ({ groupId }) => {
    const { groups } = useContext(GroupContext);
    const { addNote, getNotesByGroupId } = useContext(NotesContext);

    const [noteText, setNoteText] = useState('');
    

    const group = groups.find(group =>{ return group.id === groupId.id});
    const groupColor = group ? group.groupColor : '#FFFFFF';
    const groupName = group ? group.name : 'Invalid Name';
    const groupNameInitial = group ? group.groupNameInitial : 'X';


    const notes = getNotesByGroupId(groupId);
    

    const handleNotesChange = (e)=>{
        setNoteText(e.target.value);
    }

    const handleSend = (e)=>{
        e.preventDefault();
        addNote(groupId, noteText, groupColor);
        setNoteText('');
    }

    const isNoteTextEmpty = noteText.trim() === ''; // Checks if noteText is empty or not

    // Function to format date in dd-mm-yyyy format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Function to format time in hh:mm am/pm format
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${amOrPm}`;
  };


  return (
    <div>
      <div className={styles.notesHead}>
        <div
          className={styles.groupInitial}
          style={{ backgroundColor: groupColor }}
        >
          {groupNameInitial}
        </div>
        <h2 className={styles.groupName}>{groupName}</h2>
      </div>

      <NotesCard
        notes={notes}
        formatDate={formatDate}
        formatTime={formatTime}
      />

      <div className={styles.inputFormContainer}>
        <form onSubmit={handleSend}>
          <textarea
            className={styles.inputFormArea}
            placeholder="Enter Your Text Here....."
            value={noteText}
            onChange={handleNotesChange}
          /> 
          <IoSend
            size="2rem"
            className={isNoteTextEmpty ? styles.disabledIcon : styles.sendIcon}
            onClick={!isNoteTextEmpty ? handleSend : null}
          />
        </form>
      </div>
    </div>
  );
}

export default MainScreenNotes