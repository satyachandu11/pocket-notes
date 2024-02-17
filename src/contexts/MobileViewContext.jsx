import React, { createContext, useEffect, useState } from "react";

const MobileViewContext = createContext();

const MobileViewProvider = ({children})=>{
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobileView(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <MobileViewContext.Provider value={isMobileView}>
            {children}
        </MobileViewContext.Provider>
    );
};

export { MobileViewProvider, MobileViewContext}

