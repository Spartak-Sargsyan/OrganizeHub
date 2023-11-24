import { IDefaultValues } from "../models/interface"

const DefaultValuesRegister:IDefaultValues = {
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
};

const DefaultValuesLogin:IDefaultValues = {
    email: "",
    password: "",
}

export { DefaultValuesRegister, DefaultValuesLogin }