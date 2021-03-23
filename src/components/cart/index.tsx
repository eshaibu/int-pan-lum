import React from 'react';
import { useApolloClient, useQuery } from '@apollo/client';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useCartContext, useModalContext } from '../../contexts';
import {
  cartBody,
  cartBox,
  cartFooter,
  cartHeader,
  cartSubtotal,
  currencySelect,
  modalBackdrop,
} from './cart.styles';
import { CurrencyType, GET_CURRENCY, GET_PRODUCTS, ProductsType } from '../../graph';
import { RightArrowIcon } from '../icons';
import CartItem from './cart-item';

const Cart = ({ productsLoading }: { productsLoading: boolean }) => {
  const { toggleVisibility } = useModalContext();
  const { cartCurrency, cartItems, setCurrency } = useCartContext();
  const client = useApolloClient();

  const currencyQuery = useQuery<CurrencyType>(GET_CURRENCY);
  const cacheProductsQuery = client.readQuery<ProductsType>({
    query: GET_PRODUCTS,
    variables: { currency: cartCurrency },
  });

  const cartProductIds = cartItems.map((item) => item.productId);
  const cartProducts = cacheProductsQuery?.products.filter((product) =>
    cartProductIds.includes(product.id)
  );
  // console.log(cartProducts, 'cartProducts', cartProductIds);

  const currencies = currencyQuery.data?.currency ?? [];
  const loading = productsLoading || currencyQuery.loading;
  const totalPrice =
    cartProducts?.reduce((acc, cur) => {
      const productQty = cartItems.find((item) => item.productId === cur.id)?.quantity ?? 1;
      const price = productQty ? cur.price * productQty : 0;
      return acc + price;
    }, 0) ?? '';

  const handleCurrencySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCurrency(value);
  };

  return (
    <div className={modalBackdrop}>
      <div className={cartBox}>
        <div className={cartHeader}>
          <button onClick={toggleVisibility} type="button">
            <RightArrowIcon />
          </button>
          <span>YOUR CART</span>
        </div>
        {!currencyQuery.loading && cartItems.length > 0 && (
          <div className={currencySelect}>
            <select name="currency" value={cartCurrency} onChange={handleCurrencySelect}>
              {currencies.map((currency, index) => (
                <option key={index}>{currency}</option>
              ))}
            </select>
          </div>
        )}
        <div className={cartBody}>
          {cartItems.length === 0 && <div className="empty-cart">Cart Empty</div>}
          {!loading &&
            cartProducts?.map((cartProduct) => {
              const productQty = cartItems.find((item) => item.productId === cartProduct.id)
                ?.quantity;
              return productQty ? (
                <CartItem key={cartProduct.id} cartProduct={cartProduct} productQty={productQty} />
              ) : null;
            })}
        </div>
        <div className={cartFooter}>
          <div className={cartSubtotal}>
            {!loading && (
              <>
                <span>Subtotal</span>
                <span>
                  {getSymbolFromCurrency(cartCurrency) || `${cartCurrency} `}
                  {totalPrice}
                </span>
              </>
            )}
          </div>
          <button type="button" disabled={cartItems.length === 0}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
