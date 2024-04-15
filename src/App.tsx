import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import routes from "./routes";
import { HTTP_METHOD, URL } from "./utilities/constants";
import useHttpClient from "./hooks/useHttpClient";
import { useData } from "./utilities/DataContext";
import Fallback from "./components/skeletons/Fallback";

export default function App() {
  const [config, setConfig] = useState(null);
  const {
    data,
    error,
    isLoading,
  }: { data: any; error: any; isLoading: boolean } = useHttpClient(
    URL.getConfig,
    HTTP_METHOD.GET
  );

  const { setData } = useData();
  useEffect(() => setData({ ...data, isLoading }), [data, isLoading]);

  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <NotFound />,
      children: routes,
    },
  ]);

  return isLoading ? <Fallback /> : <RouterProvider router={router} />;
}
