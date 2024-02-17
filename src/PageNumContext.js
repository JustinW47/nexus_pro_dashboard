import React, { createContext, useState, useContext } from 'react';

// Create a context
export const PageNumContext = createContext();

// Create a context provider component
export const PageNumProvider = ({ children }) => {
  const [pageNum, setpageNum] = useState(0);

  const setPageNum = (num) => {
    setpageNum(num);
  };

  return (
    <PageNumContext.Provider value={{ pageNum, setPageNum }}>
      {children}
    </PageNumContext.Provider>
  );
};

// Custom hook to consume the context
export const usePageNum = () => {
  return useContext(PageNumContext);
};
