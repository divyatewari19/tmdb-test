import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import { SkeletonTheme } from "react-loading-skeleton";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </SkeletonTheme>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
