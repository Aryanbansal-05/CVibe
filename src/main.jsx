import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App3 from './App3.jsx'
import App2 from './App2.jsx'
import App from './App.jsx'

import {RouterProvider } from 'react-router'
import { Navbar } from './navbar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <App3 />
     
  </StrictMode>,
)
