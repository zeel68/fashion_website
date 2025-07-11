import React, { createContext, useContext } from 'react';
import products from './allproducts';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

// export const useProduct = () => useContext(ProductContext);
