import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false)
  const [heartIconState, setHeartIconState] = useState("line")
  const [shopIconState, setShopIconState] = useState("add-circle-line")
  const { toggleFavorite, handleImage } = useContext(Context)

  const heartIcon = <i onClick={ handleHeartIconClick } className={`ri-heart-${heartIconState} favorite`}></i>
  const plusIcon = <i onClick={ handlePlusIconClick } className={`ri-${shopIconState} cart`}></i>

  function handleHoveredEnter() {
    setHovered(true)
  }

  function handleHoveredLeave() {
    setHovered(false)
  }

  function handleHeartIconClick() {
    toggleFavorite(img.id)
    heartIconState === "line" ? setHeartIconState("fill") : setHeartIconState("line")
  }

  function handlePlusIconClick() {
    handleImage(img)
    shopIconState === "add-circle-line" ? setShopIconState("shopping-cart-fill") : setShopIconState("add-circle-line")
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={ handleHoveredEnter }
      onMouseLeave={ handleHoveredLeave }
    >
      <img src={img.url} className="image-grid" alt="toto"/>

      {hovered &&
        <div>
          { heartIcon }
          { plusIcon }
        </div>
      }
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image