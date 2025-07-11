import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext(null);

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


  // Fetch product data from backend
  useEffect(() => {
    fetch('http://localhost:4040/allproduct')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("Fetched Products: ", data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4040/getcart', {
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

  }, []);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);

  const addTocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4040/addtocart', {
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

  const removeTocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4040/removefromcart', {
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
