import { ReactNode, createContext, useEffect, useState } from "react";
import { ILoginData } from "../models/interface";
import { loginApi } from "../services/ApiRequest";
import axios, { isAxiosError } from "axios";

interface IContextProps {
  isLoggedIn: boolean;
  loginUserFetch: (loginData: ILoginData) => Promise<unknown>;
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

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUser = async (loginData: ILoginData) => {
    try {
      const response = await axios.post(loginApi, loginData);
      console.log(response);
      localStorage.setItem("isLoggedIn", "true");
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
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const contextValue: IContextProps = {
    isLoggedIn,
    loginUserFetch: loginUser,
    userLogOut,
  };

  return <ChekUser.Provider value={contextValue}>{children}</ChekUser.Provider>;
};
