import { IErrorMessage, IRegiterData } from "../models/interface"

type ErrorMessage = Partial<IErrorMessage>

type RegEx = {
    [key:string]:RegExp;
}

type RegisterState = {
    auth:{
        user:IRegiterData[],
        isLoading:boolean,
        error:string | null
    }
}


export type { ErrorMessage, RegEx, RegisterState }