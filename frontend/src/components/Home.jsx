import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col items-center bg-blue-200 dark:bg-gray-900">
      <a
        href="/"
        className="flex items-center mb-6 text-2xl mt-20 font-semibold tracking-tight  text-gray-900 dark:text-white"
      >
        <img
          className="w-20 h-20 mr-2"
          src="https://global-uploads.webflow.com/628202eb7980b612a999fc44/62ab4580a7221d718071030f_richpanel-logo.png"
          alt="logo"
        />
        Rich Panel
      </a>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Scale your support, without scaling costs
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Helpdesk software that uses AI to learn from agents and automate
          repetitive tasks. So agents can focus on resolving new issues and
          generating more revenue.
        </p>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default Home;
