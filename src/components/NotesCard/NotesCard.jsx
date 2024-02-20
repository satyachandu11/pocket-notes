import React from 'react'
import styles from './NotesCard.module.css'
import { BsDot } from "react-icons/bs";

function NotesCard({notes, formatDate, formatTime}) {
  return (
    <div className={styles.notesContainerBox}>
      {notes.length > 0 && (
        <div className={styles.notesCard}>
          {notes.map((note, index) => (
            <div key={index} className={styles.noteContainer}>
              <p>{note.noteText}</p>
              <div className={styles.dateTimeSpan}>
                <span>{formatDate(note.timestamp)}</span>{" "}
                <span>
                  <BsDot color='black' size='2rem' className={styles.dotIcon} />
                </span>{" "}
                <span>{formatTime(note.timestamp)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesCard