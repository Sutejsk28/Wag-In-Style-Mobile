import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
    {
        products: [],
        product: {},
        inStock: null,
        outOfStock: null,
    }, 
    (builder)=>{
        builder
        .addCase("getAllProductsRequest", (state)=>{
            state.loading = true
        })
        .addCase("getAdminProductsRequest", (state)=>{
            state.loading = true
        })
        .addCase("getProductDetailsRequest", (state)=>{
            state.loading = true
        })

        builder
            .addCase("getAllProductsSuccess", (state,action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase("getAdminProductsSuccess", (state,action) => {
                state.loading = false
                state.products = action.payload.products
                state.inStock = action.payload.inStock
                state.outOfStock = action.payload.outOfStock
            })
            .addCase("getProductDetailsSuccess", (state,action) => {
                state.loading = false
                state.product = action.payload
            })

        builder
            .addCase("getAllProductsFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("getAdminProductsFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("getProductDetailsFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })

        builder.addCase("clearError", (state)=>{
            state.error = null
        })

        builder.addCase("clearMessage", (state)=>{
            state.message = null
        })
    }
)