import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Home } from './pages/Home/home.jsx';
import { About } from './pages/About/about.jsx';
import { Error } from './pages/Error/error.jsx';
import { Apartment } from './pages/Apartment/apartment.jsx';
import { Layout } from './components/Layout/layout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment/:id",
        element: <Apartment />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)