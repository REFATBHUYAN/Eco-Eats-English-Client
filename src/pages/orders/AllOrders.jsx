import React, { Fragment, useEffect, useState } from "react";
import Container from "../../components/Container";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Footer from "../shared/Footer";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { addMonths, isSameMonth } from "date-fns";
import config from "../../components/Config";

const filtersOptions = [
  { name: "All Orders", href: "#" },
  { name: "Shipped", href: "#" },
  { name: "Pending", href: "#" },
  { name: "Cancelled", href: "#" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AllOrders = () => {
  // const newDate = new Date().toISOString().split("T")[0];
  // const dhakaDate = new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Dhaka' });
  const [date, setDate] = useState(moment().format().split("T")[0]);
  const [allData, setAllData] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  // const dhakaTime = new Date().toLocaleString( { timeZone: 'Asia/Dhaka' }).split("T")[0];
  const timestamp = new Date().toISOString();
  const [allOrders, setAllOrders] = useState();
  const [filterOption, setFilterOption] = useState("All Orders");
  const today = new Date();
  const nextMonth = addMonths(new Date(), 0);
  const [month, setMonth] = useState(nextMonth);
  const [selected, setSelected] = useState(today);
  const formattedDate = moment(selected).format("YYYY-MM-DD");

  const [selectCalender, setSelectCelender] = useState(false);
  const [recentOrders, setRecentOrders] = useState([]);
  // console.log(allOrders);

  // scroll code
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [ShowButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
  // scroll code finished

  // console.log("time stamp", timestamp);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await fetch(
          `${config.apiUrl}/orders/${formattedDate}`
          // `https://chui-jhal-server.vercel.app/orders/${formattedDate}`
        );
        const result1 = await response1.json();

        setSelectCelender(false);
        setAllData(result1);
        setFilterData(result1);
        setDataUpdated(false);
      } catch (error) {
        console.error("Error fetching data1:", error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response2 = await fetch(
          `${config.apiUrl}/allordersstate`
          // `https://chui-jhal-server.vercel.app/allordersstate`
        );
        const result2 = await response2.json();
        setAllOrders(result2);
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };
    const fetchData3 = async () => {
      try {
        const response2 = await fetch(
          `${config.apiUrl}/allorders`
          // `https://chui-jhal-server.vercel.app/allordersstate`
        );
        const result2 = await response2.json();
        setRecentOrders(result2);
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    // Call both fetchData functions
    fetchData1();
    fetchData2();
    fetchData3();
  }, [selected, dataUpdated]);

  // console.log(filterData);
  // console.log(allData);
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
        toast.success("অর্ডারটি শিপ করা হয়েছে!", {
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
        // `https://chui-jhal-server.vercel.app/pending/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.warn("অর্ডারটি পেন্ডিং মার্কড হয়েছে!", {
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

  const orderDelete = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/deleteorder/${_id}`,
        `${config.apiUrl}/deleteorder/${_id}`,
        // `https://chui-jhal-server.vercel.app/deleteorder/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.error("Your Order is Deleted!", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to Delete Order:", await response.text());
      }
    } catch (error) {
      console.error("Error on Deleting order:", error);
    }
  };
  const handleStatusCancelled = async (_id) => {
    try {
      const response = await fetch(
        // `http://localhost:5000/cancelled/${_id}`,
        `${config.apiUrl}/cancelled/${_id}`,
        // `https://chui-jhal-server.vercel.app/cancelled/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDataUpdated(true);
        toast.error("অর্ডারটি ক্যান্সেল করা হয়েছে!", {
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

  const handleDate = (e) => {
    setFilterOption("All Orders");
    setDate(e.target.value);
    const todaysData = allData.filter((d) => d.date === e.target.value);
    setFilterData(todaysData);
  };

  const handleFilter = (item) => {
    setFilterOption(item);
    if (item === "All Orders") {
      setFilterData(allData);
    } else {
      setFilterData(allData.filter((d) => d.status === item));
    }
    // const pendingData = allData.filter((d) => d.status === "Pending");
    // setFilterData(pendingData);
  };

  const footer = (
    <button
      className="rounded-lg bg-slate-400 hover:bg-slate-500 active:bg-slate-600 px-4 py-2 text-xs font-semibold text-white items-center gap-1 mt-4"
      // disabled={isSameMonth(today, month)}
      onClick={() => {
        setMonth(today);
        setSelected(today);
      }}
    >
      Go to Today
    </button>
  );

  // setDate(formattedDate)

  // console.log("selected day", formattedDate);

  return (
    <div className="bg-white">
      <DashboardNav></DashboardNav>
      <Container>
        <div className="pt-28">
          <h3 className="text-xl font-bold text-slate-600">Daily Summary</h3>
          <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-5">
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-pink-200 ring-1 bg-pink-50/50">
              <div className="absolute rounded-md bg-pink-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-cart stroke-pink-500"
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
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Orders
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {filterData.length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-green-200 ring-1 bg-green-50/50">
              <div className="absolute rounded-md bg-green-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check stroke-green-500"
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
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Completed
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {filterData.filter((d) => d.status === "Shipped").length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-amber-200 ring-1 bg-amber-50/50">
              <div className="absolute rounded-md bg-amber-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-alert-triangle stroke-amber-500"
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
                  <path d="M12 9v4" />
                  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Pending
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {filterData.filter((d) => d.status === "Pending").length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-slate-200 ring-1 bg-slate-50/50">
              <div className="absolute rounded-md bg-slate-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-playstation-x stroke-slate-500"
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
                  <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                  <path d="M8.5 8.5l7 7" />
                  <path d="M8.5 15.5l7 -7" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Cancelled
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {filterData.filter((d) => d.status === "Cancelled").length}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-indigo-200 ring-1 bg-indigo-50/50">
              <div className="absolute rounded-md bg-indigo-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-dollar stroke-indigo-500"
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
                  <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                  <path d="M12 3v3m0 12v3" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Sales
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {`${filterData
                    .filter((d) => d.status !== "Cancelled")
                    .reduce((acc, item) => acc + item.totalPrice, 0)
                    .toFixed(2)} tk`}
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-8 py-8 flex items-center justify-between gap-4 w-full">
          {/* <input
            className="block rounded-lg py-1.5 border-0 border-slate-300 text-md font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
            //  ring-1 ring-inset ring-slate-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6
            type="date"
            value={date}
            onChange={handleDate}
            name=""
            id=""
          /> */}
          <div className="flex gap-2">
            <div className="relative">
              <button
                onClick={() => setSelectCelender(!selectCalender)}
                className={`text-slate-600 ring-green-600/20 inline-flex items-center rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium  ring-1 ring-inset ring-slate-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 gap-2`}
              >
                {formattedDate === date ? "Today" : formattedDate}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-calendar text-slate-400"
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
                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M11 15h1" />
                  <path d="M12 15v3" />
                </svg>
              </button>
              <div
                className={`absolute left-0 z-50 mt-2 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-slate-200 focus:outline-none transform opacity-100 scale-100 ${
                  selectCalender ? "block" : "hidden"
                }`}
              >
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  footer={footer}
                  className="text-slate-400"
                  month={month}
                  onMonthChange={setMonth}
                  captionLayout="dropdown-buttons"
                  fromYear={2023}
                  toYear={2034}
                />
              </div>
            </div>
            <Link
              to={"/createOrder"}
              className={`py-2 px-3 rounded-lg bg-slate-500 hover:bg-slate-600 active:bg-slate-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center gap-2`}
            >
              Create
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-plus"
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
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </Link>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center w-full rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 gap-2">
                {filterOption}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-filter-cog text-slate-400"
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
                  <path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
                  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M19.001 15.5v1.5" />
                  <path d="M19.001 21v1.5" />
                  <path d="M22.032 17.25l-1.299 .75" />
                  <path d="M17.27 20l-1.3 .75" />
                  <path d="M15.97 17.25l1.3 .75" />
                  <path d="M20.733 20l1.3 .75" />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-left rounded-md text bg-white shadow-2xl ring-1 ring-slate-200 focus:outline-none">
                <div className="py-1">
                  {filtersOptions.map((option) => (
                    <Menu.Item key={option}>
                      {({ active }) => (
                        <button
                          onClick={() => handleFilter(option.name)}
                          className={classNames(
                            active
                              ? "bg-slate-100 w-full text-start  text-slate-600"
                              : "font-medium",
                            "block px-4 py-2 text-sm text-slate-400 font-normal"
                          )}
                        >
                          {option.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600 sm:pl-3"
                    >
                      SL
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Invoice
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Mobile
                    </th>
                    {/* <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Amount
                    </th> */}
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filterData.map((person, personIdx) => (
                    <tr
                      key={person._id}
                      className={
                        personIdx % 2 === 0 ? undefined : "bg-slate-50"
                      }
                    >
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-400 sm:pl-3">
                        {personIdx + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-slate-400">
                        <Link
                          to={`/invoice/${person._id}`}
                          target="_blank"
                          className="hover:text-green-500 active:text-green-600 ease-in duration-75"
                        >
                          {person?.invoice || person._id}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset  ${
                            person.status === "Pending"
                              ? "text-amber-500 bg-amber-50 ring-amber-600/20"
                              : person.status === "Shipped"
                              ? "text-green-500 bg-green-50 ring-green-600/20"
                              : "text-slate-500 bg-slate-50 ring-slate-600/20"
                          }`}
                        >
                          {person.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        <Link
                          to={`/invoice/${person._id}`}
                          target="_blank"
                          className="hover:text-green-500 active:text-green-600 ease-in duration-75"
                        >
                          {person.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.phone}
                      </td>
                      {/* <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.totalPrice + person.deliveryCharge} tk
                      </td> */}
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.date};
                        <span>{person?.time && " " + person?.time}</span>
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 h-10">
                        <div className="flex gap-2">
                          {/* <button
                            onClick={() => handleStatusPending(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-amber-400 hover:bg-amber-500 active:bg-amber-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-alert-triangle"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 9v4" />
                              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                              <path d="M12 16h.01" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleStatusShipped(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-green-400 hover:bg-green-500 active:bg-green-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-circle-check"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                              <path d="M9 12l2 2l4 -4" />
                            </svg>
                          </button> */}

                          <Link
                            to={`/invoice/${person._id}`}
                            target="_blank"
                            className="py-1.5 px-1.5 rounded-md bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-eye"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                          </Link>
                          <Link
                            to={`/editOrder/${person._id}`}
                            target="_blank"
                            className="py-1.5 px-1.5 rounded-md bg-blue-400 hover:bg-blue-500 active:bg-blue-600 ease-in duration-75 font-semibold text-white hover:text-white"
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                              <path d="M16 5l3 3" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleStatusCancelled(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-slate-400 hover:bg-slate-500 active:bg-slate-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-playstation-x"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                              <path d="M8.5 8.5l7 7" />
                              <path d="M8.5 15.5l7 -7" />
                            </svg>
                          </button>
                          <button
                            onClick={() =>
                              document.getElementById(person._id).showModal()
                            }
                            // onClick={() => <ShowModal id={person?._id}></ShowModal>}
                            // onClick={() => console.log(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-red-400 hover:bg-red-500 active:bg-red-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-trash"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M4 7l16 0" />
                              <path d="M10 11l0 6" />
                              <path d="M14 11l0 6" />
                              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                          </button>

                          <dialog id={person._id} className="modal">
                            <div className="modal-box bg-white text-left max-w-md overflow-hidden">
                              <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-x"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                  </svg>
                                </button>
                              </form>
                              <div className="font-bold text-lg text-left flex items-center gap-2 text-slate-600">
                                {" "}
                                <span className="bg-red-100 rounded-full p-1.5 text-red-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-alert-triangle "
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M12 9v4" />
                                    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                                    <path d="M12 16h.01" />
                                  </svg>
                                </span>{" "}
                                Delete Order?{" "}
                              </div>
                              <p className="py-4 hidden md:block text-slate-400 font-normal max-w-sm  text-sm">
                                Are you sure you want to delete this order? All
                                of your data of this <br /> order will be
                                permanently removed. This action cannot be
                                undone.
                              </p>
                              <p className="py-4 block md:hidden text-slate-400 font-normal max-w-sm  text-sm">
                                Are you sure you want to delete this order? All
                                of your <br /> data of this order will be
                                permanently removed. <br /> This action cannot
                                be undone.
                              </p>
                              <button
                                onClick={() => orderDelete(person?._id)}
                                className={`gap-2 py-2 px-3 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-700 ease-in duration-75 font-semibold inline-flex text-white hover:text-white align-right $`}
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
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                  <path d="M9 12l2 2l4 -4" />
                                </svg>
                                Yes I Understand
                              </button>
                            </div>
                          </dialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filterData.length === 0 && (
                <div className="font-light text-slate-400 text-sm italic text-center w-full mx-auto">
                  <div className="px-3 py-4 border-t border-slate-200">
                    No orders found for this date!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="my-16">
          <h3 className="text-xl font-bold text-slate-600">Website Summary</h3>
          <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-5">
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-purple-200 ring-1 bg-purple-50/50">
              <div className="absolute rounded-md bg-purple-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-bag stroke-purple-500"
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
                  <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Orders
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders?.totalProducts}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-teal-200 ring-1 bg-teal-50/50">
              <div className="absolute rounded-md bg-teal-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-star stroke-teal-500"
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
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Completed
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders?.totalShipped}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-orange-200 ring-1 bg-orange-50/50">
              <div className="absolute rounded-md bg-orange-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-reload stroke-orange-500"
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
                  <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
                  <path d="M20 4v5h-5" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Pending
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders?.totalPending}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-slate-200 ring-1 bg-slate-50/50">
              <div className="absolute rounded-md bg-slate-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-minus stroke-slate-500"
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
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l6 0" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Cancelled
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders?.totalCanceled}
                </p>
              </dd>
            </div>
            <div className="overflow-hidden p-3 rounded-lg ring-inset ring-sky-200 ring-1 bg-sky-50/50">
              <div className="absolute rounded-md bg-sky-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-briefcase stroke-sky-500"
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
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <dt className="ml-14 truncate text-sm font-medium text-slate-400">
                Sales
              </dt>
              <dd className="ml-14 flex items-baseline -mt-1">
                <p className="text-2xl truncate font-semibold text-slate-600">
                  {allOrders?.totalOrderPrice?.toFixed(2)} tk
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* recent all orders table */}

        <div className="flow-root mb-10">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600 sm:pl-3"
                    >
                      SL
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Invoice
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Mobile
                    </th>
                    {/* <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Amount
                    </th> */}
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {recentOrders.map((person, personIdx) => (
                    <tr
                      key={person._id}
                      className={
                        personIdx % 2 === 0 ? undefined : "bg-slate-50"
                      }
                    >
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-400 sm:pl-3">
                        {personIdx + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-slate-400">
                        <Link
                          to={`/invoice/${person._id}`}
                          target="_blank"
                          className="hover:text-green-500 active:text-green-600 ease-in duration-75"
                        >
                          {person?.invoice || person._id}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset  ${
                            person.status === "Pending"
                              ? "text-amber-500 bg-amber-50 ring-amber-600/20"
                              : person.status === "Shipped"
                              ? "text-green-500 bg-green-50 ring-green-600/20"
                              : "text-slate-500 bg-slate-50 ring-slate-600/20"
                          }`}
                        >
                          {person.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        <Link
                          to={`/invoice/${person._id}`}
                          target="_blank"
                          className="hover:text-green-500 active:text-green-600 ease-in duration-75"
                        >
                          {person.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.phone}
                      </td>
                      {/* <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.totalPrice + person.deliveryCharge} tk
                      </td> */}
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                        {person.date};
                        <span>{person?.time && " " + person?.time}</span>
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 h-10">
                        <div className="flex gap-2">
                          {/* <button
                            onClick={() => handleStatusPending(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-amber-400 hover:bg-amber-500 active:bg-amber-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-alert-triangle"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 9v4" />
                              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                              <path d="M12 16h.01" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleStatusShipped(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-green-400 hover:bg-green-500 active:bg-green-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-circle-check"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                              <path d="M9 12l2 2l4 -4" />
                            </svg>
                          </button> */}

                          <Link
                            to={`/invoice/${person._id}`}
                            target="_blank"
                            className="py-1.5 px-1.5 rounded-md bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-eye"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                          </Link>
                          <Link
                            to={`/editOrder/${person._id}`}
                            target="_blank"
                            className="py-1.5 px-1.5 rounded-md bg-blue-400 hover:bg-blue-500 active:bg-blue-600 ease-in duration-75 font-semibold text-white hover:text-white"
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                              <path d="M16 5l3 3" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleStatusCancelled(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-slate-400 hover:bg-slate-500 active:bg-slate-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-playstation-x"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                              <path d="M8.5 8.5l7 7" />
                              <path d="M8.5 15.5l7 -7" />
                            </svg>
                          </button>
                          <button
                            onClick={() =>
                              document.getElementById(person._id).showModal()
                            }
                            // onClick={() => <ShowModal id={person?._id}></ShowModal>}
                            // onClick={() => console.log(person._id)}
                            className="py-1.5 px-1.5 rounded-md bg-red-400 hover:bg-red-500 active:bg-red-600 ease-in duration-75 font-semibold text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-trash"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M4 7l16 0" />
                              <path d="M10 11l0 6" />
                              <path d="M14 11l0 6" />
                              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                          </button>

                          <dialog id={person._id} className="modal">
                            <div className="modal-box bg-white text-left max-w-md overflow-hidden">
                              <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-x"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                  </svg>
                                </button>
                              </form>
                              <div className="font-bold text-lg text-left flex items-center gap-2 text-slate-600">
                                {" "}
                                <span className="bg-red-100 rounded-full p-1.5 text-red-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-alert-triangle "
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M12 9v4" />
                                    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                                    <path d="M12 16h.01" />
                                  </svg>
                                </span>{" "}
                                Delete Order?{" "}
                              </div>
                              <p className="py-4 hidden md:block text-slate-400 font-normal max-w-sm  text-sm">
                                Are you sure you want to delete this order? All
                                of your data of this <br /> order will be
                                permanently removed. This action cannot be
                                undone.
                              </p>
                              <p className="py-4 block md:hidden text-slate-400 font-normal max-w-sm  text-sm">
                                Are you sure you want to delete this order? All
                                of your <br /> data of this order will be
                                permanently removed. <br /> This action cannot
                                be undone.
                              </p>
                              <button
                                onClick={() => orderDelete(person?._id)}
                                className={`gap-2 py-2 px-3 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-700 ease-in duration-75 font-semibold inline-flex text-white hover:text-white align-right $`}
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
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                  <path d="M9 12l2 2l4 -4" />
                                </svg>
                                Yes I Understand
                              </button>
                            </div>
                          </dialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {recentOrders.length === 0 && (
                <div className="font-light text-slate-400 text-sm italic text-center w-full mx-auto">
                  <div className="px-3 py-4 border-t border-slate-200">
                    No orders found for this date!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <ToastContainer />
      </Container>
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
  );
};

export default AllOrders;
