// import from Next.js
import React from "react";

function TitleFooter({ title, description }) {
    return (
        <div className = "flex flex-col gap-2 justify-center items-center py-12 border-b border-[#ececec] bg-[#f7f7f7]">
            <h1 className = "text-3xl lg:text-5xl font-extrabold text-blue-500">
                {title}
            </h1>
            <p className = "font-medium text-[#9497a1] text-xl">
                {description}
            </p>
        </div>
    )
}

export default TitleFooter