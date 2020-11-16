import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  function toggleFavorite(id) {
    const newArray = photos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })
    setPhotos(newArray)
  }

  function handleImage(newItem) {
    const isItemInArray = cartItems.some(item => item === newItem)
    if(isItemInArray) {
      const removedItemArray = cartItems.filter(item => item !== newItem)
      setCartItems(removedItemArray)
    } else {
      setCartItems(prevItems => [...prevItems, newItem])
    }
  }

  function removeCartItem(Item) {
    const removeItemInArray = cartItems.filter(cartItem => cartItem !== Item)
    setCartItems(removeItemInArray)
  }

  function emptyCard() {
    setCartItems([])
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <Context.Provider value={{
      photos,
      cartItems,
      toggleFavorite,
      handleImage,
      removeCartItem,
      emptyCard
    }}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }