import { Ivalidate, Ivalidate2 } from "../models/interface"
import { MinMaxLength, RequiredField } from "./ErrorMessage"


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


export { Required, MaxLength, MinLength }
