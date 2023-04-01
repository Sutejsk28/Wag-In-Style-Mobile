import axios from "axios"
import { server } from "../store"

export const getAllProducts = (keyword, category) => async (dispatch) => {
    try {
        //?category=${category? category : ""}&keyword=${keyword ? keyword : ""}
        
        dispatch({
            type: "getAllProductsRequest",
        })
        let url = `${server}/product/getallproducts?`
        
        if (category) url += `category=${category}` 
        if (keyword !== "" ) url += `keyword=${keyword}`
        
        const {data} = await axios.get(
            url,  
            {
                withCredentials: true,
            }
        )
        dispatch({
            type: "getAllProductsSuccess",
            payload: data.products
        })
        
    } catch (error) {
        dispatch({
            type: "getAllProductsFailed",
            payload: error.response.data.message,
        })
    }
}

export const getAdminProducts = () => async (dispatch) => {
    try {
        
        dispatch({
            type: "getAdminProductRequest",
        })

        const {data} = await axios.get(
            `${server}/product/admin`,  
            {
                withCredentials: true,
            }
        )
        
        dispatch({
            type: "getAdminProductsSuccess",
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: "getAdminProductFailed",
            payload: error.response.data.message,
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {   
        dispatch({
            type: "getProductDetailsRequest",
        })

        const {data} = await axios.get(
            `${server}/product/productdetails/${id}`,  
            {
                withCredentials: true,
            }
        )

        dispatch({
            type: "getProductDetailsSuccess",
            payload: data.product,
        })
        
    } catch (error) {
        dispatch({
            type: "getProductDetailsFailed",
            payload: error.response.data.message,
        })
    }
}