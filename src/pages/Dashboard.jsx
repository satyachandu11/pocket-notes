import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MainSection from '../components/MainSection/MainSection'
import { MobileViewContext } from '../contexts/MobileViewContext';

function Dashboard() {

  const [selectedGroup, setSelectedGroup] = useState(null);
  const { isMobileView } = useContext(MobileViewContext)

  const handleSelectGroup = (group)=>{
    setSelectedGroup(group);

    if(isMobileView){
    toggleView();
    }

  }

  return (
    <div className="App">
      <Sidebar onSelectGroup={handleSelectGroup} />
      <MainSection selectedGroup={selectedGroup} />
    </div>
  );
}

export default Dashboard