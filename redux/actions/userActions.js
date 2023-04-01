import axios from "axios"
import { server } from "../store"

export const login = (email,password) => async (dispatch) => {
    try {
        
        dispatch({
            type: "loginRequest",
        })

        const {data} = await axios.post(`${server}/user/login`, {
            email,
            password,
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })

        dispatch({
            type: "loginSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "loginFailed",
            payload: error.response.data.message,
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        
        dispatch({
            type: "loadUserRequest",
        })

        const {data} = await axios.get(
            `${server}/user/profile`,  
            {
                withCredentials: true,
            }
        )

        dispatch({
            type: "loadUserSuccess",
            payload: data.user
        })
        
    } catch (error) {
        dispatch({
            type: "loadUserFailed",
            payload: error.response.data.message,
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        
        dispatch({
            type: "logoutRequest",
        })

        const {data} = await axios.get(
            `${server}/user/logout`,  
            {
                withCredentials: true,
            }
        )

        dispatch({
            type: "logoutSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "logoutFailed",
            payload: error.response.data.message,
        })
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        
        dispatch({
            type: "signupRequest",
        })

        const {data} = await axios.post(
            `${server}/user/signup`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            })

        dispatch({
            type: "signupSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "signupFailed",
            payload: error.response.data.message,
        })
    }
}