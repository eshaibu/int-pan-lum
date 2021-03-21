import { gql } from '@apollo/client';

export const GetProductsQuery = gql`
  query Products($currency: Currency) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;
export const GetCurrencyQuery = gql`
  query {
    currency
  }
`;
