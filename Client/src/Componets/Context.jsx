
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

const getInitialwish = () => {
  const storedwish = localStorage.getItem('wishItem');
  if (storedwish) {
    return JSON.parse(storedwish);
  }
  const wish = {};
  Products.forEach(product => {
    wish[product.id] = 0;
  });
  return wish;
};

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState(getInitialCart, getDefaultCart);
  const [wishItem, setwishItem] = useState(getInitialwish, getDefaultCart);

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
        method: 'POST',
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
  // const removeTocart = async (itemId) => {
  //   setCartItem((prev) => ({
  //     ...prev,
  //     [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
  //   }));
  //   if (localStorage.getItem('auth-token')) {
  //     try {
  //       const response = await fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452/cart/remove', {
  //         method: 'POST',
  //         headers: {
  //           Accept: 'application/json',
  //           'auth-token': `${localStorage.getItem('auth-token')}`,
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ "itemId": itemId }),
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Failed to remove from cart', error);
  //     }
  //   }

  // };

  const updatequa = async (itemId) => {
    const newQuantity = cartItem[itemId] - 1;

    if (newQuantity > 0) {
      setCartItem((prev) => ({
        ...prev,
        [itemId]: newQuantity,
      }));

      if (localStorage.getItem('auth-token')) {
        try {
          const response = await fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452/cart/update', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'auth-token': localStorage.getItem('auth-token'),
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ itemId, quantity: newQuantity }),
          });
          const data = await response.json();
          console.log("Quantity updated:", data);
        } catch (error) {
          console.error('Failed to update quantity', error);
        }
      }
    } else {
      remove(itemId);
    }
  };


  // removefrom cart
  const remove = async (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });


    if (localStorage.getItem('auth-token')) {
      try {
        const response = await fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/cart/remove', {
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

  // clearcart
  const clearcart = async (itemId) => {
    setCartItem({});
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


  // removewishlist
  const removeFromWishlist = async (itemId) => {
    setwishItem((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });

    if (localStorage.getItem('auth-token')) {
      try {
        const response = await fetch('https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/wishlist/remove', {
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

  // clearwishlist
  const clearwishlist = async (itemId) => {
    setwishItem({});

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


  // refreshtoken
  const Refreshtoken = async () => {
    const refreshToken = localStorage.getItem("refresh-token");
    if (!refreshToken) return null;

    try {
      const response = await fetch("https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/auth/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ refreshToken })
      });

      const data = await response.json();

      if (data.accessToken) {
        localStorage.setItem("auth-token", data.accessToken);
        return data.accessToken;
      } else {
        console.log("Refresh token invalid or expired");
        return null;
      }
    } catch (error) {
      console.error("Error refreshing token", error);
      return null;
    }
  };

  const contextValue = {
    products,
    cartItem,
    wishItem,
    setProducts,
    addTocart,
    // removeTocart,
    clearcart,
    remove,
    addwishlist,
    removeFromWishlist,
    clearwishlist,
    updatequa,
    Refreshtoken
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
