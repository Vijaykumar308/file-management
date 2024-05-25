import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({children}) {
    const [showFolder, setShowFolder] = useState([]);

    return (
        <>
            <AppContext.Provider value={{ showFolder, setShowFolder}} >
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppProvider;