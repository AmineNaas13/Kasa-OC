import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Home } from './pages/Home/home.jsx';
import { About } from './pages/About/about.jsx';
import { Error } from './pages/Error/error.jsx';
import { Apartment } from './pages/Apartment/apartment.jsx';

import { Header } from './components/Header/header.jsx';
import { Footer } from './components/Footer/footer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,

  },
  {
    path: "/apartment/:id",
    element: <Apartment />,
  },

  {
    path: "/about",
    element: <About />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <RouterProvider router={router} />

    <Footer />

  </React.StrictMode>,
)
