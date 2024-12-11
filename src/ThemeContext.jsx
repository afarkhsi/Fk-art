import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  console.log('darkMode: ', darkMode);

  //   const toggleTheme = () => {
  //     setDarkMode((prev) => !prev);
  //   };

  //   const values = { darkMode, setDarkMode, toggleTheme };

  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
