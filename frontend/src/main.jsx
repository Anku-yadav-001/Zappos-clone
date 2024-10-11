import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {Auth0Provider} from "@auth0/auth0-react"

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Auth0Provider
    domain="dev-6j2ly62gxlhdrx1r.us.auth0.com"
    clientId="m4G8U6ER9CinjMTaT7Ad2jbDr5ltxpEO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
 </BrowserRouter>
)
