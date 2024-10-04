import React, { useEffect } from 'react'
import Card from '../Card/Card'

const Products = ({
  setCartValue,
  setCartList,
  cartList,
  count,
  products,
  setProducts,
  isButtonClicked,
  setIsButtonClicked,
}) => {
  useEffect(() => {
    if (cartList.length == 0) {
      getProducts(URL)
    }
  }, [])

  const URL = 'https://fakestoreapi.com/products'

  const getProducts = async (URL) => {
    try {
      let result = await fetch(URL)
      let data = await result.json()
      //setProducts(data.map((d) => Object.assign(d, { quantity: count })))

      setProducts(
        data.map((d) => {
          return {
            ...d,
            quantity: count,
            isButtonClicked: isButtonClicked,
            totalAmount: count * d.price,
          }
        })
      )
    } catch (error) {
      return error
    }
  }
  return (
    <div className="products">
      <Card
        products={products}
        setCartValue={setCartValue}
        setCartList={setCartList}
        cartList={cartList}
        setProducts={setProducts}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
      />
    </div>
  )
}

export { Products }
