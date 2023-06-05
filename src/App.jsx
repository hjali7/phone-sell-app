import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CalculateTotal } from './features/cart/CartSlice'
import Modal from './components/Modal'

function App() {
  const {cartItems} = useSelector(state => state.cart)
  const {isOpen} = useSelector(state => state.modal)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(CalculateTotal())
  },[cartItems])
  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App
