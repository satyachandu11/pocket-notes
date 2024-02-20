import React, { createContext, useEffect, useState } from "react";

const MobileViewContext = createContext();

const MobileViewProvider = ({children})=>{
    const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 768);

    const toggleView = ()=>{
        setIsMobileView((prevIsMobile)=> !prevIsMobile)
    }

    return (
        <MobileViewContext.Provider value={{isMobileView, toggleView}}>
            {children}
        </MobileViewContext.Provider>
    );
};

export { MobileViewProvider, MobileViewContext}

