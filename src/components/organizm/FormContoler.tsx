import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../atoms/ChakraAtoms";
import CostomInput from "../moleculs/CostomInput";
import style from "../template/Register/register.module.css";
import {
  Required,
  MinLength,
  MaxLength,
  RegExpPattern,
  RegExpPattern2,
} from "../../constant/Validation";
import ErrorMessage from "../atoms/ErrorMessage/ErrorMessage";
import { useTranslation } from "react-i18next";
import SelectLanguage from "../moleculs/SelectLanguage";

interface FormData {
  [key: string]: string;
}

const FormContoler: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = (language: string) => {
    i18n.changeLanguage(language);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <SelectLanguage onChange={handleLanguageSwitch} text1="en" text2="ru" />

      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <CostomInput
          label={t("form.labels.firstName")}
          placeholder={t("form.labels.firstName")}
          {...register("firstName", {
            required: Required,
            minLength: MinLength,
            maxLength: MaxLength,
          })}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
        />
        {errors?.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
        {/* <FormLabel>Last Name</FormLabel> */}
        <CostomInput
          label={t("form.labels.lastName")}
          placeholder={t("form.labels.lastName")}
          {...register("lastName", {
            required: Required,
            minLength: MinLength,
            maxLength: MaxLength,
          })}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
        />
        {errors?.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
        {/* <FormLabel>User Name</FormLabel> */}
        <CostomInput
          label={t("form.labels.userName")}
          placeholder={t("form.labels.userName")}
          {...register("userName", {
            required: Required,
            minLength: MinLength,
            maxLength: MaxLength,
          })}
          style={errors.userName && { borderColor: "red" }}
          type="text"
        />
        {errors?.userName && (
          <ErrorMessage>{errors.userName.message}</ErrorMessage>
        )}
        {/* <FormLabel>Phone Number</FormLabel> */}

        <CostomInput
          label={t("form.labels.phoneNumber")}
          placeholder={t("form.labels.phoneNumber")}
          {...register("phoneNumber", {
            required: Required,
            minLength: MinLength,
            maxLength: MaxLength,
          })}
          style={errors.phoneNumber && { borderColor: "red" }}
          type="text"
        />
        {errors?.phoneNumber && (
          <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
        )}
        {/* <FormLabel>Email Adress</FormLabel> */}
        <CostomInput
          label={t("form.labels.email")}
          placeholder={t("form.labels.email")}
          {...register("email", {
            required: Required,
            pattern: RegExpPattern,
          })}
          style={errors.email && { borderColor: "red" }}
          type="email"
        />
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        {/* <FormLabel>Password</FormLabel> */}
        <CostomInput
          label={t("form.labels.password")}
          placeholder={t("form.labels.password")}
          {...register("password", {
            required: Required,
            pattern: RegExpPattern2,
          })}
          style={errors.password && { borderColor: "red" }}
          type="password"
        />
        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Button type="submit" colorScheme="blue">
          {t("form.labels.button")}
        </Button>
      </form>
    </>
  );
};

export default FormContoler;
