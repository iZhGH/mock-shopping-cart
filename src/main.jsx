import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './components/HomePage.jsx'
import NavBar from './components/NavBar.jsx'
import ShoppingPage from './components/ShoppingPage.jsx'





const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,

  },

  {
    path: "shoppingpage",
    element: <ShoppingPage/>,

  }





])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
