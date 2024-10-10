import { IoIosCloseCircle } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const [showCart, setShowCart] = useState(false)
  const { cartItems, increaseQuantity, decreaseQuantity, calculateTotal } =
    useContext(CartContext)

  return (
    <>
      <button
        className={`absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-xl transition-all hover:text-blue-800 ${
          cartItems.length === 0 ? 'pointer-events-none opacity-50' : ''
        }`}
        onClick={() => setShowCart(!showCart)}
      >
        <FaCartShopping />
        <span className="absolute left-1/2 top-full flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs leading-none text-white">
          {cartItems.length}
        </span>
      </button>
      {showCart && (
        <div className="absolute right-0 top-full z-10 w-96 max-w-full border bg-white shadow-lg">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <h2 className="text-lg font-bold">Cart</h2>
            <button
              className="text-2xl hover:text-red-700"
              onClick={() => setShowCart(false)}
            >
              <IoIosCloseCircle />
            </button>
          </div>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-4 border-b px-4 py-2"
              >
                <div>{item.title}</div>
                <strong>${item.price}</strong>
                <div className="flex items-center justify-between gap-2 whitespace-nowrap">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="cursor-pointer text-xl hover:text-blue-800"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="cursor-pointer text-xl hover:text-blue-800"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between bg-black px-4 py-2 font-bold text-white">
            Total: <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <form className="flex flex-col items-start gap-4 border-t p-4">
            <div className="w-full">
              <label htmlFor="clientName">Your Name:</label>
              <input type="text" id="clientName" required />
            </div>
            <div className="w-full">
              <label htmlFor="clientEmail">Your Email:</label>
              <input type="email" id="clientEmail" required />
            </div>
            <div className="flex gap-5 self-end">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => setShowCart(false)}
              >
                Close
              </button>
              <button type="submit" className="button w-auto self-center">
                Order
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
