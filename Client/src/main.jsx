import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ProductProvider } from './componet/AllProduct/Productcontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="589270247261-c806l64b5n34jvf07763a95bm5qrri8e.apps.googleusercontent.com">
      <ProductProvider>
        <App />
      </ProductProvider>
    </GoogleOAuthProvider>
  </Provider>
);
