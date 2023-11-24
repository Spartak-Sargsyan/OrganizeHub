import { useForm } from "react-hook-form";
import {
  FormData,
  Button,
  CostomInput,
  ErrorMessage,
  useTranslation,
  SelectLanguage,
  DefaultValuesLogin,
  RegExp,
} from "./index";

const FormControler = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "all",
    defaultValues: DefaultValuesLogin,
  });
  const handleLoginSubmit = (data: FormData) => console.log(data);

  const isButtonDisable = !isDirty || isValid;

  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <SelectLanguage onChange={handleLanguageSwitch} text1="en" text2="ru" />
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <CostomInput
          label={t("FORM.LABEL.EMAIL")}
          type="email"
          placeholder={t("FORM.LABEL.EMAIL")}
          style={errors.email && { borderColor: "red" }}
          {...register("email", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.EmailRegExp,
              message: t("EROROR.MESSAGE.EMAILMESSAGE"),
            },
          })}
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
        />
        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Button type="submit" colorScheme="blue" disabled={isButtonDisable}>
          {t("FORM.LABELS.BUTTON.SIGNIN")}
        </Button>
      </form>
    </>
  );
};

export default FormControler;
