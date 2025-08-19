"use client";

// import from Next.js
import React from "react";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Card from "../components/Card";

function page() {
    const { data: session } = useSession();

    const contents = [
        {
            title: "Node.js",
            image: "nodejs",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "735",
            link: "https://nodejs.org/en"
        }, 
        {
            title: "Next.js",
            image: "nextjs",
            extension: "avif",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "512",
            height: "512",
            link: "https://nextjs.org/"
        }, 
        {
            title: "Tailwind CSS",
            image: "tailwindcss",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1280",
            height: "770",
            link: "https://tailwindcss.com/"
        }, 
        {
            title: "MongoDB Atlas",
            image: "mongodb",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "512",
            height: "512",
            link: "https://www.mongodb.com/products/platform"
        }, 
        {
            title: "Mongoose",
            image: "mongoose",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "280",
            height: "280",
            link: "https://mongoosejs.com/"
        }, 
        {
            title: "BCrypt HASH",
            image: "bcrypt",
            extension: "webp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "400",
            height: "400",
            link: "https://www.npmjs.com/package/bcryptjs"
        }, 
        {
            title: "Google Chrome",
            image: "google",
            extension: "webp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "250",
            height: "256",
            link: "https://www.google.com/intl/th_th/chrome/"
        }, 
        {
            title: "Google Cloud",
            image: "cloud",
            extension: "webp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "480",
            height: "480",
            link: "https://cloud.google.com/"
        },
        {
            title: "Github Developers",
            image: "github",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "1200",
            link: "https://cloud.google.com/"
        },
        {
            title: "Facebook Developers",
            image: "meta",
            extension: "webp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1280",
            height: "851",
            link: "https://cloud.google.com/"
        },
        {
            title: "Visual Studio Code",
            image: "vscode",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1080",
            height: "1080",
            link: "https://code.visualstudio.com/"
        }, 
        {
            title: "Python",
            image: "python",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "1200",
            link: "https://www.python.org/"
        }, 
        {
            title: "Jupyter Notebook",
            image: "jupyter",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "1391",
            link: "https://jupyter.org/"
        }, 
        {
            title: "NumPy",
            image: "numpy",
            extension: "svg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "2336",
            height: "2500",
            link: "https://numpy.org/"
        }, 
        {
            title: "Pandas",
            image: "pandas",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "486",
            link: "https://pandas.pydata.org/"
        }, 
        {
            title: "Seaborn",
            image: "seaborn",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "400",
            height: "400",
            link: "https://seaborn.pydata.org/"
        }, 
        {
            title: "Netlify",
            image: "netlify",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "490",
            link: "https://www.netlify.com/"
        }, 
        {
            title: "Font Awesome",
            image: "fontawesome",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "490",
            link: "https://www.fontawesome.com/"
        }, 
        {
            title: "Google Sheets",
            image: "sheets",
            extension: "png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            width: "1200",
            height: "1650",
            link: "https://workspace.google.com/products/sheets/"
        }
    ];

    return (
        <div>
            <Navbar information session = {session}/>
            <Title/>
            <Card contents = {contents} title = "Software" description = "โปรแกรมที่ใช้ในการพัฒนาเว็บแอปพลิเคชันและโมเดลในการพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต"/>
        </div>
    )
}

export default page