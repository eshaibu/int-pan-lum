import React from 'react';
import { cartIconStyle, navStyle } from './header.styles';
import { CartIcon } from '../icons';

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
          <button className={cartIconStyle} onClick={() => null} type="button">
            <CartIcon />
            <span>2</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
