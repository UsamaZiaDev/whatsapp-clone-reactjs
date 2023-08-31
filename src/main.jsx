import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import { FirebaseProvider } from './core/FirebaseProvider'

import "./../node_modules/bootstrap/dist/css/bootstrap.css"
import "./assets/style/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </FirebaseProvider>
  </React.StrictMode>,
)
