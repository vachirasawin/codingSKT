"use client";

// import from Next.js
import React from "react";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Histogram from "../components/Histogram";
import Grid from "../components/Grid";

function page() {
    const { data: session } = useSession();
    // if (!session) redirect ("/");

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
            <Navbar dashboard session = {session}/>
            <Title/>
            <Grid data = {datas}/>
            <Histogram data = {datas}/>
            <Footer home session = {session}/>
        </div>
    )
}

export default page