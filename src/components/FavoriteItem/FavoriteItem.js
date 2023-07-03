import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'
import "./favoriteitem.css"

function FavoriteItem({item}) {
    // consuming contexts
    const {removeFromFavorite} = useContext(StateContext)

    // render JSX
    return (
        <div className="flex flex-row justify-center items-center border-4 border-slate-700 mx-40 my-2 py-2 text-2xl">
            <div className="w-[70%] flex flex-row justify-between items-center">
                <img src={item.thumbnail} alt="product"  className='ml-8 h-40 w-40 rounded'/>
                <h5>{item.title}</h5>
                <h5 className='mr-4'>$ {item.price}</h5>
            </div>
            <div className="product-qty-col">
                <Link to={`/product/${item.id}`}>
                    <button className="view-detail-btn">
                        View Details
                    </button>
                </Link>
            </div>
            <div className="w-32 flex flex-row justify-around items-center">
                <button onClick={() => removeFromFavorite(item.id)}  className='text-orange-400 text-4xl font-extrabold border-2 border-slate-700 py-1  hover:bg-red-100'>
                    ❌
                </button>
            </div>
        </div>
    )
}

export default FavoriteItem
