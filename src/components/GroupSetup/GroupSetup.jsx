import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom'; //Using React Portal for modal popup
import styles from './GroupSetup.module.css'
import { GroupContext } from '../../contexts/GroupContext';


const GroupSetup = ({isOpen, onClose, })=> {
  if (!isOpen) return null;

  const {addGroup } = useContext(GroupContext);
  

  

  const [newGroupName, setNewGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");
  const [groupNameInitial, setGroupNameInitial] = useState("");
  const [nameError, setNameError] = useState("");
  const [colorError, setColorError] = useState("");

  

  const groupNameInputRef = useRef(null);

  useEffect(()=>{
    // Focuses on group name input whenever modal opens
    if(groupNameInputRef.current){
      groupNameInputRef.current.focus();
    }
  }, [isOpen]);


  // Calculating initials from group name
  const calculateInitials = (groupName) => {
    return groupName
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .substring(0, 2);
  };

 

  const handleGroupNameChange = (e) => {
    const groupName = e.target.value;
    setNewGroupName(groupName);

    setGroupNameInitial(calculateInitials(groupName));
  };

  const handleGroupColorChange = (e) => {
    setGroupColor(e.target.value);
    
  };

  const handleCreateGroup = (e) => {
    e.preventDefault();

    if (!newGroupName.trim()){
      setNameError("Please enter group name");
    }else{
      setNameError("");
    }

    if (!groupColor.trim()){
      setColorError("Please select a colour");
    }else{
      setColorError("");
    }

    if (!newGroupName || !groupColor) {
      return;
    }

    addGroup(
      
        newGroupName,
        groupColor,
        groupNameInitial,
      
    );
    setNewGroupName("");
    setGroupColor("");

    // Closing modal after creating group
    onClose();
  };

  return ReactDom.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3>Create New Group</h3>
        <form onSubmit={handleCreateGroup}>
          <label htmlFor="groupName">Group Name &nbsp; </label>
          <input
            ref={groupNameInputRef}
            className={styles.groupNameInput}
            type="text"
            id="groupName"
            placeholder="Enter Group Name"
            value={newGroupName}
            onChange={handleGroupNameChange}
          />
          {nameError && (
            <div
              style={{
                color: "red",
                fontWeight: "normal",
                marginTop: "0.5rem",
                marginBottom: "-0.5rem",
              }}
            >
              {nameError}
            </div>
          )}

          <br />
          <div className={styles.colorSelect}>
            <label>Choose Colour &nbsp; </label>
            <label>
              <input
                type="radio"
                name="colorOption"
                value="#B38BFA"
                checked={groupColor === "#B38BFA"}
                onChange={handleGroupColorChange}
                style={{ display: "none" }} // Hide the radio button
              />
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: "#B38BFA" }}
              ></div>
            </label>
            <label>
              <input
                type="radio"
                name="colorOption"
                value="#FF79F2"
                checked={groupColor === "#FF79F2"}
                onChange={handleGroupColorChange}
                style={{ display: "none" }} // Hide the radio button
              />
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: "#FF79F2" }}
              ></div>
            </label>
            <label>
              <input
                type="radio"
                name="colorOption"
                value="#43E6FC"
                checked={groupColor === "#43E6FC"}
                onChange={handleGroupColorChange}
                style={{ display: "none" }}
              />
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: "#43E6FC" }}
              ></div>
            </label>
            <label>
              <input
                type="radio"
                name="colorOption"
                value="#F19576"
                onChange={handleGroupColorChange}
                style={{ display: "none" }}
              />
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: "#F19576" }}
              ></div>
            </label>
            <label>
              <input
                type="radio"
                name="colorOption"
                value="#0047FF"
                checked={groupColor === "#0047FF"}
                onChange={handleGroupColorChange}
                style={{ display: "none" }}
              />
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: "#0047FF" }}
              ></div>
            </label>
            <label>
              <input
                type="radio"
                name="colorOption"
                value="#6691FF"
                checked={groupColor === "#6691FF"}
                onChange={handleGroupColorChange}
                style={{ display: "none" }}
              />
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: "#6691FF" }}
              ></div>
            </label>
          </div>
          {colorError && (
            <div
              style={{
                color: "red",
                fontWeight: "normal",
                marginTop: "-0.5rem",
                marginBottom: "1rem",
              }}
            >
              {colorError}
            </div>
          )}
          <button type="submit" className={styles.submitButton}>
            Create Group
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default GroupSetup