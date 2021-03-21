import React from 'react';
import ProductItem from './product-item';
import spinnerIcon from '../icons/spinner-icon.png';
import { loadingStyle, productsContainer, productsGridStyle } from './product.styles';

const products = [
  {
    title: 'Modern',
    price: '200',
    image: '',
  },
  {
    title: 'Age Management',
    price: '200',
    image: '',
  },
  {
    title: 'Classic Maintenance',
    price: '200',
    image: '',
  },
];

const loading = false;

const Products = () => {
  return (
    <div className={productsContainer}>
      {loading && (
        <div className={loadingStyle}>
          <img src={spinnerIcon} alt="spinner loading" />
        </div>
      )}
      <div className={productsGridStyle}>
        {!loading && products.map((item, index) => <ProductItem key={index} {...item} />)}
      </div>
    </div>
  );
};

export default Products;
