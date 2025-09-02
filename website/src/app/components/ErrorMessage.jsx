// import from Next.js
import React from "react";

function ErrorMessage({ message, error }) {
    return (
        <p className = {`bg-[#f55555] px-6 py-2 text-white rounded-xl text-sm justify-center ${error ? "flex" : "hidden"} transition-all duration-500 ease-in-out`}>{message}</p>
    )
}

export default ErrorMessage