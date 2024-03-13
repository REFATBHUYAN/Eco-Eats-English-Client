import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-scroll";

const navigation = [
  { name: "Introduction", href: "about" },
  { name: "Differences", href: "difference" },
  { name: "Features", href: "features" },
  { name: "Review", href: "review" },
  { name: "FAQ", href: "faq" },
  { name: "Gallery", href: "gallery" },
  { name: "Contact", href: "help" },
];

const Navbar = () => {
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
      <header className={`bg-white ${shadowClasses}`}>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-x-6 pt-4 pb-4 px-4 `}
          aria-label="Global"
        >
          <div className="flex">
            <a
              href="/"
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
            </a>
          </div>
          <div className="flex flex-1 lg:flex items-center justify-end gap-x-6">
            <a
              href="/orders"
              target="_blank"
              className="hidden cursor-pointer lg:block text-base font-semibold leading-6 text-slate-600 hover:text-green-500 ease-in duration-75"
            >
              Dashboard
            </a>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                activeClass="active"
                smooth={true}
                offset={-100}
                spy={true}
                className="hidden cursor-pointer lg:block text-base font-semibold leading-6 text-slate-600 hover:text-green-500 ease-in duration-75"
              >
                {item.name}
              </Link>
            ))}
            {/* <a href="/orders" target="_blank" className="hidden cursor-pointer lg:block text-base font-semibold leading-6 text-slate-600 hover:text-green-500 ease-in duration-75">Dashboard</a> */}
            <Link
              to={"order"}
              smooth={true}
              offset={-100}
              activeClass="text-white"
              spy={true}
              className="rounded-lg cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 ease-in duration-75 px-4 py-2 text-sm font-semibold text-white items-center"
            >
              <div className="flex gap-2 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-bag "
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                </svg>
                Order Food
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              // className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600 ${
                mobileMenuOpen ? "hidden" : ""
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open Main Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-menu-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600 ${
                mobileMenuOpen ? "" : "hidden"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Open Main Menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex justify-between gap-x-6">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">ইকোইটস</span>
                <img className="h-8 w-auto" src="" alt="" />
              </Link>

              <button
                type="button"
                // className="-m-2.5 rounded-md p-2.5 text-slate-600"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      activeClass="active"
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      smooth={true}
                      offset={-100}
                      spy={true}
                      className="-mx-3 hover:text-green-500 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-600 hover:bg-slate-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href="/orders"
                    target="_blank"
                    className="hidden cursor-pointer lg:block text-base font-semibold leading-6 text-slate-600 hover:text-green-500 ease-in duration-75"
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
