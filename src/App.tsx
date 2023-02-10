import React from 'react';
import { Home } from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyles from './style/global';
import { ShoppingCart } from './pages/ShoppingCart';
import { PurchaseMade } from './pages/PurchaseMade';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'carrinho',
      element: <ShoppingCart />
    },
    {
      path: 'compra_realizada',
      element: <PurchaseMade />
    },
  ])

  return (
    <div>
      <GlobalStyles/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
