import style from "./register.module.css";
import FormContoler from "../../organizm/regisrerOrganizm/FormControler";
import { useSelector } from "react-redux";
import { Heading } from "@chakra-ui/react";
import { RegisterState } from "../../../models/type";

interface IRegisterProps {
  siteName?: string;
  description?: string;
  logoName?: string;
}

const Register = ({ logoName, siteName, description }: IRegisterProps) => {
  const isLoading = useSelector((state: RegisterState) => state.auth.isLoading);
  const error = useSelector((state: RegisterState) => state.auth.error);

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperRigster}>
        <div className={style.wrapperForm}>
          <div className={style.formContainer}>
            <FormContoler />

          </div>
        </div>
        <div className={style.imageContainer}>
          <div className={style.description}>
            <div>
              <span>{logoName}</span>
            </div>
            <div className={style.desc}>
              <h1>{siteName}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
