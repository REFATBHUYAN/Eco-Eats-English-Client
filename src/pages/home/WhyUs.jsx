import React from "react";
import Container from "../../components/Container";

const WhyUs = () => {
  return (
    <div id="features" className="my-28 w-full">
      <Container>
        <h1 className="text-3xl font-bold text-center text-green-500 mb-12 line-clamp-1">
        Why are we the best
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/authentic.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 line-clamp-1">
            Authentic Product
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
            Khulna's authentic Chuizhal with the best taste is available from us
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/premium.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 line-clamp-1">
            Premium Quality
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
            Not regular or unripe, we offer selected premium quality Chuizhal
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/refund.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 line-clamp-1">
            Refund Policy
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
            In case of any defective product, there is the facility of product or money refund
            </p>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-3 text-slate-400 ">
            <div>
              <img
                className="h-20 w-20 rounded-lg bg-slate-50 p-6 text-green-500 group-hover:bg-slate-100 group-hover:text-white ease-in duration-75"
                src="/media/features/delivery.svg"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-xl text-slate-600 group-hover:text-green-500 line-clamp-1">
            Cash on delivery
            </h1>

            <p className="text-center text-slate-400 line-clamp-2 font-light">
            We have a good system of receiving the goods and then paying the money
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
