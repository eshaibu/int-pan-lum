import React from 'react';
import { useQuery } from '@apollo/client';
import ProductItem from './product-item';
import { SpinnerIcon } from '../icons';
import { loadingStyle, productsContainer, productsGridStyle } from './product.styles';
import { Currency, GetProductsQuery, ProductsProp, ProductVarProp } from '../../graph';

const Products = () => {
  const { error, loading, data } = useQuery<ProductsProp, ProductVarProp>(GetProductsQuery, {
    variables: {
      currency: Currency.Usd,
    },
    // fetchPolicy: 'cache-and-network',
  });

  return (
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
  );
};

export default Products;
