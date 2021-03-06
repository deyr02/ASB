import { createContext, useContext } from "react";
import NavStore from "./navStore";

interface Store {
    navStore : NavStore;
  
}

export const store:Store={
    navStore: new NavStore(),
  
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}