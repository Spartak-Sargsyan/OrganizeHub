import { IErrorMessage } from "../models/interface"

type ErrorMessage = Partial<IErrorMessage>

type RegEx = {
    PhoneNumberRegExp:RegExp;
    EmailRegExp:RegExp;
    PasswordRegExp:RegExp;
}


type CSS = {
    [key:string]:string
} 



export type { ErrorMessage, CSS, RegEx }