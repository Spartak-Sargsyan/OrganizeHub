import { useContext } from "react";
import {ChekUser} from "../context/ChekUser" ;

export const useChekUser = () => {
    const context = useContext(ChekUser);
    if (!context)
      throw new Error("useChekUser must be used within a ChekUserProvider");
    return context;
  };