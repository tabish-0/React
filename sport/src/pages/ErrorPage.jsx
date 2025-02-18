import React from "react";
import { useRouteError, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-10 rounded-3xl shadow-2xl text-center text-white border border-gray-700 w-[90%] sm:w-[60%] md:w-[30%]"
            >
                <motion.h1
                    className="text-9xl font-extrabold text-red-500 drop-shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>
                <h2 className="text-4xl font-bold mt-6">Oops! Page Not Found</h2>
                <p className="text-gray-400 mt-4 text-lg">
                    {error && error.data}
                </p>

                <NavLink
                    href="/"
                    className="mt-8 inline-block text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
                >
                    <button> Go Home </button>
                </NavLink>
            </motion.div>
        </div>
    );
}

export default ErrorPage;
