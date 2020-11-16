import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"

function Header() {
    const [cartIcon, setCartIcon] = useState("line")
    const { cartItems } = useContext(Context)

    useEffect(() => {
        cartItems.length === 0
        ? setCartIcon("line")
        : setCartIcon("fill")
    }, [cartItems])

    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>

            <Link to="/cart">
                <i className={`ri-shopping-cart-${cartIcon} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
