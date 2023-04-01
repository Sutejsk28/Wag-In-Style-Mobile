import axios from "axios"
import { server } from "../store"

export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
    try {

        dispatch({
            type: "changePasswordRequest"
        })

        const {data} = await axios.put(`${server}/user/changepassword`, {
            oldPassword,
            newPassword
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })

        dispatch({
            type: "changePasswordSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "changePasswordFailed",
            payload: error.response.data.message,
        })
    }
}

export const updateProfile = 
    (name, email, address, city, country, pinCode) => async (dispatch) => {
        try {

            dispatch({
                type: "updateProfileRequest"
            })

            const {data} = await axios.put(`${server}/user/updateprofile`, 
            {
                name, email, address, city, country, pinCode
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })

            dispatch({
                type: "updateProfileSuccess",
                payload: data.message
            })

        } catch (error) {
            dispatch({
                type: "updateProfileFailed",
                payload: error.response.data.message,
            })
        }
}

export const updatePicture = (formData) => async (dispatch) => {
    try {
        
        dispatch({
            type: "updatePictureRequest",
        })

        const {data} = await axios.put(
            `${server}/user/updatepic`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            })

        dispatch({
            type: "updatePictureSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "updatePictureFailed",
            payload: error.response.data.message,
        })
    }
}

export const placeOrder = 
    (
        shippingInfo, 
        orderItems, 
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingCharges, 
        totalAmount, 
        paymentInfo,
    ) => async (dispatch) => {
    try {

        dispatch({
            type: "placeOrderRequest"
        })

        const {data} = await axios.post(`${server}/order/addorder`, {
            shippingInfo, 
            orderItems, 
            paymentMethod, 
            paymentInfo, 
            itemsPrice, 
            taxPrice, 
            shippingCharges, 
            totalAmount 
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })

        dispatch({
            type: "placeOrderSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "placeOrderFailed",
            payload: error.response.data.message,
        })
    }
}

export const processOrder = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "processOrderRequest"
        })

        const {data} = await axios.put(`${server}/order/orderdetails/${id}`, 
        {}, 
        {
            withCredentials: true,
        }
        )

        dispatch({
            type: "processOrderSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "processOrderFailed",
            payload: error.response.data.message,
        })
    }
}

export const addCategory = (category) => async (dispatch) => {
    try {

        dispatch({
            type: "addCategoryRequest"
        })

        const {data} = await axios.post(`${server}/product/category/newcategory`, 
        {
            category,
        }, 
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }
        )

        dispatch({
            type: "addCategorySuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "addCategoryFailed",
            payload: error.response.data.message,
        })
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "deleteCategoryRequest"
        })

        const {data} = await axios.delete(`${server}/product/category/${id}`, 
        {}, 
        {
            withCredentials: true,
        }
        )

        dispatch({
            type: "deleteCategorySuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "deleteCategoryFailed",
            payload: error.response.data.message,
        })
    }
}

export const addProduct = (formData) => async (dispatch) => {
    try {
        
        dispatch({
            type: "addProductRequest",
        })

        const {data} = await axios.post(
            `${server}/product/newproduct`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            })

        dispatch({
            type: "addProductSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "addProductFailed",
            payload: error.response.data.message,
        })
    }
}

export const updateProduct = 
    (id, name, description, price, stock, category) => async (dispatch) => {
        try {

            dispatch({
                type: "updateProductRequest"
            })

            const {data} = await axios.put(`${server}/product/productdetails/${id}`, 
            {
                name, description, price, stock, category
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })

            dispatch({
                type: "updateProductSuccess",
                payload: data.message
            })

        } catch (error) {
            dispatch({
                type: "updateProductFailed",
                payload: error.response.data.message,
            })
        }
}

export const updateProductImage = (productId,formData) => async (dispatch) => {
    try {
        
        dispatch({
            type: "updateProductImageRequest",
        })

        const {data} = await axios.post(
            `${server}/product/images/${productId}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            })

        dispatch({
            type: "updateProductImageSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "updateProductImageFailed",
            payload: error.response.data.message,
        })
    }
}

export const deleteProductImage = (productId,imageId) => async (dispatch) => {
    try {
        
        dispatch({
            type: "deleteProductImageRequest",
        })

        const {data} = await axios.delete(
            `${server}/product/images/${productId}?id=${imageId}`,
            {},
            {
                withCredentials: true,
            })

        dispatch({
            type: "deleteProductImageSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "deleteProductImageFailed",
            payload: error.response.data.message,
        })
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    try {
        
        dispatch({
            type: "deleteProductRequest",
        })

        const {data} = await axios.delete(
            `${server}/product/productdetails/${productId}`,
            {},
            {
                withCredentials: true,
            })

        dispatch({
            type: "deleteProductSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "deleteProductFailed",
            payload: error.response.data.message,
        })
    }
}

export const forgotPassword = 
    (email) => async (dispatch) => {
        try {

            dispatch({
                type: "forgotPasswordRequest"
            })

            const {data} = await axios.post(`${server}/user/forgotpassword`, 
            {
                email
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })

            dispatch({
                type: "forgotPasswordSuccess",
                payload: data.message
            })

        } catch (error) {
            dispatch({
                type: "forgotPasswordFailed",
                payload: error.response.data.message,
            })
        }
}

export const resetPassword = 
    (otp,password) => async (dispatch) => {
        try {

            dispatch({
                type: "resetPasswordRequest"
            })

            const {data} = await axios.put(`${server}/user/forgotpassword`, 
            {
                otp,
                password,
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })

            dispatch({
                type: "resetPasswordSuccess",
                payload: data.message
            })

        } catch (error) {
            dispatch({
                type: "resetPasswordFailed",
                payload: error.response.data.message,
            })
        }
}
