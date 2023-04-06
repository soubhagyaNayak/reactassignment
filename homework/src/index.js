import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import Home from './components/home';
import About from './components/about';
import ContactUs from './components/contactUs';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />

      },
      {
        path: '/contactUs',
        element: <ContactUs />
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);