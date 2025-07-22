
import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext(null);



// http://65.1.3.198:5050/api
// store Id:- 6874da6ef34b88733c0b452c


// Default empty cart for 300 items
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart);
  const [token, setToken] = useState(localStorage.getItem("token") || "");


  useEffect(() => {
    // fetch('http://localhost:4040/allproduct')
    fetch('http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/products?page=1&limit=12&sort=created_at&order=desc')

      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data.products);
        console.log("Fetched Products: ", data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });

    if (localStorage.getItem('auth-token')) {

      fetch('http://localhost:4040/getcart', {
        // fetch('http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/cart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      }).then((response) => response.json())
        .then((data) => setCartItem(data));
    }
    // fetchCartProducts()
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);


  // add to cart
  const addTocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    if (localStorage.getItem('auth-token')) {
      // fetch('http://localhost:4040/addtocart', {
      fetch('http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/cart/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      }).then((response) => response.json())


        .then((data) => console.log(data));
    }
  };

  // remove
  const removeTocart = async (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
    if (localStorage.getItem('auth-token')) {
      try {
        const response = await fetch('http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452/cart/remove', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "itemId": itemId }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Failed to remove from cart', error);
      }
    }

  };

  const contextValue = {
    products,
    cartItem,
    setProducts,
    addTocart,
    removeTocart,
  
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
