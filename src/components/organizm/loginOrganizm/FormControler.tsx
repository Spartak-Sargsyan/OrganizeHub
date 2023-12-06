import {
  Button,
  CostomInput,
  ErrorMessage,
  useTranslation,
  RegExp,
  useState,
  // loginData,
  isAxiosError,
  SubmitHandler,
  useForm,
  ILoginData,
} from "./index";
import { useChekUser } from "../../../context/ChekUser";

const FormControler = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<ILoginData>({
    mode: "all",
  });

  const { loginUserFetch } = useChekUser();

  const [loginUser, setLoginUser] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleLoginSubmit: SubmitHandler<ILoginData> = async () => {
    try {
      const response = await loginUserFetch(loginUser);
      console.log(response.data.accessToken);
      console.log("Login successful2:", response);
      const token = response.data.accessToken;
      localStorage.setItem("token", token);
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response) {
          console.error(
            "Registration failed - User already exists:",
            error.response.data
          );
        } else {
          console.error("Registration failed:", error);
        }
      }
    }
  };
  const isButtonDisable = !isDirty || isValid;

  const { t } = useTranslation();

  return (
    <>
      {/* <SelectLanguage onChange={handleLanguageSwitch} text1="en" text2="ru" /> */}
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <CostomInput
          label={t("FORM.LABELS.EMAIL")}
          type="email"
          placeholder={t("FORM.LABELS.EMAIL")}
          style={errors.email && { borderColor: "red" }}
          {...register("email", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.EmailRegExp,
              message: t("ERROR.MESSAGE.EMAILMESSAGE"),
            },
          })}
          value={loginUser.email}
          handleChange={handleInputChange}
        />
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <CostomInput
          label={t("FORM.LABELS.PASSWORD.PASSWORD")}
          placeholder={t("FORM.LABELS.PASSWORD.PASSWORD")}
          {...register("password", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.PasswordRegExp,
              message: t("ERROR.MESSGAE.PASSWORDMESSAGE"),
            },
          })}
          style={errors.password && { borderColor: "red" }}
          type="password"
          value={loginUser.password}
          handleChange={handleInputChange}
        />
        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Button
          mt={5}
          type="submit"
          colorScheme="blue"
          disabled={isButtonDisable}
        >
          {t("FORM.LABELS.BUTTON.SIGNIN")}
        </Button>
      </form>
    </>
  );
};

export default FormControler;
