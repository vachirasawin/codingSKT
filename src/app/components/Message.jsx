// import from Next.js
import React from "react";

function Message({ message, type, alert }) {
    return (
        <p className = {`px-6 py-2 rounded-xl text-sm justify-center ${type === "success" && "bg-[#4caf50] text-white"} ${type === "error" && "bg-[#f55555] text-white"} ${alert ? "opacity-100 flex" : "absolute opacity-0"} transition-all duration-200 ease-in-out`}>{message}</p>
    )
}

export default Message