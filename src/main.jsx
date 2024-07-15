import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layouts/App.jsx'
import './assets_&_styles/index.css'

import { createBrowserRouter, RouterProvider}from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Signup from './pages/Signin.jsx'
import Signin from './pages/Signin.jsx'
  const router = createBrowserRouter([{
    path: "/",
    element: <Home />
  },
  {
    path: "NotFound",
    element: <NotFound />
  },
  {
    path: "Signin",
    element: <Signin />
  }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
