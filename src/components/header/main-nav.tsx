import React from 'react';
import { useModalContext } from '../../contexts/modal-context';
import { cartIconStyle, navStyle } from './header.styles';
import { CartIcon } from '../icons';

const MainNav = () => {
  const { toggleVisibility } = useModalContext();

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
            <span>2</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
