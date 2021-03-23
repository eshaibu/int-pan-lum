import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useApolloClient } from '@apollo/client';
import { cartItemStyle, productDescription, productImage, qtyCounterWrapper } from './cart.styles';
import { XIcon } from '../icons';
import { CartItemType } from '../../utils/cart';
import { GET_PRODUCT_FRAGMENT, ProductData } from '../../graph';
import { useCartContext } from '../../contexts';

type Props = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: Props) => {
  const { productId, quantity } = cartItem;
  const client = useApolloClient();
  const { cartCurrency: currency, removeItem, updateItemQty } = useCartContext();

  const product = client.readFragment<ProductData>({
    id: `Product:${productId}`, // The value of the product item's unique identifier
    variables: { currency },
    fragment: GET_PRODUCT_FRAGMENT,
  });

  return (
    <div className={cartItemStyle}>
      <div className="remove-icon">
        {' '}
        <XIcon onClick={() => removeItem(productId)} />
      </div>
      <div className={productDescription}>
        <span className="product-title">{product?.title}</span>
        <div className={qtyCounterWrapper}>
          <div className="qty-selector">
            <button
              type="button"
              onClick={() => updateItemQty(productId, 'DECREMENT')}
              disabled={quantity < 1}
            >
              {quantity > 0 && '-'}
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => updateItemQty(productId, 'INCREMENT')}>
              +
            </button>
          </div>
          <span className="product-price">
            {getSymbolFromCurrency(currency) || `${currency} `}
            {product?.price ? quantity * product.price : '-'}
          </span>
        </div>
      </div>
      <div className={productImage}>
        <img src={product?.image_url ?? 'https://via.placeholder.com/220X170'} alt="product" />
      </div>
    </div>
  );
};

export default CartItem;
