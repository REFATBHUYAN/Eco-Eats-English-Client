import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="w-full mx-auto pb-10 bg-slate-900 relative">
      <Container>
        <footer className="footer py-16 text-slate-400  rounded-md flex flex-col lg:flex-row gap-10 lg:gap-40">
          <aside>
            <Link
              to="/"
              className="normal-case text-xl flex items-center gap-2"
            >
              <img
                className="block h-8 w-auto"
                src="/media/icon/ecoeats-icon.svg"
              />
              <span className="text-2xl font-bold text-[#32BC4E]">
                Eco<span className="text-[#7ED959]">Eats</span>
              </span>
            </Link>
            <p className="w-fit lg:w-96 leading-6 font-light">
            EcoEats is working on South's most loved spice "Chuizhal". We are the first in the online world to coin the terms “tree chui” and “eto chui” to describe different types of chewing gum. Since 2020, keeping your trust intact, we have been continuously supplying Chuizhal throughout the country and outside the country.
            </p>
          </aside>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
            <nav className="space-y-5 flex flex-col font-light">
              <header className="font-bold text-slate-300 ">
              Our Address
              </header>
              <a
                href="https://maps.app.goo.gl/iu8fEDnuj1koBqLs5"
                target="_blank"
                className="link no-underline hover:text-green-500 active:text-green-600 ease-in duration-75 flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-map-pin"
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
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                Sonadanga, Khulna 9100
              </a>
              <a
                href="mailto:ecoeats.bd@gmail.com"
                target=""
                className="link no-underline hover:text-green-500 active:text-green-600 ease-in duration-75 flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail"
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
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
                refatbubt@gmail.com
              </a>
              <a
                href="tel:+8801753492987"
                target=""
                className="link no-underline hover:text-green-500 active:text-green-600 ease-in duration-75 flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-headset"
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
                  <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                  <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                  <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                  <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                </svg>
                +8801575267132
              </a>
            </nav>
            <nav className="space-y-5 flex flex-col mt-8 lg:mt-0">
              <header className="font-bold text-slate-300">
                Social Media
              </header>
              <div className="flex gap-2 items-center">
                <a
                  href="https://www.facebook.com/groups/ecoeats"
                  target="_blank"
                  className="h-10 cursor-pointer w-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-600 ease-in duration-75 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-users rounded-md"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/ecoeatsbangladesh"
                  target="_blank"
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-600 ease-in duration-75 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-facebook"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>
                <a
                  href="https://m.me/ecoeatsbangladesh"
                  target="_blank"
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-600 ease-in duration-75 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-messenger"
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
                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                    <path d="M8 13l3 -2l2 2l3 -2" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/+8801753492987"
                  target="_blank"
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-600 ease-in duration-75 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-whatsapp"
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
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </a>
                <a
                  href="tel:+8801753492987"
                  target=""
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-600 ease-in duration-75 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-phone-call"
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
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </a>
                <a
                  href="mailto:ecoeats.bd@gmail.com"
                  target=""
                  className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-500 active:bg-green-600 ease-in duration-75 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail"
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
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </footer>
        <footer className="border-t border-slate-700 footer w-full lg:flex lg:justify-between text-slate-400">
          <aside className="flex gap-1 mt-8">
            <p>&copy; 2020-{year} EcoEats. All rights reserved.</p>
          </aside>
          <div className="-mt-4 md:mt-8">
            <h1>
              Fueled By{" "}
              <a
                target="_blank"
                href="https://www.facebook.com/cyberspace.digital"
              >
                CyberSpace Digital
              </a>
            </h1>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
