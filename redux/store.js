import { configureStore } from "@reduxjs/toolkit"
import { otherReducer } from "./reducers/otherReducers"
import { userReducer } from "./reducers/userReducer"
import { productReducer } from "./reducers/productReducers"
import { cartReducer } from "./reducers/cartReducers"

export const store = configureStore({
    reducer: {
        user: userReducer,
        other: otherReducer,
        product: productReducer,
        cart: cartReducer, 
    }
})

export const server = "https://waginstylestore-server.onrender.com/api/v1"