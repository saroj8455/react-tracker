import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';

import AngularTech from './pages/AngularTech.jsx';
import ReactTech from './pages/ReactTech.jsx';
import Vue from './pages/Vue.jsx';

// Create router path

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    // element: <Landing />,
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: 'angular',
        element: <AngularTech />,
      },
      {
        path: 'react',
        element: <ReactTech />,
      },
      {
        path: 'vue/:vueId',
        element: <Vue />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
