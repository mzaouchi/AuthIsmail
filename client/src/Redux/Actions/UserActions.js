import { CURRENTUSER, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/UserTypes"
import axios from 'axios'
import { handleError } from "./ErrorActions"
export const register=(cordUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignUp', cordUser)
        
        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profil')
   
   
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )

        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const login=(cordUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignIn', cordUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate('/Profil')


    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )

        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const currentUser=()=>async(dispatch)=>{
    try {

        const config = {
            headers : {
                authorized : localStorage.getItem('token')
            }
        }

        const res = await axios.get('/api/user/CurrentUser', config)

        dispatch(
            {
                type : CURRENTUSER,
                payload : res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}