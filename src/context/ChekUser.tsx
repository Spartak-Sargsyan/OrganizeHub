import { ReactNode, createContext, useContext, useState } from "react";
import { ILoginData } from "../models/interface";
import { loginApi } from "../services/ApiRequest";
import axios, { isAxiosError } from "axios";

interface IContextProps {
  isLoggedIn: boolean;
  loginUserFetch: (loginData: ILoginData) => Promise<any>;
  userLogOut: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const ChekUser = createContext<IContextProps | null>(null);

export const ChekUserProvider: React.FC<IAuthProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = async (loginData: ILoginData) => {
    try {
      const response = await axios.post(loginApi, loginData);
      console.log(response);
      setIsLoggedIn(true);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Login field: ", error);
        throw error.response?.data;
      } else {
        console.error("Login field 2: ", error);
        throw error;
      }
    }
  };

  const userLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const contextValue: IContextProps = {
    isLoggedIn,
    loginUserFetch: loginUser,
    userLogOut,
  };

  return <ChekUser.Provider value={contextValue}>{children}</ChekUser.Provider>;
};

export const useChekUser = () => {
  const context = useContext(ChekUser);
  if (!context)
    throw new Error("useChekUser must be used within a ChekUserProvider");
  return context;
};
