import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useCartContext, useModalContext } from '../../contexts';
import { loadingStyle, productsContainer, productsGridStyle } from './product.styles';
import { GET_PRODUCTS, ProductsType, ProductVarType } from '../../graph';
import { defaultCurrency } from '../../utils/cart';
import ProductItem from './product-item';
import { SpinnerIcon } from '../icons';
import Cart from '../cart';

const Products = () => {
  const { visible } = useModalContext();
  const { cartCurrency, setCurrency } = useCartContext();

  const [getProducts, { error, loading, data }] = useLazyQuery<ProductsType, ProductVarType>(
    GET_PRODUCTS
  );

  useEffect(() => {
    if (cartCurrency) {
      getProducts({ variables: { currency: cartCurrency } });
    } else {
      setCurrency(defaultCurrency);
    }
  }, [cartCurrency, setCurrency, getProducts]);

  return (
    <>
      <div className={productsContainer}>
        {loading && (
          <div className={loadingStyle}>
            <SpinnerIcon />
          </div>
        )}
        {error && <div>{error.message}</div>}
        <div className={productsGridStyle}>
          {!loading && data?.products.map((item) => <ProductItem key={item.id} product={item} />)}
        </div>
      </div>
      {visible && <Cart productsLoading={loading} />}
    </>
  );
};

export default Products;
