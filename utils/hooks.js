import { useEffect, useState } from "react"
import { Toast } from "react-native-toast-message/lib/src/Toast"
import { useSelector } from "react-redux"
import { loadUser } from "../redux/actions/userActions"
import axios from "axios"
import { server } from '../redux/store'
import { getAdminProducts } from '../redux/actions/productActions'

export const useMessageAndErrorUser = (navigation,dispatch,path="login")=>{
    const {loading, message, error} = useSelector(
        (state)=>state.user
    )

    useEffect(()=>{
        if(error){
            Toast.show({
                type: "error",
                text1: error,
            })
            dispatch({
                type: "clearError"
            })
        }
        if(message){
            navigation.reset({
               index: 0,
               routes: [{name: path}]
            })
            Toast.show({
                type: "success",
                text1: message,
            })
            dispatch({
                type: "clearMessage"
            })
            dispatch(loadUser())
        }
    },[error,message, dispatch])

    return loading
}

export const useMessageAndErrorOther = (
    dispatch,
    navigation, 
    path="login",
    func,
)=>{
    const {loading, message, error} = useSelector(
        (state)=>state.other
    )

    useEffect(()=>{
        if(error){
            Toast.show({
                type: "error",
                text1: error,
            })
            dispatch({
                type: "clearError"
            })
        }
        if(message){
            Toast.show({
                type: "success",
                text1: message,
            })
            dispatch({
                type: "clearMessage"
            })

            path && navigation?.navigate(path);

            func && dispatch(func())
        }
    },[error,message, dispatch])

    return loading
}

export const useSetCategories = (setCategories, isFocused)=>{
    useEffect(()=>{
        axios.get(`${server}/product/category/getallcategories`)
            .then(res => {
                setCategories(res.data.categories)
            })
            .catch(err => {
                Toast.show({
                    type: "error",
                    text1: err.response.data.message
                })
            })
    },[isFocused])
}

export const useGetOrders = ( isFocused, isAdmin=false) => {

    const [orders,setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get(`${server}/order/${isAdmin ? "admin" : "getuserorders"}`)
            .then(res => {
                setOrders(res.data.orders)
                setLoading(false)
            })
            .catch(err => {
                Toast.show({
                    type: "error",
                    text1: err.response.data.message
                })
                setLoading(false)
            })
    },[isFocused])

    return {
        loading,
        orders,
    }

}

export const useAdminProducts = (dispatch, isFocused) => {

    const { products, inStock, outOfStock, error, loading } = useSelector((state)=> state.product)

    useEffect(()=>{
        if(error){
            Toast.show({
                type: "error",
                text1: error,
            })
            dispatch({
                type: "clearError"
            })
        }
        dispatch(getAdminProducts())
    },[dispatch,isFocused,error])

    return {
        products,
        inStock,
        outOfStock,
        loading
    }
}