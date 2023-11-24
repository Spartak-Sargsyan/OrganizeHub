import {loginApi, registerApi} from './ApiRequest';
import axios, {AxiosError} from "axios"

interface IuserDate {
    firstName: string;
    lastName: string;
    userName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

const registerUser = async (userData:IuserDate):Promise<any> => {
    try {
        const response = await axios.post(registerApi, userData);
        return response.data;
    }
    catch (error:unknown) {
        if(axios.isAxiosError(error)){
            throw (error as AxiosError).response?.data;
        }
        else {
            throw error;
        }
    }
}

export {registerUser}


