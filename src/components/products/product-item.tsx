import React from 'react';
import { productButtonStyle, productCardStyle } from './product.styles';
import { ProductData } from '../../graph';

type Props = {
  product: ProductData;
};

const ProductItem = ({ product }: Props) => {
  const { title, price, image_url: imageUrl } = product;
  return (
    <div className={productCardStyle}>
      <img src={imageUrl || 'https://via.placeholder.com/220X170'} alt={`product-${title}`} />
      <span className="product-title">{title}</span>
      <span className="product-price">From ${price}</span>
      <button type="button" className={productButtonStyle} onClick={() => null}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
