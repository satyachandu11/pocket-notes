import React, { useContext } from 'react'
import styles from './MainSection.module.css'
import MainScreenDefault from '../MainScreenDefault/MainScreenDefault';
import MainScreenNotes from './MainScreenNotes/MainScreenNotes';
import { NotesContext } from '../../contexts/NotesContext';

function MainSection({ selectedGroup }) {

  

  return (
    <div className="main-section">

      {selectedGroup ? (
        <MainScreenNotes groupId={selectedGroup} />
      ) : (
        <MainScreenDefault />
      )}
    </div>
  );
}

export default MainSection