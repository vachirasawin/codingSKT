"use client";

// import from Next.js
import React, { useState } from "react";
import { useSession } from "next-auth/react";

function ReviewInbox() {
    const { data: session } = useSession();

    return (
        <>
            {!session && (
                <div className = "px-4 border-b border-[#ececec] bg-[#f7f7f7]">
                    <div className = "container mx-auto justify-self-center flex flex-col justify-center items-center py-42 gap-8">
                        <h1 className = "text-[#171717] font-bold text-4xl">
                            <span className = "text-blue-500">Review</span>
                            <span>&nbsp;Inbox</span>
                        </h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default ReviewInbox