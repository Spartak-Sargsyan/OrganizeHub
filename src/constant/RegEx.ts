import { RegEx } from "../models/type"

const RegExp:RegEx = {
    PhoneNumberRegExp: /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/,
    EmailRegExp:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PasswordRegExp: /^(?=.*\d)(?=.*[A-Z]).{8,}$/
}

export { RegExp }