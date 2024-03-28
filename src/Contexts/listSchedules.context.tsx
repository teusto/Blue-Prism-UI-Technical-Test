import React, { createContext, useContext, useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

const ListSchedulesContext = createContext({
    logs: [],
    allLogs: [],
    toggleBtn: (a,b) => {},
    setInitialLogs: (a) => {}
});

const ListSchedulesProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const [allLogs, setAllLogs] = useState([]);

  const toggleBtn = (cardLogs, status) => {
    const filtered = allLogs.filter(logs => cardLogs.includes(logs.id))
    setLogs(status ? filtered : allLogs);
  };

  const setInitialLogs = (data) => {
    setAllLogs(data)
  }

  return (
    <ListSchedulesContext.Provider value={{ allLogs, logs, toggleBtn, setInitialLogs }}>
      {children}
    </ListSchedulesContext.Provider>
  );
};

const useListSchedules = () => {
  return useContext(ListSchedulesContext);
};

export { ListSchedulesProvider, useListSchedules };