import React, { createContext, useState, useContext } from 'react';

// Create a context
export const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume the context
export const useUserData = () => {
  return useContext(UserContext);
};
