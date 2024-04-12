import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import routes from "./routes";

export default function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <NotFound />,
      // child route components
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}
