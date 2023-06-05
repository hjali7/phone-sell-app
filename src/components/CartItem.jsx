import { useDispatch } from 'react-redux'
import { ChevronDown, ChevronUp } from '../icons'
import { decrease, increase, removeItem } from '../features/cart/CartSlice'

function CartItem(props) {
    const {img , id , title , price ,amount} = props
    const dispatch = useDispatch()
  return (
    <section className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <p className="item-price">${price}</p>
            <button className="remove-btn">remove</button>
        </div>
        <div>
            <button className=" amount-btn" onClick={()=>dispatch(increase(id))}>
                <ChevronUp/>
            </button>
            <p className="amount">{amount}</p>
            <button className=" amount-btn" onClick={()=>{
                if(amount == 1) {
                    dispatch(removeItem(id))
                    return
                }
                dispatch(decrease(id))
            }}>
                <ChevronDown/>
            </button>
        </div>

    </section>
  )
}

export default CartItem