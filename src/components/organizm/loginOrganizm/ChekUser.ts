import { useDispatch, useSelector } from "react-redux"
import { userIsLoggedIn, userIsLoggedOut } from "../../../store/loginSlice"
import { fetchingLogin } from "../../../store/service"
import { ILoginData } from "../../../models/interface"

export const useCheckUser = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.login.isLoggedIn) 
    const isLoading = useSelector(state => state.login.isLoading) 
    const error = useSelector(state => state.login.error)
    
    const loginUserFetch = async (data:ILoginData) => {
        try{
            const response = await dispatch(fetchingLogin(data))
            console.log(response);
            const date = response.payload.data
            const token = date.accessToken
            localStorage.setItem('token', token)
            dispatch(userIsLoggedIn())
            return response
        }
        catch(error){
            if (error.response && error.respone.status === 401){
                const refreshToken = localStorage.getItem("refreshToken")
                if(refreshToken){
                    localStorage.setItem('token', refreshToken)
                }
            }
            console.error(error);
            throw error
        }
    }

    const userLogOut = () => {
        dispatch(userIsLoggedOut())
    }

    return {
        isLoading,
        isLoggedIn,
        loginUserFetch,
        userLogOut,
        error
    }
}