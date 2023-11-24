import style from "../../template/Register/register.module.css";
import { /* SubmitHandler*/ useForm } from "react-hook-form";
import {
  Button,
  CostomInput,
  ErrorMessage,
  useTranslation,
  SelectLanguage,
  DefaultValuesRegister,
  RegExp,
  FormData,
} from "./index";
// import { registerUser } from "../../../services/CRUDFunctions";
// import { useState } from "react";

const FormControler: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    mode: "all",
    defaultValues: DefaultValuesRegister,
  });

  // const [registerForm, setRegisterForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   userName: "",
  //   phoneNumber: "",
  //   email: "",
  //   password: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setRegisterForm({ ...registerForm, [name]: value });
  // };

  const isButtonDisable = isDirty || isValid;
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = (language: string) => {
    i18n.changeLanguage(language);
  };

  // const onSubmit: SubmitHandler<FormData> = async (data) => {
  //   data;
  //   try {
  //     const response = await registerUser(data);
  //     reset();
  //     return response;
  //     console.log("Registration successful:", response);
  //   } catch (error) {
  //     console.error("Registration failed:", error);
  //   }
  // };

  // const password = watch("password");
  // const repeatPassword = watch("repeatPassword");
  // console.log(password, repeatPassword);

  const handleRegisterSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <SelectLanguage onChange={handleLanguageSwitch} text1="en" text2="ru" />

      <form
        className={style.form}
        onSubmit={handleSubmit(handleRegisterSubmit)}
      >
        <CostomInput
          label={t("FORM.LABELS.FIRSTNAME")}
          placeholder={t("FORM.LABELS.FIRSTNAME")}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
          {...register("firstName", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            minLength: {
              value: 2,
              message: t("ERROR.MESSAGE.MINLENGTHMESSAGE"),
            },
            maxLength: {
              value: 50,
              message: t("ERROR.MESSAGE.MAXLENGTHMESSAGE"),
            },
          })}
        />

        {errors?.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FOMR.LABELS.LASTNAME")}
          placeholder={t("FORM.LABELS.LASTNAME")}
          {...register("firstName", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            minLength: {
              value: 2,
              message: t("ERROR.MESSAGE.MINLENGTHMESSAGE"),
            },
            maxLength: {
              value: 50,
              message: t("ERROR.MESSAGE.MAXLENGTHMESSAGE"),
            },
          })}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
        />
        {errors?.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.USERNAME")}
          placeholder={t("FORM.LABELS.USERNAME")}
          {...register("firstName", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            minLength: {
              value: 2,
              message: t("ERROR.MESSAGE.MINLENGTHMESSAGE"),
            },
            maxLength: {
              value: 50,
              message: t("ERROR.MESSAGE.MAXLENGTHMESSAGE"),
            },
          })}
          style={errors.userName && { borderColor: "red" }}
          type="text"
        />
        {errors?.userName && (
          <ErrorMessage>{errors.userName.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.PHONENUMBER")}
          placeholder={t("FORM.LABELS.PHONENUMBER")}
          {...register("phoneNumber", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE") || "Error",
            pattern: {
              value: RegExp.PhoneNumberRegExp,
              message: t("ERROR.MESSAGE.PHONEMESSAGE"),
            },
          })}
          style={errors.phoneNumber && { borderColor: "red" }}
          type="text"
        />

        {errors?.phoneNumber && (
          <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.EMAIL")}
          placeholder={t("FORM.LABELS.EMAIL")}
          {...register("email", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.EmailRegExp,
              message: t("EROROR.MESSAGE.EMAILMESSAGE"),
            },
          })}
          style={errors.email && { borderColor: "red" }}
          type="email"
        />

        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

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

        <CostomInput
          label={t("FORM.LABELS.PASSWORD.REPEATPASSWORD")}
          placeholder={t("FORM.LABELS.PASSWORD.REPEATPASSWORD")}
          {...register("repeatPassword", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE") || "Error",
            pattern: {
              value: RegExp.PasswordRegExp,
              message: t("ERROR.MESSAGE.REPEATPASSWORD"),
            },
          })}
          style={errors.password && { borderColor: "red" }}
          type="password"
        />

        {errors?.repeatPassword && (
          <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>
        )}

        <Button type="submit" colorScheme="blue" disabled={isButtonDisable}>
          {t("form.labels.button.signUp")}
        </Button>
      </form>
    </>
  );
};

export default FormControler;
