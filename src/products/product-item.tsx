import React from 'react';
import { productButtonStyle, productCardStyle } from './product.styles';

type Props = {
  title: string;
  price: string;
  image: string;
};

const ProductItem = (props: Props) => {
  const { title, price, image } = props;
  return (
    <div className={productCardStyle}>
      <img src={image || 'https://via.placeholder.com/220X170'} alt={`product-${title}`} />
      <span className="product-title">{title}</span>
      <span className="product-price">From ${price}</span>
      <button type="button" className={productButtonStyle} onClick={() => null}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
