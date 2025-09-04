// import from Next.js
import React, { useEffect, useState } from "react";

// import from components
import Card from "./Card";

function ReviewCard({ admin }) {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("/api/review");
                const data = await response.json();

                const formatted = data.map(item => ({
                    title: item.name,
                    image: item.image,
                    extension: "-",
                    content: item.review,
                    id: item._id,
                    link: "-"
                }));

                setContents(formatted);
            } catch (error) {
                console.log("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [])

    const handleDelete = async (id) => {
        const response = await fetch("/api/review", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
        });

        if (response.ok) {
            setContents(prev => prev.filter(item => item.id !== id));
        }
    };

    return (
        <Card contents = {contents} subTitle = "User" title = "Reviews" inverse description = "รีวิวจากผู้ใช้งาน" h = "h-96" typeAdmin = {admin} onDelete = {handleDelete}/>
    )
}

export default ReviewCard