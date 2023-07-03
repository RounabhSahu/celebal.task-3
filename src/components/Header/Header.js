import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    // consuming context
    const {totalItems, favoriteItems} = useContext(StateContext)

    // render JSX
    return (
        <nav>
            <div className="logo">
                <Link to='/'>Tapu Shop</Link>
            </div>
            <ul className="flex flex-row justify-center items-center mx-4 space-x-4">
                <li><Link to='/'>Store</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <ul className="w-48 mr-2 flex flex-row items-center">
                <Link to='/wishlist'>
                    <span className="flex flex-row text-lg w-16">💖 {favoriteItems.length}</span>
                </Link>
                <Link to='/cart'>

                    <span className="flex flex-row text-lg w-16">🛒 {totalItems}</span>
                </Link>
            </ul>
        </nav>
    )
}

export default Header
