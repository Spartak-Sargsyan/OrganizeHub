import { ReactNode } from "react";
import style from "./errormessage.module.css";

interface ChildrenProps {
  children: ReactNode;
}

const ErrorMessage: React.FC<ChildrenProps> = ({ children }) => {
  return <span className={style.error}>{children}</span>;
};

export { ErrorMessage };
