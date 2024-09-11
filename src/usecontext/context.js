import { createContext, useContext } from 'react';

const Context = createContext();

export const useGlobalContext = () => {
  return useContext(Context);
};

export default Context;
