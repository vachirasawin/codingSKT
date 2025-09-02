"use client";

// import from Next.js
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import TitleFooter from "../components/TitleFooter";

function page() {
    const { data: session } = useSession();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const contentsTeam = [
        {
            title: "Linear Regression",
            image: "Linear-Regression",
            extension: "png",
            content: "Content",
            description: "Description",
            width: "2373",
            height: "1311",
            reverse: false
        },
        {
            title: "Polynomial Regression",
            image: "Polynomial-Regression",
            extension: "png",
            content: "Content",
            description: "Description",
            width: "2373",
            height: "1311",
            reverse: true
        },
        {
            title: "Regularized Linear Regression (Ridge)",
            image: "Regularized-Linear-Regression_Ridge",
            extension: "png",
            content: "Content",
            description: "Description",
            width: "2373",
            height: "1311",
            reverse: false
        },
        {
            title: "Decision Tree Regression",
            image: "Decision-Tree-Regression",
            extension: "png",
            content: "Content",
            description: "Description",
            width: "2373",
            height: "1311",
            reverse: true
        }
    ];
    
    return (
        <div>
            <Navbar models/>
            <Title/>
            <TitleFooter title = "Models" description = "โมเดลการพยากรณ์ช่วงของผลการเรียนของผู้เรียนในอนาคต"/>
            <div className = "px-4 bg-white">
                {contentsTeam.map((content, index) => (
                    <div className =  {`container border-b border-[#ececec] mx-auto justify-self-center flex ${content.reverse ? "flex-row-reverse" : "flex-row"} justify-around flex-wrap-reverse items-center gap-16 max-md:gap-8 py-24 max-md:py-4`} key = {content.title}>
                        <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                            <div className = "flex flex-col gap-7 max-md:gap-4">
                                <div data-aos = "fade-up">
                                    <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">
                                        <span>coding</span>
                                        <span className = "text-[#1d9dda]">S</span>
                                        <span className = "text-[#df69a0]">K</span>
                                        <span>T</span>
                                    </h1>
                                    <h2 className = "text-md max-md:text-xs font-medium">{content.title}</h2>
                                    <div className = "w-36 border-2 border-blue-500 rounded-md mt-2"></div>
                                </div>
                                <p className = "text-[#9497a1] text-xl max-md:text-base" data-aos = "fade-up">
                                    {content.content}
                                </p>
                            </div>
                        </div>
                        <div className = "w-max h-max p-4 rounded-2xl shadow-md bg-white" data-aos = "fade-up">
                            <Image src = {`/${content.image}.${content.extension}`} unoptimized width = {content.width} height = {content.height} className = "object-contain w-lg max-lg:w-full" alt = {content.title}/>
                        </div>
                    </div>
                ))}
            </div>
            <Footer models session = {session}/>
        </div>
    )
}

export default page
