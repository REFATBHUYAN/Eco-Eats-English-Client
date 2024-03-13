import React from "react";
import ReactPlayer from "react-player/facebook"
import { Link } from "react-scroll";

const benefits = [
  "Beef",
  "Duck Meat",
  "Fish",
  "Nihari",
  "Beef",
  "Round the Clock",
  "Vegetables",
  "Haleem",
  "Chicken",
  "Roast Curry",
  "Khichuri",
  "Agile",
];

const Headers = () => {
  return (
    <div id="about" className="mx-auto max-w-7xl mt-12 md:mt-28">
      <div className="mx-auto flex w-full flex-col gap-16 bg-white/5 pt-6 ring-1 ring-white/10 sm:rounded-3xl lg:flex-row lg:items-center">
        <div className="h-full w-full md:hidden block mx-auto flex-none rounded-lg object-cover lg:max-w-sm player-wrapper">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            controls={true}
            url="https://www.facebook.com/ecoeatsbangladesh/videos/1998056963903868"
          />
        </div>
        <div className="w-full mx-auto flex-auto">
          <h2 className="text-3xl font-bold text-green-500 sm:text-4xl">
          Famous Chuijhal of Khulna!
          </h2>
          <p className="mt-6 text-xl leading-8 text-slate-500">
          Bored to eat daily monotony cooking? Want to use something in cooking so that the taste of cooking is more special? Use “chuijhal” in cooking to bring a twist to everyday cooking. This spicy spice adds great flavor to cooking. Adds an incomparable flavor to any cuisine. This chuijhal makes a variety of delicious foods even more delicious. Can be used in cooking:
          </p>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-x-3 text-xl text-slate-400 font-medium items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" /></svg>
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4">
            <div className="">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star-filled text-amber-500"
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
                    <path
                      d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </div>
              <p className="w-56 h-11 text-amber-500 text-sm font-medium leading-normal mt-2">
              We have delivered Chui Jhal to over 30,000 customers!
              </p>
            </div>
            
            <div className="flex gap-2">
              <Link
                to={"order"}
                smooth={true}
                offset={-100}
                activeClass="text-white"
                spy={true}
                className="rounded-lg cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 ease-in duration-75 px-5 py-3 text-md font-semibold text-white"
              >
                <div className="flex gap-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                  Order Food
                </div>
              </Link>
              <a target="_blank" href="https://wa.me/+8801753492987" className="rounded-lg cursor-pointer bg-slate-500 hover:bg-slate-600 active:bg-slate-700 active:scale-95 ease-in duration-75 px-3 py-3 text-md font-semibold text-white flex gap-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
              </a>
              <a href="tel:+8801753492987" className="rounded-lg cursor-pointer bg-slate-500 hover:bg-slate-600 active:bg-slate-700 active:scale-95 ease-in duration-75 px-3 py-3 text-md font-semibold text-white flex gap-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
              </a>
              </div>
          </div>
        </div>
        <div className="h-full w-full hidden md:block mx-auto flex-none rounded-lg object-cover lg:max-w-sm player-wrapper">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            controls={true}
            url="https://www.facebook.com/ecoeatsbangladesh/videos/1998056963903868"
          />
        </div>
      </div>
    </div>
  );
};

export default Headers;
