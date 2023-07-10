import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Course from './Pages/Course/Course/Course';
import Cart from './Pages/Cart/Cart';
import Gdpr from './Pages/FooterMenu/GDPR/Gdpr';
import Privacy from './Pages/FooterMenu/Privacy/Privacy';
import RefundPolicy from './Pages/FooterMenu/RefundPolicy/RefundPolicy';
import TermsCondition from './Pages/FooterMenu/TermsCondition/TermsCondition';
import Register from './Pages/Register/Register';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'course/:id',
        element: <Course></Course>,
      },
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },

      // Footer
      {
        path: 'gdpr',
        element: <Gdpr></Gdpr>,
      },
      {
        path: 'terms-condition',
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: 'privacy-policy',
        element: <Privacy></Privacy>,
      },
      {
        path: 'refund-policy',
        element: <RefundPolicy></RefundPolicy>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
