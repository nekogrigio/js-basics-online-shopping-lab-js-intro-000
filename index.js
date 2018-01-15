var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1;
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    return 'Your shopping cart is empty.'
  } else {
    let newCart = [];
    for (i = 0; i < cart.length; i++) {
      let price = Object.keys(cart[i]);
      for (var price in cart[i]) {
        newCart.push(`${Object.keys(cart[i])} at $${cart[i][price]}`)
      }
    }
    return console.log("In your cart, you have " + newCart.join(", ") + ".");
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
