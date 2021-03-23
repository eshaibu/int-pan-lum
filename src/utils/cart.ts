export type CartItemType = {
  productId: number;
  quantity: number;
};

export type CartType = {
  currency: string;
  items: CartItemType[];
};

export type UpdateCartType = 'INCREMENT' | 'DECREMENT';

const cartName = 'luminCart';
export const defaultCurrency = 'USD';

export const defaultCart = {
  currency: '',
  items: [],
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
    const currentItem = cart.items.find((cartItem) => cartItem.productId === data.productId);
    const updatedCartItems = !currentItem
      ? [...cart.items, data]
      : cart.items.map((item) => {
          if (item.productId === data.productId) {
            const updateItem = { ...item };
            updateItem.quantity += 1;
            return updateItem;
          }
          return item;
        });
    const updatedCart = JSON.stringify({ ...cart, items: updatedCartItems });
    localStorage.setItem(cartName, updatedCart);
  } catch {
    // do nothing
  }
};

export const updateCartItemQty = (productId: number, type: UpdateCartType) => {
  try {
    const cart = getCartStorage();
    const updatedCartItems = cart.items.map((item) => {
      if (item.productId === productId) {
        const updateItem = { ...item };
        if (type === 'INCREMENT') {
          updateItem.quantity += 1;
        } else if (type === 'DECREMENT') {
          updateItem.quantity -= 1;
        }
        return updateItem;
      }
      return item;
    });
    const updatedCart = JSON.stringify({ ...cart, items: updatedCartItems });
    localStorage.setItem(cartName, updatedCart);
  } catch {
    // do nothing
  }
};

export const removeCartItem = (productId: number) => {
  try {
    const cart = getCartStorage();
    const filteredCart = cart.items?.filter((item) => item.productId !== productId);
    const updatedCart = JSON.stringify({ ...cart, items: filteredCart });
    localStorage.setItem(cartName, updatedCart);
  } catch {
    // do nothing
  }
};
