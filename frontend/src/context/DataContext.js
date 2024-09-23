import React, { createContext, useState, useContext } from 'react';

// Create a context for the data
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  // Define the state and its updater function
  
  return (
    <DataContext.Provider value={{ }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useData = () => useContext(DataContext);
