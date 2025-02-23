import { createContext, useContext } from 'react';

const Context = createContext();
export const BASE_URL = "http://localhost:5000/api"

export const useGlobalContext = () => {
  return useContext(Context);
};

export default Context;
