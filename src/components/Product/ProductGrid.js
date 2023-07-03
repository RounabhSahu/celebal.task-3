import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import ProductItem from './ProductItem'
import './product.css'


function ProductGrid() {
    const {products} = useContext(StateContext)
    // console.log(products)
    return(
        <section className="flex flex-wrap items-center justify-center">
            {
                products!==undefined && products.map((product) => <ProductItem key={product.id} product={product}/>)
            }
        </section>
    )
}

export default ProductGrid
