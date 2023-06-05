import { useDispatch } from "react-redux"
import { ClearCart } from "../features/cart/CartSlice"
import { CloseModal } from "../features/modal/ModalSlice"

function Modal() {
    const dispatch = useDispatch()
  return (
    <aside>
        <div className="modal-container">
            <div className="modal">
                <h4>remove all items in your bag ?</h4>
                <div className="btn-container">
                <button className="confirm-btn btn" onClick={()=>{
                    dispatch(ClearCart())
                    dispatch(CloseModal())
                }}>confirm</button>
                <button className="clear-btn btn" onClick={()=>dispatch(CloseModal())}>cancel</button>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Modal