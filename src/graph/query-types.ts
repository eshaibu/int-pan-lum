export type ProductData = {
  __typename?: 'Product';
  id: number;
  title: string;
  image_url: string;
  price: number;
};

export type ProductsType = {
  products: ProductData[];
};

export type ProductVarType = {
  currency: string;
};

export type CurrencyType = {
  currency: string[];
};
