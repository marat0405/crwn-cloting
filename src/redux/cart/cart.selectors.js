import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHiddden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => cartItem.price + cartItem.quantity,
    0
  )
);
