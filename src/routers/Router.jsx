import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AllOrders from "../pages/orders/AllOrders.jsx";
import SingleOrders from "../pages/orders/SingleOrders.jsx";
import SuccessPage from "../pages/orders/SuccessPage.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import CreateOrder from "../pages/orders/CreateOrder.jsx";
import EditOrder from "../pages/orders/EditOrder.jsx";
import { Providers } from "../Redux/providers.jsx";
import ErrorPage from "../pages/shared/ErrorPage.jsx";
import EditOrder2 from "../pages/orders/EditOrder2.jsx";
import SingleOrders2 from "../pages/orders/SingleOrders2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/createOrder",
      //   element: <CreateOrder></CreateOrder>,
      // },

      // {
      //   path: "/orders",
      //   element: <AllOrders></AllOrders>,
      // },
      // {
      //   path: "/orders/:id",
      //   element: <SingleOrders></SingleOrders>,
      // },
    ],
  },
  // {
  //   path: "/orders",
  //   element: <AllOrders></AllOrders>,
  // },
  {
    path: "/createOrder",
    element: (
      <Providers>
        <CreateOrder></CreateOrder>
      </Providers>
    ),
  },
  {
    path: "/editOrder/:id",
    element: (
      <Providers>
        <PrivateRouter>
          <EditOrder></EditOrder>
        </PrivateRouter>
      </Providers>
    ),
  },

  {
    path: "/orders",
    element: (
      <PrivateRouter>
        <AllOrders></AllOrders>
      </PrivateRouter>
    ),
  },
  {
    path: "/success/:id",
    element: <SuccessPage></SuccessPage>,
  },
  {
    path: "/invoice/:id",
    
    element: (
      <PrivateRouter>
        <SingleOrders></SingleOrders>
      </PrivateRouter>
    ),
  },
]);

export default router;
