import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Book from "./user/userPages/book/book";
import Synopsis from "./user/userPages/synopsis/Synopsis";
import ErrorPage from './route/error/ErrorPage';
import Library from './user/userPages/library/library';
import BookShelf from './user/userPages/bookshelf/bookshelf';

import Login from './route/login/login';
import Relatorio from './admin/adminRoutes/relatorio';
import Escola from './admin/adminRoutes/escola';
import Ajuda from './admin/adminRoutes/ajuda';
import Catalogo from './admin/adminRoutes/catalogo';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Login />,  // Esta é a rota exclusiva de login
    errorElement: <ErrorPage />,
  },
  {
    path: "/Bookshelf",
    element: <BookShelf /> // Rota exclusiva para Bookshelf
  },
  {
    path: "/Book",
    element: <Book /> // Rota para Books
  },
  {
    path: "/Synopsis",
    element: <Synopsis /> // Rota para Synopsis
  },
  {
    path: "/Library",
    element: <Library /> // Rota para Library
  },
  {
    path: "/Ajuda",
    element: <Ajuda/> // Rota para Synopsis
  },
  {
    path: "/Escola",
    element: <Escola /> // Rota para Synopsis
  },
  {
    path: "/Relatorio",
    element: <Relatorio /> // Rota para Synopsis
  },
  {
    path: "/Catalogo",
    element: <Catalogo /> // Rota para Synopsis
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);


