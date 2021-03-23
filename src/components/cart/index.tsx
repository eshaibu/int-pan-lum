import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
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
import { CurrencyProp, GetCurrencyQuery } from '../../graph';
import { RightArrowIcon } from '../icons';
import CartItem from './cart-item';

const Cart = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const { toggleVisibility } = useModalContext();
  const currencyQuery = useQuery<CurrencyProp>(GetCurrencyQuery);
  const currencies = currencyQuery.data?.currency ?? [];

  const handleCurrencySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedCurrency(value);
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
        {!currencyQuery.loading && (
          <div className={currencySelect}>
            <select name="currency" value={selectedCurrency} onChange={handleCurrencySelect}>
              {currencies.map((currency, index) => (
                <option key={index}>{currency}</option>
              ))}
            </select>
          </div>
        )}
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
