// src/components/SelectBox.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectBox({
    title,
    options = [],
    value = [],
    onChange,
    isMulti = false,
    error = null,
}) {
    const handleSelect = (e) => {
        const selectedValue = e.target.value;
        if (!isMulti) {
            onChange([selectedValue]);
        } else if (!value.includes(selectedValue)) {
            onChange([...value, selectedValue]);
        }
    };

    const handleRemove = (val) => {
        onChange(value.filter((v) => v !== val));
    };

    return (
        <div className="flex flex-col mb-4">
            {title && <label className="mb-1 font-medium">{title}</label>}

            {/* Dropdown select */}
            <select
                value=""
                onChange={handleSelect}
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"
                    }`}
            >
                <option value="" disabled>
                    {isMulti ? "Select options..." : "Select an option..."}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            {/* Multi-select chips */}
            {isMulti && value.length > 0 && (
                <div className="flex flex-wrap mt-2 gap-2">
                    <AnimatePresence>
                        {value.map((val) => {
                            const label = options.find((opt) => opt.value === val)?.label || val;
                            return (
                                <motion.div
                                    key={val}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                                >
                                    <span>{label}</span>
                                    <button
                                        onClick={() => handleRemove(val)}
                                        className="ml-1 text-blue-600 font-bold hover:text-blue-900"
                                    >
                                        ×
                                    </button>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            )}

            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
}