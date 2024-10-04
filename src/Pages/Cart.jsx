import React, { useEffect } from 'react'

const Cart = ({
  cartList,
  setCartList,
  setCartValue,
  setProducts,
  products,
  setIsButtonClicked,
}) => {
  useEffect(() => setCartValue(cartList.length), [cartList])

  const cardRemoveHandler = (id) => {
    setProducts(
      products.map((p) => {
        if (p.id == id) {
          setIsButtonClicked(false)
          return { ...p, isButtonClicked: false }
        } else return p
      })
    )
    setCartList(() => [...cartList.filter((cl) => cl.id !== id)])
  }

  const totalSum = cartList.reduce((acc, curr) => acc + curr.totalAmount, 0)
  const discountTotal = totalSum - (totalSum * 10) / 100

  const incrementHandler = (id) => {
    //setCount((count) => (count = count + 1))

    setCartList(
      cartList.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            quantity: d.quantity + 1,
            totalAmount: (d.quantity + 1) * d.price,
          }
        } else return d
      })
    )
  }
  const decrementHandler = (id) => {
    setCartList(
      cartList.map((d) => {
        if (d.id === id && d.quantity > 1) {
          // return Object.assign(d, { quantity: count })
          return {
            ...d,
            quantity: d.quantity - 1,
            totalAmount: (d.quantity - 1) * d.price,
          }
        }
        // else if (d.id === id && d.quantity == 1) {
        // }
        else return d
      })
    )
  }
  return (
    <div className="modal bg-slate-100 mt-[80px] w-[80%] m-auto h-max scroll">
      <div className="modal-header">
        <h1 className="font-extrabold text-center text-[1.5rem] tracking-widest text-black bg-yellow-300">
          Shopping Cart
        </h1>
      </div>
      {cartList.length !== 0 ? (
        <table className="text-gray-800 font-bold w-full text-center">
          <caption></caption>
          <thead className="bg-black text-white">
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price / Item</th>
              <th>Quantity</th>
              <th>Action</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="border-collapse border border-slate-400">
            {cartList.map((cl) => {
              return (
                <tr key={cl.id}>
                  <td className=" border border-slate-300">
                    <img
                      className="cart-image mx-auto w-[150px] h-[150px] rounded-[1rem] drop-shadow-lg"
                      src={cl.image}
                      alt={cl.title}
                    />
                  </td>
                  <td className=" border border-slate-300">{cl.title}</td>
                  <td className=" border border-slate-300">
                    <div className="flex justify-center">
                      <svg
                        className="mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 -960 960 960"
                        width="18px"
                        fill="#000000"
                      >
                        <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
                      </svg>
                      <span>{cl.price}</span>
                    </div>
                  </td>
                  <td className=" border border-slate-300">
                    <div className="border flex grow ">
                      <span
                        onClick={() => incrementHandler(cl.id)}
                        className="border w-[33.3%]"
                      >
                        +
                      </span>
                      <span className="border w-[33.3%] ">{cl.quantity}</span>
                      <span
                        onClick={() => decrementHandler(cl.id)}
                        className="border w-[33.3%]"
                      >
                        -
                      </span>
                    </div>
                  </td>
                  <td className=" border border-slate-300">
                    <button
                      type="button"
                      className="text-white hover:text-black bg-gray-700 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-lg rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => cardRemoveHandler(cl.id)}
                    >
                      Remove
                    </button>
                  </td>
                  <td className=" border border-slate-300">
                    <div className="flex justify-center">
                      <svg
                        className="mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 -960 960 960"
                        width="18px"
                        fill="#000000"
                      >
                        <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
                      </svg>
                      <span> {cl.totalAmount.toFixed(2)}</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot className="sticky border-collapse border border-slate-400 text-center bottom-[0] ">
            <tr className="border border-slate-400">
              <td
                className="bg-black border border-slate-400 text-white font-bold text-xl"
                colSpan={3}
              >
                Grand Total - {totalSum.toFixed(2)}
              </td>
              <td
                className="border border-slate-400 bg-yellow-300 font-bold text-xl"
                colSpan={3}
              >
                {' '}
                Discounted Total (10%) - {discountTotal.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="mt-[100px] w-full h-full text-center ">
          <h1 className="text-black font-bold text-[2rem]">
            Your Cart is Empty..!
          </h1>
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            height="240px"
            viewBox="0 -960 960 960"
            width="240px"
            fill="#03033d"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Cart
