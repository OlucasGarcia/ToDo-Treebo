import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PagesList from './pages/List/List';
import PagesAddTaks from './pages/AddTask/AddTask';
import Home from './pages/Home/Home';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "list",
        element: <PagesList/>
      },
      {
        path: "add-task",
        element: <PagesAddTaks/>
      },
      {
        path: "edit-task/:id",
        element: <PagesAddTaks/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
