import cartReducer, {
  addProduct,
  removeProduct,
  searchProduct
} from './cartSlice';
import products from '../../product-list-data.json';

describe('counter reducer', () => {
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
  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle increment', () => {
    const actual = cartReducer(initialState, addProduct(1));
    expect(actual.cart).toEqual([{
      id: 1,
      name: "apple",
      price: 1.99,
      quantity: 1,
      totalAmount: 1.99
    }]);
  });

  it('should handle decrement', () => {
    const stateAfterAddingProduct = {
      products,
      displayProducts: products.map(product => ({
        id: product['sku#'],
        name: product.name, 
        description: product.description,
        price: product.price,
        quantity: 0
      })),
      cart: [{
        id: 1,
        name: "apple", 
        price: 1.99,
        quantity: 1,
        totalAmount: 1.99
      }]
    };
    const actual = cartReducer(stateAfterAddingProduct, removeProduct(1));
    expect(actual.cart).toEqual([]);
  });

  it('should handle product search', () => {
    const actual = cartReducer(initialState, searchProduct("apple"));
    expect(actual.displayProducts).toEqual([
      {
        "sku#": 1,
        "name": "apple",
        "description": "fruit",
        "price": 1.99
      }
    ]);
  });
});
