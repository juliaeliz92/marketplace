import { createSlice } from '@reduxjs/toolkit';
import products from '../../product-list-data.json';

const initialState = {
  products,
  displayProducts: products.map(product => ({
    id: product['sku#'],
    name: product.name, 
    description: product.description,
    price: product.price,
    quantity: 0
  })),
  cart: []
};

//function to add to and remove from the cart. Also updates the product list
const modifyCart = (state, productId, action) => {
  let selectedProduct = state.cart.find(product => product['id'] === productId);
  if(!selectedProduct) {
    let product = state.products.find(product => product['sku#'] === productId);
    state.cart.push({
      id: product['sku#'],
      name: product.name,
      price: product.price,
      quantity: 1,
      totalAmount: product.price
    });
  } else {
    state.cart = handleProductQuantity(state.cart, productId, action)
      .filter(product => product.quantity > 0);
  }
  state.displayProducts = handleProductQuantity(state.displayProducts, productId, action);
}

const handleProductQuantity = (handleProducts, productId, action) => {
  return handleProducts.map(product => {
    if(product.id === productId) {
      if(action === "Add") {
        product.quantity += 1;
      }
      else {
        product.quantity -= 1;
      }
      if(product.totalAmount) {
        product.totalAmount = product.price * product.quantity;
      }
    }
    return product;
  })
}


//setting up reducer for adding to and removing from cart and searching for product from the list
export const counterSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      modifyCart(state, action.payload, "Add");
    },
    removeProduct: (state, action) => {
      modifyCart(state, action.payload, "Remove");
    },
    searchProduct: (state, action) => {
      let searchKey = action.payload;
      if(searchKey === "") {
        state.displayProducts = state.products;
      } else {
        state.displayProducts = state.products.filter(product => product.name.includes(searchKey));
      }
    }
  }
});

//setting up actions to dispatch from components
export const { addProduct, removeProduct, searchProduct } = counterSlice.actions;


//functions to pass data from state container to components to access
export const getCart = (state) => state.shoppingCart.cart;

export const getCartCount = (state) => state.shoppingCart.cart.length;

export const getDisplayProducts = (state) => state.shoppingCart.displayProducts;

export const getPriceBreakdown = (state) => {
  let totalPrice = state.shoppingCart.cart.reduce((total, product) => total + product.totalAmount, 0);
  let hst = (totalPrice * 0.13).toFixed(2);
  let totalPayableAmount = Number(totalPrice) + Number(hst);
  return { totalPrice, hst, totalPayableAmount };
};

export default counterSlice.reducer;
