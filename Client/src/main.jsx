import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './Componets/Context.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="589270247261-c806l64b5n34jvf07763a95bm5qrri8e.apps.googleusercontent.com">
      <ContextProvider>
        <App />
      </ContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
