import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { createBrowserRouter, json, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';

import AngularTech from './pages/AngularTech.jsx';
import ReactTech from './pages/ReactTech.jsx';
import Vue from './pages/Vue.jsx';
import Home from './pages/Home.jsx';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';

const HOME = lazy(() => import('./pages/Home.jsx'));

// Create router path

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    // element: <Landing />,
    element: <App />,
  },
  {
    path: '/home',
    element: (
      <Suspense
        fallback={
          <div className='text-5xl text-yellow-500'>
            Loading App...... <ProgressSpinner />
          </div>
        }
      >
        <HOME />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${params.vueId}`
          );
          if (!response.ok) {
            return { status: false };
          }
          const data = await response.json();
          return { ...data, status: true };
        },
        element: <Vue />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.Fragment>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
