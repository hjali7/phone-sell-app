import { createSlice} from "@reduxjs/toolkit";
import CartItems from "../../CartItems";

const initialState = {
    cartItems : CartItems , 
    total : 0 , 
    amount : 0 , 
}

const CartSlice = createSlice({
    name: "cart" , 
    initialState ,
    reducers : {
        increase : (state , action) => {
            let Increase = state.cartItems.find(item => item.id === action.payload)
            Increase.amount = Increase.amount + 1
        },
        decrease : (state , action) => {
            let Decrease = state.cartItems.find(item => item.id === action.payload)
            Decrease.amount = Decrease.amount - 1
        },
        removeItem : (state , action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        CalculateTotal : state => {
            let total = 0 
            let amount = 0
            state.cartItems.forEach(item => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total 
        },
        ClearCart : state => {
            state.cartItems = []
        }
    }
})

export const {increase , decrease , removeItem , CalculateTotal, ClearCart} = CartSlice.actions

export default CartSlice.reducer