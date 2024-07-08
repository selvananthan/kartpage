// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, selectCartItems } from '../features/cart/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Cart.css'; // Import custom CSS for Cart

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const handleIncrement = itemId => {
    dispatch(incrementQuantity({ itemId }));
  };

  const handleDecrement = itemId => {
    dispatch(decrementQuantity({ itemId }));
  };

  const calculateTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5 cart-container">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleDecrement(item.id)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                  <p className="mb-0"><strong>Total: ${item.price * item.quantity}</strong></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="mb-1"><strong>Total Quantity:</strong> {calculateTotalQuantity()}</p>
        <p className="mb-1"><strong>Total Amount:</strong> ${calculateTotalAmount()}</p>
      </div>
    </div>
  );
};

export default Cart;
