"use client";

// import from Next.js
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import TitleFooter from "../../components/TitleFooter";
import Card from "../../components/Card";

function page() {
    const { data: session } = useSession();

    let typeAdmin = false;
    if (session?.user?.email === "vachirasawin.mah@gmail.com") {
        typeAdmin = true;
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const contents = [
        {
            title: "Polynomial Regression",
            image: "PolynomialRegression",
            extension: "png",
            content: "Content",
            description: "การถดถอยเชิงพหุคณิต",
            width: "2373",
            height: "1311",
            reverse: true,
            highlight: "เหมาะกับการพยากรณ์ที่ข้อมูลเป็นลักษณะกราฟเพิ่ม/ลด",
            weakness: "ถ้าเลือกเลขชี้กำลัง (degree) ของ features สูงไปทำให้เรียนรู้มากเกินไป แต่ถ้าน้อยไปทำให้เรียนรู้น้อยเกินไป",
            link: ""
        }
    ];
    const contentsEvaluation = [
        {
            title: "Predict GPA 2",
            image: "-",
            extension: "-",
            content: "<p>R<sup>2</sup> 62.35565%</p><p>MSE 0.0960205</p>",
            description: "R<sup>2</sup> | Mean Squared Error",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-2"
        },
        {
            title: "Predict GPA 3",
            image: "-",
            extension: "-",
            content: "<p>R<sup>2</sup> -6.08818%</p><p>MSE 16.1054418</p>",
            description: "R<sup>2</sup> | Mean Squared Error",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-3"
        },
        {
            title: "Predict GPA 4",
            image: "-",
            extension: "-",
            content: "<p>R<sup>2</sup> 98.15623%</p><p>MSE 0.0570744</p>",
            description: "R<sup>2</sup> | Mean Squared Error",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-4"
        },
        {
            title: "Predict GPA 5",
            image: "-",
            extension: "-",
            content: "<p>R<sup>2</sup> 97.47572%</p><p>MSE 0.0527377</p>",
            description: "R<sup>2</sup> | Mean Squared Error",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-5"
        },
        {
            title: "Predict GPA 6",
            image: "-",
            extension: "-",
            content: "<p>R<sup>2</sup> 95.50824%</p><p>MSE 0.0986981</p>",
            description: "R<sup>2</sup> | Mean Squared Error",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-6"
        }
    ]
    
    return (
        <div>
            <Navbar polynomialRegression/>
            <Title/>
            <TitleFooter title = "Polynomial Regression" description = "การถดถอยเชิงพหุคณิต"/>
            <div className = "px-4 bg-white">
                {contents.map((content, index) => (
                    <div className =  {`container border-b border-[#ececec] mx-auto justify-self-center flex ${content.reverse ? "flex-row-reverse" : "flex-row"} justify-around flex-wrap-reverse items-center gap-16 max-md:gap-8 py-24 max-md:py-4`} key = {content.title}>
                        <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                            <div className = "flex flex-col gap-7 max-md:gap-4">
                                <div data-aos = "fade-up">
                                    <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">
                                        {content.title}
                                    </h1>
                                    <h2 className = "text-md max-md:text-xs font-medium">{content.description}</h2>
                                    <div className = "w-36 border-2 border-blue-500 rounded-md mt-2"></div>
                                </div>
                                <p className = "text-[#9497a1] text-xl max-md:text-base" data-aos = "fade-up">
                                    {content.content}
                                </p>
                                {(content.highlight !== "" && content.weakness !== "") && (
                                    <div className = "flex flex-col gap-2">
                                        <div className = "flex justify-start gap-2 items-center w-full" data-aos = "fade-up">
                                            <i className = "fa-solid fa-plus text-blue-500 test-sm"></i>
                                            <p className = "text-[#9497a1] text-xl max-md:text-base">
                                                {content.highlight}
                                            </p>
                                        </div>
                                        <div className = "w-full h-0.5 bg-[#ececec] rounded-full" data-aos = "zoom-in-up"></div>
                                        <div className = "flex justify-start gap-2 items-center w-full" data-aos = "fade-up">
                                            <i className = "fa-solid fa-minus text-[#f55555] test-sm"></i>
                                            <p className = "text-[#9497a1] text-xl max-md:text-base">
                                                {content.weakness}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className = "w-max h-max p-4 rounded-2xl shadow-md bg-white" data-aos = "fade-up">
                            <Image src = {`/${content.image}.${content.extension}`} unoptimized width = {content.width} height = {content.height} className = "object-contain w-lg max-lg:w-full" alt = {content.title}/>
                        </div>
                    </div>
                ))}
            </div>
            <Card contents = {contentsEvaluation} subTitle = "Model" title = "Evaluation" inverse description = "ประเมินผลโมเดล" h = "h-68"/>
            <Footer typeAdmin polynomialRegression session = {session}/>
        </div>
    )
}

export default page
