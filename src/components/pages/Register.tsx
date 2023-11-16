import style from "../template/Register/register.module.css";
import ColorMode from "../moleculs/ColorMode/ColorMode";
import RegisterForm from "../template/Register/RegisterForm";
import FormContoler from "../organizm/FormContoler";

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
          <RegisterForm>
            <FormContoler />
          </RegisterForm>
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
