import style from "../../template/Register/register.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  CostomInput,
  ErrorMessage,
  useTranslation,
  RegExp,
  IRegiterData,
} from "./index";
import { registerUser } from "../../../services/CRUDFunctions";
import { useState } from "react";
import { isAxiosError } from "axios";

const FormControler: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IRegiterData>({
    mode: "all",
  });

  const [registerForm, setRegisterForm] = useState<IRegiterData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const isButtonDisable = isDirty || isValid;
  const { t } = useTranslation();

  const handleRegisterSubmit: SubmitHandler<IRegiterData> = async () => {
    try {
      const response = await registerUser(registerForm);
      console.log("Registration successful:", response);
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response) {
          console.error("Registration failed - User already exists:", error);
        }
      }
    }
  };

  return (
    <>
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
              value: 3,
              message: t("ERROR.MESSAGE.MINLENGTHMESSAGE"),
            },
            maxLength: {
              value: 30,
              message: t("ERROR.MESSAGE.MAXLENGTHMESSAGE"),
            },
          })}
          value={registerForm.firstName}
          handleChange={handleInputChange}
        />

        {errors?.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.LASTNAME")}
          placeholder={t("FORM.LABELS.LASTNAME")}
          {...register("lastName", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            minLength: {
              value: 3,
              message: t("ERROR.MESSAGE.MINLENGTHMESSAGE"),
            },
            maxLength: {
              value: 50,
              message: t("ERROR.MESSAGE.MAXLENGTHMESSAGE"),
            },
          })}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
          value={registerForm.lastName}
          handleChange={handleInputChange}
        />
        {errors?.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
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
          value={registerForm.email}
          handleChange={handleInputChange}
        />

        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.PASSWORD")}
          placeholder={t("FORM.LABELS.PASSWORD")}
          {...register("password", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.PasswordRegExp,
              message: t("ERROR.MESSGAE.PASSWORDMESSAGE"),
            },
          })}
          style={errors.password && { borderColor: "red" }}
          type="password"
          value={registerForm.password}
          handleChange={handleInputChange}
        />

        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Button type="submit" colorScheme="blue" disabled={isButtonDisable}>
          {t("FORM.LABELS.BUTTON.SIGNUP")}
        </Button>
      </form>
    </>
  );
};

export default FormControler;
