"use client";

// import from Next.js
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Histogram from "../components/Histogram";
import Grid from "../components/Grid";

function page() {
    const { data: session } = useSession();
    const [predictedGPA, setPredictedGPA] = useState(null);
    if (!session) redirect ("/");

    useEffect(() => {
        const fetchPredictedGPA = async () => {
            if (!session?.user?.id) return;

            try {
                const response = await fetch("/api/predictGPA", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userID: session.user.id }),
                });

                const data = await response.json();
                if (data.predictedGPA !== undefined) {
                    setPredictedGPA(data.predictedGPA);
                }
            } catch (error) {
                console.error("Error fetching predicted GPA:", error);
            }
        };

        fetchPredictedGPA();
    }, [session?.user?.id]);

    const datas = [
        {
            title: "Thai",
            description: "",
            lower: "1",
            upper: "2"
        },
        {
            title: "English",
            description: "Basic",
            lower: "1",
            upper: "1.5"
        },
        {
            title: "English",
            description: "Additional",
            lower: "3",
            upper: "3.5"
        },
        {
            title: "Math",
            description: "Basic",
            lower: "2",
            upper: "2.5"
        },
        {
            title: "Math",
            description: "Additional",
            lower: "3",
            upper: "4"
        },
        {
            title: "Science",
            description: "",
            lower: "2",
            upper: "3"
        },
        {
            title: "Physics",
            description: "",
            lower: "1",
            upper: "2"
        },
        {
            title: "Chemistry",
            description: "",
            lower: "1",
            upper: "1.5"
        },
        {
            title: "Biology",
            description: "",
            lower: "1",
            upper: "2"
        },
        {
            title: "Computer",
            description: "",
            lower: "3",
            upper: "3.5"
        },
        {
            title: "Robot",
            description: "",
            lower: "3.5",
            upper: "4"
        },
        {
            title: "Project",
            description: "",
            lower: "2.5",
            upper: "3"
        },
        {
            title: "Social",
            description: "",
            lower: "3",
            upper: "3.5"
        },
        {
            title: "Social",
            description: "History / Buddhism",
            lower: "2.5",
            upper: "3"
        },
        {
            title: "Health",
            description: "",
            lower: "3.5",
            upper: "4"
        },
        {
            title: "PE",
            description: "",
            lower: "3",
            upper: "3.5"
        },
        {
            title: "Art",
            description: "",
            lower: "2",
            upper: "2.5"
        },
        {
            title: "Career",
            description: "",
            lower: "1",
            upper: "1.5"
        }
    ]
    
    return (
        <div>
            <Navbar dashboard/>
            <Title/>
            <Grid data = {datas}/>
            <Histogram data = {datas} bg = "bg-[#f7f7f7]"/>
            {predictedGPA !== null ? predictedGPA : "Loading..."}
            <Footer dashboard session = {session}/>
        </div>
    )
}

export default page