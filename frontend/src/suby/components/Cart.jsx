import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleCheckout = () => {
    if (!name || !address || !phone || !email) {
      alert('Please fill in all fields');
      return;
    }
    // Proceed to checkout logic here
    alert('Proceeding to checkout');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cartItem">
              <div>
                <strong>{item.productName}</strong>
                <p>₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="quantityControls">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}
          <div className="checkoutForm">
            <h3>Checkout Details</h3>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
