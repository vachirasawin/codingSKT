// import from Next.js
import React from "react";

function SuccessMessage({ message, success }) {
    return (
        <p className = {`bg-[#4caf50] px-6 py-2 text-white rounded-xl text-sm justify-center ${success ? "flex" : "hidden"} transition-all duration-500 ease-in-out`}>{message}</p>
    )
}

export default SuccessMessage