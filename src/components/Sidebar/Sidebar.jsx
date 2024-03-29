import React, { useContext, useState } from 'react'
import styles from './Sidebar.module.css';
import CreateGrpIcon from '../../assets/CreateGrpIcon';
import GroupSetup from '../GroupSetup/GroupSetup';
import { GroupContext } from '../../contexts/GroupContext';
import MainSection from '../MainSection/MainSection';
import { MobileViewContext } from '../../contexts/MobileViewContext';

function Sidebar({ onSelectGroup }) {
  const { groups } = useContext(GroupContext);
  const { isMobileView, toggleView } = useContext(MobileViewContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  

  const handleClickGroup = (group) => {
    onSelectGroup(group);
    // setIsVisible(!isVisible);
  };

  

  return (
    <div className="sidebar">
      <div className={styles.heading}>
        <h2>Pocket Notes</h2>
      </div>

      <div className={styles.groupList}>
        {groups.length === 0 ? (
          <p className={styles.addNotesPara}>Click on + to add Notes here</p>
        ) : (
          <div>
            <ul>
              {groups.map((group) => (
                <li
                  key={group.id}
                  className={styles.groupItem}
                  onClick={() => handleClickGroup(group)}
                >
                  <div
                    className={styles.groupCircle}
                    style={{ backgroundColor: group.groupColor }}
                  >
                    {group.groupNameInitial}
                  </div>
                  <div className={styles.groupDetails}>
                    <div className={styles.groupName}>{group.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.createGrpIcon}>
        <CreateGrpIcon onClicking={openModal} />
        <GroupSetup isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Sidebar