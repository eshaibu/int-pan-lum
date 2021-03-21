import React from 'react';
import { cartStyle, navStyle } from './header.styles';
import cartIcon from '../icons/cart-icon.png';

const MainNav = () => {
  return (
    <nav className={navStyle}>
      <ul className="nav-left">
        <li>Shop</li>
        <li>Learn</li>
      </ul>
      <ul className="nav-right">
        <li>Account</li>
        <li>
          <button className={cartStyle} onClick={() => null} type="button">
            <img src={cartIcon} alt="cart" />
            <span>2</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
