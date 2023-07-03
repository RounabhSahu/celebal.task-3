import React,{useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import './cartitem.css'

function CartItem({item}) {
    // consuming contexts
    const {increaseCount, decreaseCount, removeFromCart} = useContext(StateContext)

    // dteremine whether decrease or remove button to display
    function decreaseButton() {
        if(item.quantity === 1){
            return (
                <button onClick={() => removeFromCart(item)} className='text-orange-400 text-4xl font-extrabold border-2 border-slate-700  hover:bg-red-100'>
                    ❌
                </button>
            )

        } else {
            return (
                <button onClick={() => decreaseCount(item.id)} className="text-orange-400 text-4xl font-extrabold  border-2 border-slate-700 px-3 hover:bg-red-100">
                    ⬇
                </button>
            )
        }
    }

    // render JSX
    return (
        <div className="flex flex-row justify-center items-center border-4 border-slate-700 mx-40 my-2 py-2 text-2xl">
            <div className="w-[70%] flex flex-row justify-between items-center">
                <img src={item.thumbnail} alt="product" className='h-40 w-40 rounded'/>
                <h5>{item.title}</h5>
                <h5 className='mr-4'>$ {item.price}</h5>
            </div>
            <div className="mx-2">
                Qty: {item.quantity}
            </div>
            <div className="w-32 flex flex-row justify-around items-center">
                <button onClick={() => increaseCount(item.id)}  className="text-lime-400 text-4xl font-extrabold border-2 border-slate-700 px-3 hover:bg-lime-100">
                    ⬆
                </button>
                <br/>
                {/* decrease or remove button */}
                {decreaseButton()}

            </div>
        </div>
    )
}

export default CartItem
