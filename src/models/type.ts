import { IErrorMessage } from "../models/interface"

type ErrorMessage = Partial<IErrorMessage>

type RegEx = {
    [key:string]:RegExp;
}

export type { ErrorMessage, RegEx }