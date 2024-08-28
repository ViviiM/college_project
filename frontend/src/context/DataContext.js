import React, { createContext, useState, useContext } from 'react';

// Create a context for the data
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  // Define the state and its updater function
  const [globaldata, setGlobalData] = useState(null);

  return (
    <DataContext.Provider value={{ globaldata, setGlobalData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useData = () => useContext(DataContext);
