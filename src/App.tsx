import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import routes from "./routes";
import { HTTP_METHOD, URL } from "./utilities/constants";
import useHttpClient from "./hooks/useHttpClient";
import { useConfigContext } from "./hooks/useConfigContext";
import Fallback from "./components/skeletons/Fallback";

export default function App() {
  const {
    data,
    error,
    isLoading,
  }: { data: any; error: any; isLoading: boolean } = useHttpClient(
    URL.getConfig,
    HTTP_METHOD.GET
  );

  const { setConfig } = useConfigContext();
  useEffect(() => setConfig({ ...data, isLoading }), [data, isLoading]);

  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <NotFound />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;

  // return isLoading ? <Fallback /> : <RouterProvider router={router} />;
}
