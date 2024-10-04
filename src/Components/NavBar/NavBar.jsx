import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = ({ cartvalue }) => {
  let logoURL = 'https://www.svgrepo.com/show/94662/shopping-cart.svg'
  const navigate = useNavigate()

  const cartModalHandler = () => {
    navigate('/cart')
  }

  return (
    <nav className=" bg-gradient-to-r from-gray-800 to-zinc-500 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={'/'}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoURL} className="h-8 w-[50px]" alt="JX4 Logo" />
          <span className=" text-yellow-300 font-bold text-[2rem] self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JX4 Retail
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={cartModalHandler}
            className="text-white flex bg-black hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#FACA15"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
            </svg>
            <span className="cart-p text-yellow-300">{cartvalue}</span>
          </button>
        </div>
        <div
          className=" text-yellow-300 font-bold text-xl cursor-pointer items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-3 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="text-yellow-300 block py-2 px-3 text-white hover:text-black  font-bold text-xl ml-[100%]"
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        ></div>
      </div>
    </nav>
  )
}

export default NavBar
