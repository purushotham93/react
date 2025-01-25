import React, { createContext, useState } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    togggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider ({children}: {children: React.ReactNode}) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const togggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
        //setToggle(!toggle)}}
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, togggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

function useTheme () {
    const context = React.useContext(ThemeContext);
    if(context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export { useTheme, ThemeProvider };