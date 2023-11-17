import style from "../template/Register/register.module.css";
import ColorMode from "../moleculs/ColorMode/ColorMode";
import FormContoler from "../organizm/FormContoler";
// import img from "../../assets/images/register.jpg";
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
        <div className={style.wrapperForm}>
          {/* <div className={style.img}>
            <img src={img} alt="" />
          </div> */}
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
