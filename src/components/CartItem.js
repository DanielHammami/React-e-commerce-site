import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"

function CartItem({item}) {
  const { removeCartItem } = useContext(Context)
  const [trash, setTrash] = useState("line")

  function removeItemFromCart() {
    removeCartItem(item)
  }

  function handleFillTrash() {
    setTrash("fill")
  }

  function handleEmptyTrash() {
    setTrash("line")
  }

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${trash}`}
        onClick={removeItemFromCart}
        onMouseOver={handleFillTrash}
        onMouseLeave={handleEmptyTrash}
      >
      </i>

      <img src={item.url} width="130px" alt={item.url}/>
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem