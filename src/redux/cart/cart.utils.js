export const addItemToCart = (cartItems, carItemToAdd) =>{
    const exisitingCartItem = cartItems.find(
        cartItem =>cartItem.id === carItemToAdd.id);
    if(exisitingCartItem){
        return cartItems.map(cartItem => cartItem.id === carItemToAdd.id 
            ? {...cartItem,quantity:cartItem.quantity+1} 
            : cartItem);
    }   
    return [...cartItems, {...carItemToAdd, quantity:  1}] 
}