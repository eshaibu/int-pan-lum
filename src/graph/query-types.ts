export type ProductData = {
  __typename?: 'Product';
  id: number;
  title: string;
  image_url: string;
  price: number;
};

export type ProductsProp = {
  products: ProductData[];
};

export type ProductVarProp = {
  currency: string;
};

export type CurrencyProp = {
  currency: string[];
};
