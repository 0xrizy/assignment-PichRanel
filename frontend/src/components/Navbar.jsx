import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav  className="bg-gray-800 border-gray-200 dark:bg-gray-900">
      <div  className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-3">
        <a href="/" className="flex items-center ">
          <img
            src="https://global-uploads.webflow.com/628202eb7980b612a999fc44/62ab4580a7221d718071030f_richpanel-logo.png"
             className="h-9 w-10 mr-2"
            alt="Flowbite Logo"
          />
          <span  className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            Rich Panel
          </span>
        </a>
        <div  className="flex items-center">
          <button
            type="button"
             className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-0 mb-0 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            onClick={() => navigate("/login")}
          >
           Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
