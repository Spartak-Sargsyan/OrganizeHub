import { ReactNode } from "react";

interface RegisterFormProps {
  children: ReactNode;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ children }) => {
  return <>{children}</>;
};

export default RegisterForm;
