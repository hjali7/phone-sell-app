import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { OpenModal } from '../features/modal/ModalSlice'

function CartContainer() {
    const {amount , total , cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    if(amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your bag is empty</h2>
                    <h4 className='cart-empty'>Please choice each products</h4>
                </header>
            </section>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>You bag</h2>
        </header>
        <div>
            {cartItems.map(item => {
                return <CartItem key={item.id} {...item} />
            })}
        </div>
        <footer>
        <hr />
            <div className="cart-total">
                <h4>total <span> ${total.toFixed(2)} </span></h4>
            </div>
            <button className="btn clear-btn" onClick={()=>dispatch(OpenModal())}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer