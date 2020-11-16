import React, { useState, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems, emptyCard } = useContext(Context)
    const [order, setOrder] = useState("Place Order")

    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElement = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function handleOrder() {
        setOrder("Ordering...")
        setTimeout(() => {
            setOrder("Order placed!")
            emptyCard()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>

            {cartItemElement}

            <p className="total-cost">Total:{totalCostDisplay}</p>

            <div className="order-button">
                {
                    cartItemElement.length !== 0
                    ? <button onClick={handleOrder}>{order}</button>
                    : <p>You have no items in your cart.</p>
                }
            </div>
        </main>
    )
}

export default Cart