import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { cartItemStyle, productDescription, productImage, qtyCounterWrapper } from './cart.styles';
import { XIcon } from '../icons';
import { ProductData } from '../../graph';
import { useCartContext } from '../../contexts';

type Props = {
  cartProduct: ProductData;
  productQty: number;
};

const CartItem = ({ cartProduct, productQty }: Props) => {
  const { id: productId } = cartProduct;
  const { cartCurrency: currency, removeItem, updateItemQty } = useCartContext();

  const decrementQty = (id: number) => {
    if (productQty > 1) {
      updateItemQty(id, 'DECREMENT');
    } else {
      removeItem(id);
    }
  };

  return (
    <div className={cartItemStyle}>
      <div className="remove-icon">
        {' '}
        <XIcon onClick={() => removeItem(productId)} />
      </div>
      <div className={productDescription}>
        <span className="product-title">{cartProduct.title}</span>
        <div className={qtyCounterWrapper}>
          <div className="qty-selector">
            <button type="button" onClick={() => decrementQty(productId)}>
              -
            </button>
            <span>{productQty}</span>
            <button type="button" onClick={() => updateItemQty(productId, 'INCREMENT')}>
              +
            </button>
          </div>
          <span className="product-price">
            {getSymbolFromCurrency(currency) || `${currency} `}
            {cartProduct.price ? productQty * cartProduct.price : '-'}
          </span>
        </div>
      </div>
      <div className={productImage}>
        <img src={cartProduct.image_url ?? 'https://via.placeholder.com/220X170'} alt="product" />
      </div>
    </div>
  );
};

export default CartItem;
