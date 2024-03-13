import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PrivateRouter = ({ children }) => {
  const adminUsername = "admin@gmail.com";
  const adminPassword = "admin";
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState(adminPassword);
  const [username, setUsername] = useState(adminUsername);
  const [lastLoginTimestamp, setLastLoginTimestamp] = useState(null);

  useEffect(() => {
    // Retrieve the last login timestamp from localStorage
    const storedTimestamp = localStorage.getItem("lastLoginTimestamp");
    if (storedTimestamp) {
      setLastLoginTimestamp(parseInt(storedTimestamp, 10));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("user" , username, "password" , password);
    if (password === adminPassword && username === adminUsername) {
      setAuthenticated(true);

      // Save the current timestamp to localStorage
      const currentTimestamp = new Date().getTime();
      localStorage.setItem("lastLoginTimestamp", currentTimestamp);
      setLastLoginTimestamp(currentTimestamp);
    }
    else{
      toast.error("Please enter correct email or password!", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
    }
  };

  const isWithinTimeframe = () => {
    if (!lastLoginTimestamp) {
      // No timestamp stored, request login
      return false;
    }

    // Define the time frame (in milliseconds, here set to one day)

    // const oneDayInMilliseconds = 1 * 60 * 1000;
    const oneDayInMilliseconds = 24 * 60 * 60 * 30 * 1000;
    const currentTime = new Date().getTime();

    // Check if the last login was within the desired time frame
    return currentTime - lastLoginTimestamp <= oneDayInMilliseconds;
  };

  //   return (
  //     (authenticated || isWithinTimeframe()) && (

  //     )
  //   );
  return authenticated || isWithinTimeframe() ? (
    children
  ) : (
    <div className="">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-32 lg:px-8 my-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link
            to={"/"}
            className="flex items-center justify-center gap-2 cursor-pointer w-auto"
          >
            <img
              className="block h-12 w-auto"
              src="/media/icon/ecoeats-icon.svg"
              alt=""u  
            />
          </Link>

          <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-slate-600">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            action="#"
            method="POST"
          >
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="admin@gmail.com"
                  value={adminUsername}
                  // defaultValue={adminUsername}
                  onChange={(e) => setUsername(e.target.value)}
                  // required
                  className="block w-full rounded-lg border-0 py-2 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-2">
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="current-password"
                  placeholder="admin"
                  
                  
                  value={password}
                  // defaultValue={adminPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-lg border-0 py-2 text-slate-600 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="gap-2 mt-6 flex w-full justify-center items-center rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 ease-in duration-75 px-3 py-2 text-sm font-semibold leading-6 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-login-2"
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
                  <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                  <path d="M3 12h13l-3 -3" />
                  <path d="M13 15l3 -3" />
                </svg>
                Sign in
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PrivateRouter;
