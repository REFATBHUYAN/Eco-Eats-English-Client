import React from "react";
// import bg from "/src/assets/media/banner/cta-banner";

const Help = () => {
  return (
      <div id="help" className="my-28 hero min-h-[300px] rounded-lg bg-white bg-[url('/media/banner/cta-banner.jpg')]">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[670px] flex flex-col justify-center items-center">
              <h1 className="mb-5 text-3xl font-bold text-slate-600">
              Need help?
              </h1>
              <p className="mb-5 text-slate-400 font-light">
              For any queries and order issues call our helpline or knock on our WhatsApp or Facebook page. We are at your service from 10 am to 8 pm.
              </p>
              <div className="flex gap-2">
                <a href="tel:+8801753492987" className="rounded-lg cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 ease-in duration-75 px-5 py-3 text-md font-semibold text-white flex gap-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
                Helpline
                </a>
                <a target="_blank" href="https://wa.me/+8801753492987" className="rounded-lg cursor-pointer bg-slate-600 hover:bg-slate-700 active:bg-slate-800 active:scale-95 ease-in duration-75 px-3 py-3 text-md font-semibold text-white flex gap-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                </a>
                <a target="_blank" href="https://m.me/ecoeatsbangladesh" className="rounded-lg cursor-pointer bg-slate-600 hover:bg-slate-700 active:bg-slate-800 active:scale-95 ease-in duration-75 px-3 py-3 text-md font-semibold text-white flex gap-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-messenger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /><path d="M8 13l3 -2l2 2l3 -2" /></svg>
                </a>
              </div>
            </div>
          </div>
      </div>
  );
};

export default Help;
