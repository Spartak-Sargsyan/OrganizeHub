import { ReactNode, createContext, useEffect, useState } from "react";
import { ILoginData } from "../models/interface";
import { instance } from "../services/ApiRequest";

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

  const loginUser = async (userData: ILoginData) => {
    try {
      const response = await instance.post("/auth/login", userData);
      localStorage.setItem("isLoggedIn", "true");

      setIsLoggedIn(true);

      return response.data;
    } catch (error) {
      console.error(error);
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
