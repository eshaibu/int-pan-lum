import React from 'react';
import { filterWrapper, header, logoName, productFilterStyle } from './header.styles';
import MainNav from './main-nav';

const Header = () => {
  return (
    <>
      <header className={header}>
        <h2 className={logoName}>LUMIN</h2>
        <MainNav />
      </header>
      <section className={filterWrapper}>
        <div className={productFilterStyle}>
          <h1>All Products</h1>
          <p>A 360° look at Lumin</p>
        </div>
      </section>
    </>
  );
};

export default Header;
