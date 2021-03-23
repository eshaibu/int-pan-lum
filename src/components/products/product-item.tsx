import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useCartContext, useModalContext } from '../../contexts';
import { productButtonStyle, productCardStyle } from './product.styles';
import { ProductData } from '../../graph';

type Props = {
  product: ProductData;
};

const ProductItem = ({ product }: Props) => {
  const { id, image_url: imageUrl, price, title } = product;
  const { toggleVisibility } = useModalContext();
  const { addItem, cartCurrency } = useCartContext();

  const addToCart = () => {
    addItem(id);
    toggleVisibility();
  };

  return (
    <div className={productCardStyle}>
      <img src={imageUrl || 'https://via.placeholder.com/220X170'} alt={`product-${title}`} />
      <span className="product-title">{title}</span>
      <span className="product-price">
        From {getSymbolFromCurrency(cartCurrency) || `${cartCurrency} `}
        {price}
      </span>
      <button type="button" className={productButtonStyle} onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
