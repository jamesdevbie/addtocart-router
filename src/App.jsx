import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Products } from './Components/Products/Products'
import Cart from './Pages/Cart'

const App = () => {
  let [products, setProducts] = useState([])
  let [cartvalue, setCartValue] = useState(0)
  let [cartList, setCartList] = useState([])
  let [count, setCount] = useState(1)
  let [isButtonClicked, setIsButtonClicked] = useState(false)

  return (
    <BrowserRouter>
      <div>
        <NavBar cartvalue={cartvalue} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={products}
              setProducts={setProducts}
              setCartValue={setCartValue}
              cartList={cartList}
              setCartList={setCartList}
              count={count}
              isButtonClicked={isButtonClicked}
              setIsButtonClicked={setIsButtonClicked}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              setCartValue={setCartValue}
              cartList={cartList}
              setCartList={setCartList}
              setProducts={setProducts}
              products={products}
              setIsButtonClicked={setIsButtonClicked}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
