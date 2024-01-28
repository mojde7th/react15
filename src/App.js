import { useState } from "react";
import Navbar from "./components/navbar";
import { ProductsPage } from "./pages/products";
import Products from "./pages/products";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorMoj from "./pages/ErrorMoj";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <div className="w-[100%] relative">
          <Navbar />
          <Outlet />
        </div>
      ),
      path: "/",
      //errorElement: <ErrorMoj />,
      children: [
        {
          element: <ErrorMoj />,
          path: "*",
        },
        {
          element: <ProductsPage />,
          path: "react15/products",
        },
        {
          element: <div className="m-4 text-[17px] font-bold">Home Page</div>,
          path: "react15/Home",
        },
        {
          element: <div></div>,
          path: "react15",
        },
        {
          element: <div className="m-4 text-[17px] font-bold">About</div>,
          path: "react15/about",
        },

        {
          element: (
            <div>
              <Outlet />
            </div>
          ),
          path: "/react15/products/:productId",
          children: [
            {
              element: <ProductDetail />,
              path: "/react15/products/:productId",
            },
            {
              element: <div>Error inside Products URL </div>,
              path: "*",
            },
          ],
        },

        ,
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
