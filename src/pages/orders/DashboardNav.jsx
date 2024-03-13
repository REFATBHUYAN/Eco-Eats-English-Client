import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [ShowShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowShadow(true);
        // console.log("yes scrolled");
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shadowClasses = ShowShadow ? "shadow-md" : "border-transparent";

  return (
    <>
      <header className={`bg-white ${shadowClasses} fixed z-50 top-0 w-full`}>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-x-6 pt-4 pb-4 px-4 `}
          aria-label="Global"
        >
          <div className="flex ">
            <Link
              to="/"
              className="-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer"
            >
              <img
                className="block h-8 w-auto"
                src="/media/icon/ecoeats-icon.svg"
                alt=""
              />
              <div className="text-2xl font-bold text-[#32BC4E]">
                Eco<span className="text-[#7ED959]">Eats</span>
              </div>
            </Link>
          </div>

          <div className="cursor-pointer items-center">
            <div className="flex gap-2 justify-center items-center">
              <div className=" text-base font-semibold leading-6 text-slate-600">
                <a href="/orders" className="hover:text-green-500 active:text-green-600 ease-in duration-75">Admin</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle text-slate-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
              {/* <div className="rounded-full p-1.5 bg-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-collage text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M10 4l4 16" /><path d="M12 12l-8 2" /></svg>
              </div> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DashboardNav;
