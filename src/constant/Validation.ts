import { Ivalidat3, Ivalidate, Ivalidate2 } from "../models/interface"
import { MinMaxLength, RequiredField, ValidateMessage } from "./ErrorMessage"
import { RegExp } from "./RegEx"


const Required:Ivalidate2 = {
    value: true,
    message: RequiredField.RequaredMessage || "Error",
}

const MinLength:Ivalidate = {
    value: 2,
    message: MinMaxLength.MinLengthMessage || "Error",
}

const MaxLength:Ivalidate = {
    value: 30,
    message: MinMaxLength.MaxLengthMessage || "Error",
}

const RegExpPattern:Ivalidat3 = {
    value:RegExp.EmailRegExp,
    message: ValidateMessage.EmailErrorMessage || "Error"
}

const RegExpPattern2:Ivalidat3 = {
    value:RegExp.PasswordRegExp,
    message: ValidateMessage.PasswordErrorMessage || "Error"
}


export { Required, MaxLength, MinLength, RegExpPattern, RegExpPattern2 }
