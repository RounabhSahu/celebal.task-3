import React, {useContext, useEffect, useState} from 'react'
import { StateContext } from '../../context/GlobalState'
import {useParams} from 'react-router-dom'

function ProductDetail() {
    // consuming contexts
    const {addToCart} = useContext(StateContext)
    const [thisProduct, setThisProduct] = useState(null);
    // get id of current product
    const {productId} = useParams()
    console.log(productId)

    // fetch all products data
    const {products} = useContext(StateContext)
    console.log(products)
    // filter the product with matching id

    console.log(thisProduct)
    useEffect(() => {
        setThisProduct( products.filter(product => product.id === parseInt(productId)))
    }, [products]);

    // render JSX
    return (
        // map all information of that specific product
        <section>
            {
                thisProduct!==null && thisProduct.map(product => {
                    return(
                        <div key={product.id} className="product-detail">
                            <div className="product-detail-image">
                                <img src={product.thumbnail} alt="product" />
                            </div>
                            <div className="product-detail-info">
                                <h3>{product.title}</h3>
                                <h4>${product.price}</h4>
                                <p className="lead">{product.description}</p>

                                <button onClick={() => addToCart(product)} className="add-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            {
                thisProduct === null && <div>Hello</div>
            }
        </section>
    )
}

export default ProductDetail
