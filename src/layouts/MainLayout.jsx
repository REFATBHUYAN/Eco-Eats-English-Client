import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import { Providers } from "../Redux/providers";

const MainLayout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [ShowButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
        // console.log("yes scrolled");
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonClasses = ShowButton
    ? "shadow-md ease-in duration-75"
    : "border-transparent border-red-200 hidden";

  return (
    <>
      <div className="max-w-full bg-white overflow-hidden relative mx-auto">
        <div className="fixed z-50 top-0 w-full">
          <Navbar></Navbar>
        </div>

        {/* <div className="mx-auto w-full">
          <Outlet></Outlet>
        </div> */}
        <div className="mx-auto w-full">
          <Providers>
            <Outlet></Outlet>
          </Providers>
        </div>

        <Footer></Footer>
        <button
          onClick={scrollToTop}
          className={`float-right fixed cursor-pointer z-30 right-7 bottom-14 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-700 active:scale-95 ease-in duration-75 opacity-50 hover:opacity-100 shadow-xl ${buttonClasses}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-up text-white mx-auto"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 15l6 -6l6 6"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default MainLayout;
