// src/components/InputField.js
import React from "react";

export default function InputField({
    title,
    placeholder,
    value,
    onChange,
    type = "text",
    error = null,
}) {
    return (
        <div className="flex flex-col mb-4">
            {title && <label className="mb-1 font-medium">{title}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"
                    }`}
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
}