import React from 'react'

function Cart({ cartItems, removeFromCart, updateCart }) {
  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div>Your Cart is empty</div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateCart(item.id, e.target.value)}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
