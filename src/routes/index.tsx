import React from "react";
import PathConstants from "./pathConstants";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Person from "../pages/Person";
import Cast from "../pages/Cast";

// const Home = React.lazy(() => import("../pages/Home.tsx"));
// const About = React.lazy(() => import("../pages/About"));
// const Products = React.lazy(() => import("../pages/Products"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.DETAILS, element: <Details /> },
  { path: PathConstants.PERSON, element: <Person /> },
  { path: PathConstants.CAST, element: <Cast /> },
  // { path: PathConstants.ABOUT, element: <About /> },
];

export default routes;
