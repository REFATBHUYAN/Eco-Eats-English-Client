import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import config from "../../components/Config";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SingleOrders2 = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState();
  const [dataUpdated, setDataUpdated] = useState();

  // const [selected, setSelected] = useState(moods[5]);

  console.log(singleItem);

  useEffect(() => {
    fetch(`${config.apiUrl}/singleitem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleItem(data);
        setDataUpdated(false);
      });
  }, [dataUpdated]);

  const handleStatusShipped = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/update/${_id}`,
        `${config.apiUrl}/delivered/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.success("The order has been shipped!", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to updade status:", await response.text());
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const handleStatusPending = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/update/${_id}`,
        `${config.apiUrl}/pending/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.warn("The order is marked pending!", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to updade status:", await response.text());
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const subTotalPrice = singleItem?.food?.reduce((sum, item) => {
    const productPrice = ((item.price /
    (item.weight === "১ কেজি" ? 1000 : 500)) *
    item?.weightInGram);
    return sum + productPrice;
  }, 0);

  const discountAmount = singleItem?.discount ? singleItem?.discount : 0;
  const advanceAmount = singleItem?.advance ? singleItem?.advance : 0;
  const grandTotal =
    singleItem?.deliveryCharge + subTotalPrice - advanceAmount - discountAmount;

  return (
    <div className="w-full bg-white">
      <Container>
        <>
          <Helmet>
            <title>
              Invoice # {`${singleItem?.invoice || singleItem?._id}`}
            </title>
          </Helmet>

          <div className="bg-white mx-auto max-w-3xl my-4">
            <div>
              <div className="py-8 ring-0 ring-slate-100 sm:ring-1 sm:ring-inset sm:mx-0 sm:rounded-lg sm:p-8 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:p-16">
                <nav
                  className={`mx-auto flex items-center justify-between gap-x-6 `}
                  aria-label="Global"
                >
                  <div className="flex">
                    <a
                      href="/orders"
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
                  <div className="flex flex-1 lg:flex items-center justify-end gap-2 printButton">
                    <button
                      onClick={() => handleStatusShipped(singleItem?._id)}
                      className={`float-right py-2 px-2 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center printButton gap-2 ${
                        singleItem?.status === "Pending" ? " " : "hidden"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-circle-check"
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
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleStatusPending(singleItem._id)}
                      className={`float-right py-2 px-2 rounded-lg bg-amber-500 hover:bg-amber-600 active:bg-amber-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center printButton gap-2 ${
                        singleItem?.status === "Shipped" ||
                        singleItem?.status === "Cancelled"
                          ? " "
                          : "hidden"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-alert-triangle printButton"
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
                        <path d="M12 9v4" />
                        <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                        <path d="M12 16h.01" />
                      </svg>
                    </button>
                    <Link
                      to={`/editOrder/${singleItem?._id}`}
                      className={`float-right py-2 px-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center printButton gap-2 ${
                        singleItem?.status === "Pending" ||
                        singleItem?.status === "Cancelled"
                          ? " "
                          : "hidden"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                        <path d="M16 5l3 3" />
                      </svg>
                    </Link>
                    <button
                      onClick={handlePrint}
                      className={`float-right py-2 px-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center printButton gap-2`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-printer printButton"
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
                        <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                        <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                        <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                      </svg>
                    </button>
                  </div>
                </nav>
                <div className="flex justify-between">
                  <div className="mt-8 flex-1">
                    <dt className="inline text-base font-semibold text-slate-600">
                      Invoice #
                    </dt>{" "}
                    <dd className="inline text-sm font-semibold text-slate-400">
                      <time dateTime="2023-31-01">
                        {singleItem?.invoice || singleItem?._id}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-8 flex-1 ml-8">
                    <dt className="inline text-base font-semibold text-slate-600">
                      Date:
                    </dt>{" "}
                    <dd className="inline text-sm font-semibold text-slate-400">
                      <time dateTime="2023-31-01">
                        {singleItem?.date};{" "}
                        {singleItem?.time && " " + singleItem?.time}
                      </time>
                    </dd>
                  </div>
                </div>
                <dl className="grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                  <div className="mt-6 border-t border-slate-200 pt-6 sm:pr-4">
                    <dt className="font-semibold text-slate-400">From</dt>
                    <dd className="mt-2">
                      <span className="font-medium text-slate-600">
                        EcoEats
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        Sonadanga, Khulna 9100
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        +8801753492987
                      </span>
                    </dd>
                  </div>
                  <div className="mt-8 sm:mt-6 sm:border-t sm:border-slate-200 sm:pl-4 sm:pt-6">
                    <dt className="font-semibold text-slate-400">To</dt>
                    <dd className="mt-2">
                      <span className="font-medium text-slate-600">
                        {singleItem?.name}
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        {singleItem?.address}
                      </span>
                      <br />
                      <span className="font-light text-slate-600">
                        {singleItem?.phone}
                      </span>
                    </dd>
                  </div>
                </dl>
                <table className="mt-10 w-full whitespace-nowrap text-left text-sm text-slate-600">
                  <colgroup>
                    <col />
                    <col className="w-full" />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead className="text-slate-400 border-b border-slate-200 uppercase tracking-wide">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pl-0 pr-2 font-semibold text-xs"
                      >
                        SL
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-0 pr-2 font-semibold text-xs"
                      >
                        Ordered Items
                      </th>

                      <th
                        scope="col"
                        className="py-3 pl-8 pr-0 text-right font-semibold text-xs table-cell"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-8 pr-0 text-right font-semibold text-xs table-cell"
                      >
                        Qty
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-8 pr-0 text-right font-semibold text-xs"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {singleItem &&
                      singleItem?.food.map((item, i) => (
                        <tr key={item.id} className="border-y border-slate-100">
                          <td className="max-w-0 pr-2 px-0 py-4 align-top">
                            {i + 1}
                          </td>
                          <td className="max-w-0 pr-2 px-0 py-4 align-top">
                            <div className="font-medium text-slate-600">
                              {item.title}
                            </div>
                            <div className="text-slate-400 font-light flex items-center gap-1">
                              {`${item?.weightInGram} g`}
                            </div>
                          </td>
                          <td className="py-4 pl-8 pr-0 text-right align-top tabular-nums text-slate-600 table-cell">
                            {item.price} tk
                          </td>
                          <td className="py-4 pl-8 pr-0 text-right align-top tabular-nums text-slate-600 table-cell">
                            {item.quantity}
                          </td>
                          <td className="py-4 pl-8 pr-0 text-right align-top tabular-nums text-slate-600">
                          {((item.price /
                                (item.weight === "১ কেজি" ? 1000 : 500)) *
                                item?.weightInGram).toFixed(2)}
                            tk
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot className="px-0">
                    <tr>
                      <th
                        scope="row"
                        colSpan={4}
                        className="px-0 pb-0 pt-4 text-slate-400 sm:hidden text-xs font-semibold uppercase"
                      >
                        Subtotal
                      </th>
                      <th
                        scope="row"
                        colSpan={4}
                        className="hidden px-0 pb-0 pt-4 text-right font-semibold text-slate-400 sm:table-cell text-xs uppercase"
                      >
                        Subtotal
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-slate-600">
                        {subTotalPrice?.toFixed(2)} tk
                      </td>
                    </tr>
                    {singleItem?.advance && (
                      <tr>
                        <th
                          scope="row"
                          colSpan={4}
                          className="px-0 pb-0 pt-4 text-slate-400 sm:hidden text-xs font-semibold uppercase"
                        >
                          Advance
                        </th>
                        <th
                          scope="row"
                          colSpan={4}
                          className="hidden px-0 pb-0 pt-4 text-right font-semibold text-slate-400 sm:table-cell text-xs uppercase"
                        >
                          Advance
                        </th>
                        <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-slate-600">
                          {singleItem?.advance?.toFixed(2)} tk
                        </td>
                      </tr>
                    )}

                    {singleItem?.discount && (
                      <tr>
                        <th
                          scope="row"
                          colSpan={4}
                          className="px-0 pb-0 pt-4 text-slate-400 sm:hidden text-xs font-semibold uppercase"
                        >
                          Discount
                        </th>
                        <th
                          scope="row"
                          colSpan={4}
                          className="hidden px-0 pb-0 pt-4 text-right font-semibold text-slate-400 sm:table-cell text-xs uppercase"
                        >
                          Discount
                        </th>
                        <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-slate-600">
                          {singleItem?.discount?.toFixed(2)} tk
                        </td>
                      </tr>
                    )}
                    <tr>
                      <th
                        scope="row"
                        colSpan={4}
                        className="pt-4 font-semibold text-slate-400 sm:hidden text-xs uppercase"
                      >
                        Delivery
                      </th>
                      <th
                        scope="row"
                        colSpan={4}
                        className="hidden pt-4 text-right font-semibold text-slate-400 sm:table-cell text-xs uppercase"
                      >
                        Delivery
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-slate-600">
                        {singleItem?.deliveryCharge?.toFixed(2)} tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan={4}
                        className="px-0 py-4 text-slate-400 sm:hidden text-xs font-semibold uppercase"
                      >
                        COD Charge 1%
                      </th>
                      <th
                        scope="row"
                        colSpan={4}
                        className="hidden px-0 py-4 text-right font-semibold text-slate-400 sm:table-cell text-xs uppercase"
                      >
                        COD Charge 1%
                      </th>
                      <td className="pl-8 pr-0 py-4 text-right tabular-nums text-slate-600">
                        {(grandTotal * 0.01).toFixed(2)} tk
                      </td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <th
                        scope="row"
                        colSpan={4}
                        className="pt-4 font-semibold text-slate-600 sm:hidden text-xs uppercase"
                      >
                        Total
                      </th>
                      <th
                        scope="row"
                        colSpan={4}
                        className="hidden pt-4 text-right font-semibold text-slate-600 sm:table-cell text-xs uppercase"
                      >
                        Total
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-slate-600">
                        {(grandTotal + grandTotal * 0.01)?.toFixed(2)} tk
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div className="font-light text-slate-400 text-xs italic mt-8 text-center">
                  NB: Total price may be slightly less or more due to the
                  addition of fractional product weight.
                </div>
                <div className="font-semibold text-slate-400 text-xs italic mt-4 md:mt-2 text-center">
                  Thank you for shopping with us. Please contact our helpline or
                  chat with us for any issues. Have a nice day.
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </>
      </Container>
    </div>
  );
};

export default SingleOrders2;
