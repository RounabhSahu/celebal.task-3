import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'

function ProductItem({product}) {
    // consuming contexts
    const {addToCart, favoriteItems, addToFavorite, removeFromFavorite} = useContext(StateContext)

    // Cart button display
    function cartButton() {
        return (
            <button onClick={() => addToCart(product)} className="add-cart-btn">Add to Cart</button>
        )
    }

    // determine which Favorite button to display
    function favoriteButton() {
        // check which product is already favorited
        const alreadyFavorited = favoriteItems.some(item => item.id===product.id)

        if(alreadyFavorited){
            return (
                <i onClick={() => removeFromFavorite(product.id)} className="ri-heart-fill favorite favorite-btn">❤️</i>
            )
        }else{
            return (
                <i onClick={() => addToFavorite(product)} className="ri-heart-line favorite favorite-btn">🤍</i>
            )
        }
    }

    // render JSX
    return (
        <div key={product.id} className="w-[400px] mx-1 h-92 my-1 border-4 border-slate-700">
                {/* product image */}
            <div className='aspect-square w-full p-4'>
                <img src={product.thumbnail} alt="product"  className="w-full h-full rounded"/>
            </div>


            <div className="product-info space-y-2 my-1">
                {/* product title */}
                <h5>{product.title}</h5>

                {/* product price */}
                <h6>$ {product.price}</h6>

                {/* favorite button */}
                { favoriteButton() }

                {/* cart button */}
                { cartButton() }

                {/* detail button */}
                <Link to={`/product/${product.id}`}>
                    <button className="view-detail-btn">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductItem
