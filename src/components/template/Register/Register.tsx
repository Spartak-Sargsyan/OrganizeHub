import style from "./register.module.css";
import RegisterForm from "./RegisterForm";
// import SelectLanguage from "../../organizm/SelectLanguage";
import ColorMode from "../../moleculs/ColorMode/ColorMode";

interface IRegisterProps {
  siteName: string;
  description: string;
  logoName: string;
}

const Register = ({ logoName, siteName, description }: IRegisterProps) => {
  return (
    <div className={style.wrapper}>
      <ColorMode />
      <div className={style.wrapperRigster}>
        <div className={style.formContainer}>
          <RegisterForm />
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
