import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </StrictMode>,
)
