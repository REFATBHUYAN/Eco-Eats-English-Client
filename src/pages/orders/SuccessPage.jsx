import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../../components/Config";

const SuccessPage = () => {
  const { id } = useParams();
  // console.log(id);
  const [order, setOrder] = useState();

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await fetch(
            // `http://localhost:5000/singleorder/${id}`
          `${config.apiUrl}/singleorder/${id}`
        );
        const result1 = await response1.json();

        //   setSelectCelender(false);
        setOrder(result1[0]);
        //   setFilterData(result1);
        //   setDataUpdated(false);
      } catch (error) {
        console.error("Error fetching data1:", error);
      }
    };
    fetchData1();
  }, []);

  console.log(order);
  const subTotalPrice = order?.food?.reduce((sum, item) => {
    const productPrice = item?.extraWeight
      ? (item.price / (item.weight === "১ কেজি" ? 1000 : 500)) *
          item?.extraWeight +
        item.price * item.quantity
      : item.price * item.quantity;
    return sum + productPrice;
  }, 0);

  const discountAmount = order?.discount ? order?.discount : 0;
  const advanceAmount = order?.advance ? order?.advance : 0;
  const grandTotal = order?.deliveryCharge + subTotalPrice - discountAmount - advanceAmount;

  return (
    <div className="px-4">
      <div className="mx-auto max-w-3xl my-4">
        <div className="py-8 ring-0 ring-slate-100 sm:ring-1 sm:ring-inset sm:mx-0 sm:rounded-lg sm:p-8 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:p-16">
          <div className="w-full">
            <div className="flex">
              <Link
                to={'/'}
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
            <h1 className="text-sm font-medium tracking-wide text-slate-600 mt-16">
            Many thanks!
            </h1>
            <p className="mt-2 text-3xl font-bold text-green-500 sm:text-4xl">
            Order Successful
            </p>
            <p className="mt-2 text-base text-slate-400">
            Thank you for your order, the order will arrive shortly
              will be processed. We will contact you soon, stay tuned.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-4 text-sm">
              <div>
                <span className="inline text-base font-semibold text-slate-600">
                  Invoice #{" "}
                </span>
                <span className="inline text-sm font-semibold text-slate-400">
                  {order?.invoice}
                </span>
              </div>
              <div>
                <span className="inline text-base font-semibold text-slate-600">
                  Date:{" "}
                </span>
                <span className="inline text-sm font-semibold text-slate-400">
                  {order?.date}; {order?.time && " " + order?.time}
                </span>
              </div>
            </dl>

            <ul
              role="list"
              className="mt-8 border-t border-slate-100 divide-y divide-slate-100 text-sm"
            >
              {order?.food.map((product) => (
                <li key={product.id} className="flex space-x-4 py-4">
                  <img
                    src={product.photo}
                    className="h-24 w-24 flex-none rounded-lg bg-slate-100 object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="font-medium text-slate-600">
                      <p>{product.title}</p>
                    </h3>
                    <div className="text-slate-400 font-light">
                      {" "}
                      {product.weight === "১ কেজি" ? "1 kg" : "500 g"}{" "}
                      
                    </div>
                    <div className="pt-6 text-slate-400 font-light">
                      x {product.quantity}
                    </div>
                  </div>
                  <p className="flex-none text-slate-600">{product.price} tk</p>
                </li>
              ))}
            </ul>

            <dl className="space-y-4 border-t border-slate-100 pt-4 text-sm text-slate-400">
              <div className="flex justify-between">
                <dt className="text-xs font-semibold uppercase">Subtotal</dt>
                <dd className="text-slate-600">{order?.totalPrice?.toFixed(2)} tk</dd>
              </div>

              {order?.advance && (
                <div className="flex justify-between">
                  <dt className="text-xs font-semibold uppercase">advance</dt>
                  <dd className="text-slate-600">{order?.advance?.toFixed(2)} tk</dd>
                </div>
              )}

              {order?.discount && (
                <div className="flex justify-between">
                  <dt className="text-xs font-semibold uppercase">discount</dt>
                  <dd className="text-slate-600">{order?.discount?.toFixed(2)} tk</dd>
                </div>
              )}

              <div className="flex justify-between">
                <dt className="text-xs font-semibold uppercase">Delivery</dt>
                <dd className="text-slate-600">{order?.deliveryCharge?.toFixed(2)} tk</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-xs font-semibold uppercase">COD Charge 1%</dt>
                <dd className="text-slate-600">
                  {(grandTotal * 0.01).toFixed(2)} tk</dd>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-slate-600">
                <dt className="text-xs font-semibold uppercase">Total</dt>
                <dd className="font-semibold">
                  {(grandTotal + grandTotal * 0.01)?.toFixed(2)} tk
                </dd>
              </div>
            </dl>

            <div className="border-b border-slate-100 pb-8 font-light text-slate-400 text-xs italic mt-8 text-center">
            Note: Being a raw product, the value may be slightly lower or higher due to weight variation.
            </div>

            <dl className="mt-8 grid sm:grid-cols-2 grid-cols-1 gap-x-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-400">Address</dt>
                <dd className="mt-2">
                  <address className="not-italic">
                    <span className="block font-medium text-slate-600">
                      {order?.name}
                    </span>
                    <span className="block font-light text-slate-400">
                      {order?.address}
                    </span>
                    <span className="block font-light text-slate-400">
                      {order?.phone}
                    </span>
                  </address>
                </dd>
              </div>
              <div className="mt-8 sm:mt-0">
                <dt className="font-semibold text-slate-400">Delivery</dt>
                <dd className="mt-2">
                  <span className="block font-medium text-slate-600">
                  Cash on Delivery
                  </span>
                  <span className="block font-light text-slate-400">
                  After receiving the product, pay the price to the delivery man.
                    Thanks for staying with Equits.
                  </span>
                </dd>
              </div>
            </dl>

            <div className="border-t border-slate-100 pt-8 mt-8 items-center">
              <p className="font-medium text-slate-600 text-center text-sm">
              Join now to get esteemed customer reviews and our exclusive discount offers:
              </p>
              <a target="_blank" href="https://www.facebook.com/groups/ecoeats" className="mt-4 rounded-lg cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 duration-75 px-4 py-2 font-semibold text-white text-sm flex gap-2 items-center justify-center mx-auto w-fit">
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
                  Equities Facebook Group
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
