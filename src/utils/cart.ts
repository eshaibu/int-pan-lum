export type CartItemType = {
  productId: number;
  quantity: number;
};

export type CartType = {
  currency: string;
  items: { [id: string]: CartItemType };
};

export type UpdateCartType = 'INCREMENT' | 'DECREMENT';

const cartName = 'luminCartState';
export const defaultCurrency = 'USD';

export const defaultCart = {
  currency: '',
  items: {},
};

export const getCartStorage = (): CartType => {
  try {
    const storageCart = localStorage.getItem(cartName) || '';
    const cart = JSON.parse(storageCart);
    return cart as CartType;
  } catch {
    return defaultCart;
  }
};

export const changeCartCurrency = (currency: string) => {
  try {
    const cart = getCartStorage();
    const updatedCart = JSON.stringify({ ...cart, currency });
    localStorage.setItem(cartName, updatedCart);
  } catch {
    // do nothing
  }
};

export const addItemToCart = (data: CartItemType) => {
  try {
    const cart = getCartStorage();
    const currentItem = cart.items[data.productId];
    let updatedCartItems = { ...cart.items };
    if (!currentItem) {
      updatedCartItems = { ...updatedCartItems, [data.productId]: data };
    } else {
      const updatedItem = { ...currentItem, quantity: (currentItem.quantity += 1) };
      updatedCartItems = { ...updatedCartItems, [data.productId]: updatedItem };
    }
    const updatedCart = JSON.stringify({ ...cart, items: updatedCartItems });
    localStorage.setItem(cartName, updatedCart);
  } catch {
    // do nothing
  }
};

export const updateCartItemQty = (productId: number, type: UpdateCartType) => {
  try {
    const cart = getCartStorage();
    const currentItem = cart.items[productId];
    let updatedItem = { ...currentItem };
    if (currentItem && type === 'INCREMENT') {
      updatedItem = { ...currentItem, quantity: (currentItem.quantity += 1) };
    } else if (currentItem && type === 'DECREMENT') {
      updatedItem = { ...currentItem, quantity: (currentItem.quantity -= 1) };
    }
    const updatedCartItems = { ...cart.items, [productId]: updatedItem };
    const updatedCart = JSON.stringify({ ...cart, items: updatedCartItems });
    localStorage.setItem(cartName, updatedCart);
  } catch {
    // do nothing
  }
};

export const removeCartItem = (productId: number) => {
  try {
    const cart = getCartStorage();
    const { [productId]: omit, ...filteredCart } = cart.items;
    const updatedCart = JSON.stringify({ ...cart, items: filteredCart });
    localStorage.setItem(cartName, updatedCart);
  } catch {
    // do nothing
  }
};
