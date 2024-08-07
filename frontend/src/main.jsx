import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Home } from './pages/Home/home.jsx';

import { Header } from './components/Header/header.jsx';
import { Footer } from './components/Footer/footer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404 not found</h1>

  },
  {
    path: "/apartement",
    element: <h1>Mes appartements</h1>
  },

  {
    path: "/about",
    element: <h1>A propos</h1>
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <RouterProvider router={router} />

    <Footer />
  </React.StrictMode>,
)
