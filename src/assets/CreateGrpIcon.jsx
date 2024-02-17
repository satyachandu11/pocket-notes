import React from 'react'
import { IoIosAddCircle } from "react-icons/io";

function CreateGrpIcon({onClicking}) {

  const GROUP_ICON_STYLES = {
  borderRadius: '50%' ,
  
  
  };

  
  

  return (
    <div className='grpIconStyle' onClick={onClicking}>
      <IoIosAddCircle style={GROUP_ICON_STYLES} size="5rem" color="#16008B" />
    </div>
  );
}

export default CreateGrpIcon