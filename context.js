import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('home');

  return <AppContext.Provider value={{ open, setOpen, page, setPage }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const { open, setOpen, page, setPage } = useContext(AppContext);
  return { open, setOpen, page, setPage };
};
