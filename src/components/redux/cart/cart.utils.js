export const addItemToCart = (existingCartItems, newCartItem) => {
  const exists = existingCartItems.find(
    existingCartItems => existingCartItems.id === newCartItem.id
  );

  if (exists) {
    return existingCartItems.map(existingCartItem =>
      existingCartItem.id === newCartItem.id
        ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
        : { ...existingCartItem }
    );
  }
  return [...existingCartItems, { ...newCartItem, quantity: 1 }];
};

export const clearItemFromCart = (existingCartItem, cartItemToBeCleared)=>{
  return existingCartItem.filter(cartItem => cartItem.id !== cartItemToBeCleared.id)
}

export const reduceItemFromCart =(existingCartItem, cartItemToBeReduced)=>{
  if(cartItemToBeReduced.quantity>1){ 
   return existingCartItem.map(CartItem =>
    CartItem.id === cartItemToBeReduced.id
      ? { ...CartItem, quantity: CartItem.quantity - 1 }
      : { ...CartItem }
  );
   }
  
  return clearItemFromCart(existingCartItem,cartItemToBeReduced);
}
