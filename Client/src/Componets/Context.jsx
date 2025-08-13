import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext(null);

const BASE_URL = 'https://dhaneri-backend.vercel.app';
const STORE_ID = '6874da6ef34b88733c0b452c';

// http://192.168.29.199:5050

// https://dhaneri-backend.vercel.app

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index <= 300; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };
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
  const [cartItem, setCartItem] = useState(getInitialCart);
  const [wishItem, setwishItem] = useState(getInitialwish);
  const [token, setToken] = useState(localStorage.getItem("access_token") || "");

  // for all product
  useEffect(() => {
    fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/products?page=1&limit=12&sort=created_at&order=desc`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data.products);
        // console.log("Fetched Products: ", data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });

    if (localStorage.getItem('access_token')) {
      fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/cart`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const items = data.data?.cart?.items || [];
          const newCart = {};
          items.forEach((item) => {
            const productId = item.product_id._id;
            const quantity = item.quantity;
            newCart[productId] = quantity;
          });
          setCartItem(newCart);
          console.log("cart fetch", data.data.cart.items);

        })

      // get wishlist
      fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/wishlist`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        // body: "",
      }).then((response) => response.json())
        .then((data) => {
          const items = data.data?.wishlist || [];
          const newwish = {};
          items.forEach((item) => {
            const productId = item.product_id._id;
            const quantity = item.quantity;
            newwish[productId] = quantity;
          });
          setwishItem(newwish);

          console.log("wish fetch", data);

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


  const addTocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }
    ));

    const token = localStorage.getItem('access_token');
    if (token) {
      // console.log("Token", token);
      fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/cart/add`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: itemId,
          quantity: 1,
          variant_id: null,
          // session_id: "azxdcgvb"
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Add To cart", data))
        .catch((err) => console.error("Error adding to cart", err));
    }
  };


  const update = async (productId) => {
    const newQuantity = cartItem[productId] - 1;

    if (newQuantity > 0) {
      setCartItem((prev) => ({
        ...prev,
        [productId]: newQuantity,
      }));

      if (localStorage.getItem('access_token')) {
        try {
          const response = await fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/cart/update`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              // 'access_token': localStorage.getItem('access_token'),
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_id: productId, quantity: newQuantity }),
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

  const remove = async (productId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[productId];
      return updatedCart;
    });

    if (localStorage.getItem('access_token')) {
      try {
        const response = await fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/cart/remove`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "product_id": productId }),
        });
        const data = await response.json();
        console.log("Item delete:", data);
      } catch (error) {
        console.error('not delete', error);
      }
    }
  };

  // clearcart
  const clearcart = async () => {
    setCartItem({});
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const response = await fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/cart/clear`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });

        const data = await response.json();
        console.log("Cart cleared:", data);
      } catch (error) {
        console.error('Failed to clear cart:', error);
      }
    }
  };

  // wishlist
  // Add to Wishlist
  const addwishlist = (productId) => {
    setwishItem((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));

    const token = localStorage.getItem('access_token');

    if (token) {
      fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/wishlist/add`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Wishlist added:", data))
        .catch((err) => console.error("Wishlist error:", err));
    }
  };


  // removewishlist
  const removeFromWishlist = async (itemId) => {
    setwishItem((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });

    if (localStorage.getItem('access_token')) {
      try {
        const response = await fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/wishlist/remove`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            // 'access_token': ${localStorage.getItem('access_token')},
            'Authorization': `Bearer ${token}`,
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

    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const response = await fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/wishlist/clear`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            // 'access_token': ${localStorage.getItem('access_token')},
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
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
    wishItem,
    setProducts,
    addTocart,
    // removeTocart,
    clearcart,
    remove,
    addwishlist,
    removeFromWishlist,
    clearwishlist,
    update,
    BASE_URL,
    STORE_ID,

  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;