import { createContext, useContext, ReactNode, useState } from "react";

type ThemeContextProviderProps = {
    children: ReactNode;
}

type ThemeContext = {
    themeMode: string,
    changeTheme: () => void,
}

const ThemeContext = createContext({} as ThemeContext);

export function useTheme() {
    return useContext(ThemeContext);
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {

    const [themeMode, setTheme] = useState('light');

    const changeTheme = () => {
        if (themeMode === "light") {
            setTheme("dark")
        } else if (themeMode === "dark") {
            setTheme("light")
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                themeMode,
                changeTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider