import {
  Button,
  CostomInput,
  ErrorMessage,
  useTranslation,
  RegExp,
  useState,
  SubmitHandler,
  useForm,
  ILoginData,
  useChekUser
} from "./index";

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

  const handleLoginSubmit:SubmitHandler<ILoginData> = async () => {
    try{
      const response =( await loginUserFetch(loginUser)) as {
        data:{accessToken: string}
      }
      console.log("0fsd", response.data.accessToken);
      localStorage.setItem('token', response.data.accessToken);
      console.log(response);
      return response 
    }
    catch(error){
      console.error("Log failed", error);
      
    }
  }


  const isButtonDisable = !isDirty || isValid;

  const { t } = useTranslation();

  return (
    <>
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
          label={t("FORM.LABELS.PASSWORD")}
          placeholder={t("FORM.LABELS.PASSWORD")}
          {...register("password", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.PasswordRegExp,
              message: t("ERROR.MESSAGE.PASSWORDMESSAGE"),
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
