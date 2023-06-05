import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

const ModalSlice = createSlice({
    name : "modal" ,
    initialState , 
    reducers : {
        OpenModal : state => {
            state.isOpen = true;
        },
        CloseModal : state => {
            state.isOpen = false
        }
    }
})

export const {OpenModal ,CloseModal} = ModalSlice.actions
export default ModalSlice.reducer