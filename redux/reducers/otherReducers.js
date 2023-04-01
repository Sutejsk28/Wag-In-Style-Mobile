import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer(
    {
        
    }, 
    (builder)=>{
        builder
        .addCase("changePasswordRequest", (state)=>{
            state.loading = true
        })
        .addCase("updateProfileRequest", (state)=>{
            state.loading = true
        })
        .addCase("updatePictureRequest", (state)=>{
            state.loading = true
        })
        .addCase("placeOrderRequest", (state)=>{
            state.loading = true
        })
        .addCase("processOrderRequest", (state)=>{
            state.loading = true
        })
        .addCase("addCategoryRequest", (state)=>{
            state.loading = true
        })
        .addCase("deleteCategoryRequest", (state)=>{
            state.loading = true
        })
        .addCase("addProductRequest", (state)=>{
            state.loading = true
        })
        .addCase("updateProductRequest", (state)=>{
            state.loading = true
        })
        .addCase("deleteProductRequest", (state)=>{
            state.loading = true
        })
        .addCase("updateProductImageRequest", (state)=>{
            state.loading = true
        })
        .addCase("deleteProductImageRequest", (state)=>{
            state.loading = true
        })
        .addCase("forgotPasswordRequest", (state)=>{
            state.loading = true
        })
        .addCase("resetPasswordRequest", (state)=>{
            state.loading = true
        })

        builder
            .addCase("changePasswordSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("updateProfileSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("updatePictureSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("placeOrderSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("processOrderSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("addCategorySuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("deleteCategorySuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("addProductSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("updateProductSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("deleteProductSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("updateProductImageSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("deleteProductImageSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("forgotPasswordSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })
            .addCase("resetPasswordSuccess", (state,action) => {
                state.loading = false
                state.message = action.payload
            })

        builder
            .addCase("changePasswordFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("updateProfileFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("updatePictureFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("placeOrderFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("processOrderFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("addCategoryFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("deleteCategoryFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("addProductFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("updateProductFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("deleteProductFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("updateProductImageFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("deleteProductImageFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("forgotPasswordFailed", (state,action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase("resetPasswordFailed", (state,action) => {
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