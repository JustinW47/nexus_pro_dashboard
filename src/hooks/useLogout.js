import { useUserData } from 'UserDataContext';
import { createContext, useContext } from 'react';

const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
  const { setUserData, userData } = useUserData();

  const logout = () => {
    if (userData !== null) {
      localStorage.removeItem('token');
      setUserData(null);
      window.location.href = "/";
    }

  };

  return (
    <LogoutContext.Provider value={{ logout }}>
      {children}
    </LogoutContext.Provider>
  );
};

export const useLogout = () => {
  const context = useContext(LogoutContext);
  if (!context) {
    throw new Error('useLogout must be used within a LogoutProvider');
  }
  return context;
};
