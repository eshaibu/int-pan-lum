import React from 'react';
import { cartItemStyle, productDescription, productImage, qtyCounterWrapper } from './cart.styles';
import { XIcon } from '../icons';

const CartItem = () => {
  return (
    <div className={cartItemStyle}>
      <div className="remove-icon">
        <XIcon onClick={() => null} />
      </div>
      <div className={productDescription}>
        <span className="product-title">Age Management Set</span>
        <div className={qtyCounterWrapper}>
          <div className="qty-selector">
            <button type="button" onClick={() => null}>
              -
            </button>
            <span>2</span>
            <button type="button" onClick={() => null}>
              +
            </button>
          </div>
          <span className="product-price">NGN 50,000.00</span>
        </div>
      </div>
      <div className={productImage}>
        <img src="https://via.placeholder.com/220X170" alt="product" />
      </div>
    </div>
  );
};

export default CartItem;
