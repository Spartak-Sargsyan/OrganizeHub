import style from "./register.module.css";
import FormContoler from "../../organizm/regisrerOrganizm/FormControler";
// import img from "../../assets/images/register.jpg";
interface IRegisterProps {
  siteName?: string;
  description?: string;
  logoName?: string;
}

const Register = ({ logoName, siteName, description }: IRegisterProps) => {
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
