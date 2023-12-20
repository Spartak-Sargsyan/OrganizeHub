import {
  Button,
  CostomInput,
  ErrorMessage,
  useTranslation,
  RegExp,
  useForm,
  ILoginData,
} from "./index";
import { Spinner } from "@chakra-ui/react";
import { useCheckUser } from "./ChekUser";
import { ChangeEvent, useState } from "react";

const FormControler = () => {
  const { isLoading, error, loginUserFetch } = useCheckUser();
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<ILoginData>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isButtonDisable = !isDirty || isValid;
  const { t } = useTranslation();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLoginSubmit = async () => {
    try {
      const response = await loginUserFetch(credentials);
      localStorage.setItem("isLoggedIn", "true");
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

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
          value={credentials.email}
          handleChange={handleChangeInput}
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
          value={credentials.password}
          handleChange={handleChangeInput}
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
      {isLoading && <Spinner />}
      {error && <p>Error</p>}
    </>
  );
};

export default FormControler;
