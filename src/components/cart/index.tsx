import React from 'react';
import {
  cartBody,
  cartBox,
  cartFooter,
  cartHeader,
  cartSubtotal,
  modalBackdrop,
} from './cart.styles';
import { RightArrowIcon } from '../icons';

const Cart = () => {
  return (
    <div className={modalBackdrop}>
      <div className={cartBox}>
        <div className={cartHeader}>
          <button onClick={() => null} type="button">
            <RightArrowIcon />
          </button>
          <span>YOUR CART</span>
        </div>
        <div className={cartBody}>Hello</div>
        <div className={cartFooter}>
          <div className={cartSubtotal}>
            <span>Subtotal</span>
            <span>NGN 78,000.00</span>
          </div>
          <button type="button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
