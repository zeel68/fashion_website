
import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext(null);



// https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api
// store Id:- 6874da6ef34b88733c0b452c


// Default empty cart for 300 items
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};
const getInitialCart = () => {
  const storedCart = localStorage.getItem('cartItem');
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  const cart = {};
  Products.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState(getInitialCart, getDefaultCart);
  const [wishItem, setwishItem] = useState({});

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // for all product

  useEffect(() => {
    // fetch('http://localhost:4040/allproduct')
    fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/products?page=1&limit=12&sort=created_at&order=desc')

      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data.products);
        console.log("Fetched Products: ", data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });

    if (localStorage.getItem('auth-token')) {

      // fetch('http://localhost:4040/getcart', {
      fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/cart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      }).then((response) => response.json())
        .then((data) => setCartItem(data));


      // get wishlist
      fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/wishlist', {
        method: 'GET',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      }).then((response) => response.json())
        .then((data) => {
          console.log("Wishlist:", data);
          setwishItem(data || []);
        })
        .catch((err) => console.error("Failed to fetch wishlist:", err));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);
  useEffect(() => {
    localStorage.setItem('wishItem', JSON.stringify(wishItem));
  }, [wishItem]);

  // add to cart
  const addTocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if (localStorage.getItem('auth-token')) {
      // fetch('http://localhost:4040/addtocart', {
      fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/cart/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("getcartdata", data));
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
        const response = await fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452/cart/remove', {
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

  const clearcart = async (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });


    if (localStorage.getItem('auth-token')) {
      try {
        const response = await fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/cart/delete', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "itemId": itemId }),
        });
        const data = await response.json();
        console.log("Item delete:", data);
      } catch (error) {
        console.error('not delete', error);
      }
    }
  };


  // wishlist

  // Add to Wishlist



  const addwishlist = (itemId) => {
    setwishItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if (localStorage.getItem('auth-token')) {
      fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/wishlist/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Wishlist added:", data));
    }
  };

  // RemoveWishlist
  const removeFromWishlist = (itemId) => {
    setwishItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
    if (localStorage.getItem('auth-token')) {
      fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/wishlist/remove', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Wishlist removed:", data));
    }
  };

  // wishlistclear
  const clearwishlist = async (itemId) => {
    setwishItem((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });

    if (localStorage.getItem('auth-token')) {
      try {
        const response = await fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/wishlist/clear', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "itemId": itemId }),
        });
        const data = await response.json();
        console.log("Item delete:", data);
      } catch (error) {
        console.error('not delete', error);
      }
    }
  };




  const contextValue = {
    products,
    cartItem,
    setProducts,
    addTocart,
    removeTocart,
    clearcart,
    addwishlist,
    removeFromWishlist,
    clearwishlist,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
