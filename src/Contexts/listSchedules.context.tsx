import React, { createContext, useContext, useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

const ListSchedulesContext = createContext({
    logs: [],
    allLogs: [],
    selectedCard: Number,
    toggleBtn: (a,b,c) => {},
    setInitialLogs: (a) => {}
});

const ListSchedulesProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const [allLogs, setAllLogs] = useState([]);
  const [selectedCard, setSelectedCard] = useState(-1);

  const toggleBtn = (cardLogs, status, id) => {
    const filtered = allLogs.filter(logs => cardLogs.includes(logs.id))
    setLogs(status ? filtered : allLogs);
    setSelectedCard(id)
  };

  const setInitialLogs = (data) => {
    setAllLogs(data)
  }

  return (
    <ListSchedulesContext.Provider value={{ allLogs, logs, toggleBtn, setInitialLogs, selectedCard }}>
      {children}
    </ListSchedulesContext.Provider>
  );
};

const useListSchedules = () => {
  return useContext(ListSchedulesContext);
};

export { ListSchedulesProvider, useListSchedules };