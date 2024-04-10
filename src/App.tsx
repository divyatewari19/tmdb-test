import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";
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
      // [{
      //   path: "/",
      //   element: <Home />,
      // },
      // // other pages....
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/products",
      //   element: <Products />,
      // }],
    },
  ]);

  return <RouterProvider router={router} />;
}

// export default function App() {
//     const router = createBrowserRouter([
//         { path: "*", Component: Root },
//       ]);
//   return (
//     <>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }
