'use client'
import React, { useState, useEffect, createContext } from 'react';

export const BankContext = createContext([]);

export const BankContextProvider = ({ children }) => {

  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (banks.length !== 0) {
      // AsyncStorage.setItem('DEMO_APP::COUNT_VALUE', banks);
      localStorage.setItem('TAPP::BANKS', JSON.stringify(banks));
    }
  }, [banks]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    
    if (items) {
      setBanks(items);
    } else {

      fetch(`/api/banks`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setBanks(data);
        })
        .catch(console.log)
    }
    
  }, []);

  return (
    <BankContext.Provider value={{ banks, loading, error }}>
      {children}
    </BankContext.Provider>
  );
};
