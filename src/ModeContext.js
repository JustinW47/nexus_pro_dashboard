import React, { createContext, useState, useContext } from 'react';

// Create a context
export const ModeContext = createContext();

// Create a context provider component
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  const toggleMode = (checked) => {
    setMode(checked);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

// Custom hook to consume the context
export const useMode = () => {
  return useContext(ModeContext);
};
