import { RegEx } from "../models/type"

const RegExp:RegEx = {
    EmailRegExp:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PasswordRegExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[a-zA-Z\d!@#$%]{8,}$/
}

export { RegExp }