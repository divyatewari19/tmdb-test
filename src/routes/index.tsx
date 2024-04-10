import React from "react";
import PathConstants from "./pathConstants";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";

// const Home = React.lazy(() => import("../pages/Home.tsx"));
// const About = React.lazy(() => import("../pages/About"));
// const Products = React.lazy(() => import("../pages/Products"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.PRODUCTS, element: <Products /> },
  { path: PathConstants.ABOUT, element: <About /> },
];

export default routes;
