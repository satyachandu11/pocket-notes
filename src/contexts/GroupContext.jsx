import React, { createContext, useEffect, useState } from 'react';

const GroupContext = createContext();

const GroupProvider = ({ children })=>{
    const [groups, setGroups] = useState([]);

    useEffect(()=>{
        

        // Loading Groups from Local Storage when Component mounts

        const storedGroups = localStorage.getItem('groups');
        if(storedGroups){
            setGroups(JSON.parse(storedGroups));
        }
    },[]);

    const addGroup = (newGroupName, groupColor, groupNameInitial) => {

        // Generating Unique group ID by calling unique id generator function
        const groupId = generateGroupId();
        

        // Creating new group objects with name and ID
        const newGroup = {
          id: groupId,
          name: newGroupName,
          groupColor: groupColor,
          groupNameInitial: groupNameInitial,
        };

        // Adding new groups to the existing list of names
        const updatedGroups = [newGroup, ...groups];
        setGroups(updatedGroups);

        // Storing updated list of groups in local storage
        localStorage.setItem('groups', JSON.stringify(updatedGroups));
    };

    const generateGroupId = ()=>{
        // Generating a random alphanumeric string for group 
        return Math.random().toString(36).substring(2, 9);
    };
    return (
        <GroupContext.Provider value={{groups, addGroup}}>
            {children}
        </GroupContext.Provider>
    );
};

export { GroupProvider, GroupContext };