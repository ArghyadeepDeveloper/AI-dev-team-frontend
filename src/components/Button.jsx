// src/components/Button.js
import React from "react";
import { motion } from "framer-motion";

export default function Button({
    children,
    onClick,
    isDisabled = false,
    isLoading = false,
    variant = "primary", // primary, secondary, tertiary
    ...props
}) {
    let baseClasses =
        "px-4 py-2 rounded font-medium focus:outline-none transition-all duration-150";

    let variantClasses = "";
    switch (variant) {
        case "primary":
            variantClasses = isDisabled
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700";
            break;
        case "secondary":
            variantClasses = isDisabled
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300";
            break;
        case "tertiary":
            variantClasses = isDisabled
                ? "bg-transparent text-gray-400 cursor-not-allowed"
                : "bg-transparent text-gray-700 hover:bg-gray-100";
            break;
        default:
            variantClasses = "bg-blue-600 text-white";
    }

    return (
        <motion.button
            {...props}
            onClick={onClick}
            disabled={isDisabled || isLoading}
            className={`${baseClasses} ${variantClasses} flex items-center justify-center`}
            whileTap={{ scale: 0.95 }}
        >
            {isLoading ? "Loading..." : children}
        </motion.button>
    );
}