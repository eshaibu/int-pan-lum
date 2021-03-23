import React from 'react';
import { useModalContext } from '../../contexts/modal-context';
import {
  cartBody,
  cartBox,
  cartFooter,
  cartHeader,
  cartSubtotal,
  currencySelect,
  modalBackdrop,
} from './cart.styles';
import { RightArrowIcon } from '../icons';
import CartItem from './cart-item';

const Cart = () => {
  const { toggleVisibility } = useModalContext();

  return (
    <div className={modalBackdrop}>
      <div className={cartBox}>
        <div className={cartHeader}>
          <button onClick={toggleVisibility} type="button">
            <RightArrowIcon />
          </button>
          <span>YOUR CART</span>
        </div>
        <div className={currencySelect}>
          <select name="currency">
            <option>abc</option>
            <option>bcg</option>
          </select>
        </div>
        <div className={cartBody}>
          <CartItem />
          <CartItem />
        </div>
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
