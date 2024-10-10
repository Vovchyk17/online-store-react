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
        className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-xl transition-all hover:text-blue-800"
        onClick={() => setShowCart(!showCart)}
      >
        <FaCartShopping />
        <span className="absolute left-1/2 top-full flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs leading-none text-white">
          {cartItems.length}
        </span>
      </button>
      {showCart && (
        <div className="absolute right-0 top-12 z-10 w-64 bg-white shadow-lg">
          <div className="flex items-center justify-between border-b p-2">
            <h2 className="text-lg font-bold">Cart</h2>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => setShowCart(false)}
            >
              Close
            </button>
          </div>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b p-2"
              >
                <div>
                  {item.title} - ${item.price} x {item.quantity}
                </div>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t p-2">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </div>
      )}
    </>
  )
}
