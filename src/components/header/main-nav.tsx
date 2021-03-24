import React from 'react';
import { useCartContext, useModalContext } from '../../contexts';
import { cartIconStyle, navStyle } from './header.styles';
import { CartIcon } from '../icons';

const MainNav = () => {
  const { toggleVisibility } = useModalContext();
  const { cartItems } = useCartContext();
  const totalItemsInCart =
    Object.values(cartItems)?.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0) ?? '';

  return (
    <nav className={navStyle}>
      <ul className="nav-left">
        <li>Shop</li>
        <li>Learn</li>
      </ul>
      <ul className="nav-right">
        <li>Account</li>
        <li>
          <button className={cartIconStyle} onClick={toggleVisibility} type="button">
            <CartIcon />
            <span>{totalItemsInCart}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
