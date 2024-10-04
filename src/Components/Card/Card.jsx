import React, { useEffect } from 'react'

const Card = ({
  products,
  setCartValue,
  setCartList,
  cartList,
  setProducts,
  setIsButtonClicked,
}) => {
  useEffect(() => {
    setCartValue(() => cartList.length)
  }, [cartList])

  const addButtonHandler = (id) => {
    cartList.filter((c) => c.id == id).length === 1
      ? ''
      : setCartList(() => [...cartList, ...products.filter((p) => p.id === id)])
    setProducts(
      products.map((p) => {
        if (p.id == id) {
          setIsButtonClicked(true)
          return { ...p, isButtonClicked: true }
        } else return p
      })
    )
  }

  const removeButtonHandler = (id) => {
    setCartList(() => [...cartList.filter((cl) => cl.id !== id)])
    setProducts(
      products.map((p) => {
        if (p.id == id) {
          setIsButtonClicked(false)
          return { ...p, isButtonClicked: false }
        } else return p
      })
    )
  }
  return (
    <div className="card-container w-[80%] mt-[100px] flex flex-wrap gap-10 flex-1 flex-shrink mx-auto">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[300px] max-w-sm flex flex-col justify-center item-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="mx-auto p-8 rounded-t-lg w-[200px] h-[200px]"
                src={item.image}
                alt={item.title}
              />
            </a>
            <div className="px-5 pb-5">
              <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title.slice(0, 50)}
              </h5>

              <div className="flex justify-between items-center mt-[16px] ">
                <span className="text-xl flex font-bold text-gray-900 dark:text-white border border-red-500 px-[10px] py-[5px] rounded-md shadow-xl text-red-800">
                  <svg
                    className="pt-[0.50rem] ml-[0] "
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#9B1C1C"
                  >
                    <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
                  </svg>
                  {item.price}
                </span>
                {item.isButtonClicked == false ? (
                  <button
                    onClick={() => addButtonHandler(item.id)}
                    className=" text-[1rem] text-white hover:text-black bg-gray-700 hover:bg-yellow-300 font-medium rounded-lg text-sm px-[16px] py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    onClick={() => removeButtonHandler(item.id)}
                    className="text-[1rem]  text-black hover:text-white bg-yellow-300 hover:bg-gray-700 font-medium rounded-lg text-sm px-[5px] py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
