import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return <AppContext.Provider value={{ search, setSearch }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const { search, setSearch } = useContext(AppContext);
  return { search, setSearch };
};
