import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({children}) {
    const [showFolder, setShowFolder] = useState([]);
    const [folderStack, setFolderStack] = useState([]);

    return (
        <>
            <AppContext.Provider value={{ showFolder, setShowFolder, folderStack, setFolderStack}} >
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppProvider;