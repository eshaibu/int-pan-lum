import React from 'react';
import { useQuery } from '@apollo/client';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useCartContext, useModalContext } from '../../contexts';
import {
  cartBody,
  cartBox,
  cartFooter,
  cartHeader,
  cartSubtotal,
  currencySelect,
  modalBackdrop,
} from './cart.styles';
import { CurrencyType, GET_CURRENCY } from '../../graph';
import { RightArrowIcon } from '../icons';
import CartItem from './cart-item';

const Cart = () => {
  const { toggleVisibility } = useModalContext();
  const { cartCurrency, cartItems, setCurrency } = useCartContext();

  const currencyQuery = useQuery<CurrencyType>(GET_CURRENCY);
  const currencies = currencyQuery.data?.currency ?? [];

  const handleCurrencySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCurrency(value);
  };

  return (
    <div className={modalBackdrop}>
      <div className={cartBox}>
        <div className={cartHeader}>
          <button onClick={toggleVisibility} type="button">
            <RightArrowIcon />
          </button>
          <span>YOUR CART</span>
        </div>
        {!currencyQuery.loading && cartItems.length > 0 && (
          <div className={currencySelect}>
            <select name="currency" value={cartCurrency} onChange={handleCurrencySelect}>
              {currencies.map((currency, index) => (
                <option key={index}>{currency}</option>
              ))}
            </select>
          </div>
        )}
        <div className={cartBody}>
          {cartItems.length === 0 && <div className="empty-cart">Cart Empty</div>}
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.productId} cartItem={cartItem} />
          ))}
        </div>
        <div className={cartFooter}>
          <div className={cartSubtotal}>
            <span>Subtotal</span>
            <span>{getSymbolFromCurrency(cartCurrency) || `${cartCurrency} `} 78,000.00</span>
          </div>
          <button type="button" disabled={cartItems.length === 0}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
