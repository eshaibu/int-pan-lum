import React from 'react';
import { useQuery } from '@apollo/client';
import ProductItem from './product-item';
import spinnerIcon from '../../icons/spinner-icon.png';
import { loadingStyle, productsContainer, productsGridStyle } from './product.styles';
import { Currency, GetProductsQuery, ProductsProp, ProductVarProp } from '../../graph';

const Products = () => {
  const { error, loading, data } = useQuery<ProductsProp, ProductVarProp>(GetProductsQuery, {
    variables: {
      currency: Currency.Usd,
    },
    fetchPolicy: 'cache-and-network',
  });

  return (
    <div className={productsContainer}>
      {loading && (
        <div className={loadingStyle}>
          <img src={spinnerIcon} alt="spinner loading" />
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
