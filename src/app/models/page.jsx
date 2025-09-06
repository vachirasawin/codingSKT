"use client";

// import from Next.js
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import TitleFooter from "../components/TitleFooter";
import ReviewInbox from "../components/ReviewInbox";
import ReviewCard from "../components/ReviewCard";
import Count from "../components/Count";

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
            title: "Linear Regression",
            image: "LinearRegression",
            extension: "png",
            content: "Content",
            description: "การถดถอยเชิงเส้น",
            width: "2373",
            height: "1311",
            reverse: false,
            highlight: "เหมาะกับการพยากรณ์เบื้องต้นข้อมูลเป็นลักษณะกราฟเส้นตรง",
            weakness: "อาจพยากรณ์ผลคลาดเคลื่อนถ้าข้อมูลไม่เป็นลักษณะกราฟเส้นตรง",
            link: "models/linear regression"
        },
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
            link: "models/polynomial regression"
        },
        {
            title: "Regularized Linear Regression (Ridge)",
            image: "RegularizedLinearRegression_Ridge",
            extension: "png",
            content: "Content",
            description: "การถดถอยเชิงเส้นแบบมีการปรับค่าลงโทษ",
            width: "2373",
            height: "1311",
            reverse: false,
            highlight: "ลดความซับซ้อนของโมเดล ทำงานได้ดีกว่า Linear Regression ถ้า features บางตัวคล้ายกัน",
            weakness: "ถ้าข้อมูลไม่ซับซ้อนก็ไม่ต่างจาก Linear Regression",
            link: "models/regularized linear regression (ridge)"
        },
        {
            title: "Decision Tree Regression",
            image: "DecisionTreeRegression",
            extension: "png",
            content: "Content",
            description: "การถดถอยแบบต้นไม้ตัดสินใจ",
            width: "2373",
            height: "1311",
            reverse: true,
            highlight: "จับความสัมพันธ์ซับซ้อนและไม่เชิงเส้นได้ดี",
            weakness: "ไม่เสถียร ไม่เหมาะกับข้อมูลต่อเนื่อง",
            link: "models/decision tree regression"
        }
    ];
    
    return (
        <div>
            <Navbar models/>
            <Title/>
            <TitleFooter title = "Models" description = "โมเดลการพยากรณ์ช่วงของผลการเรียนของผู้เรียนในอนาคต"/>
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
                            <div className = "flex gap-2 max-md:flex-col" data-aos = "fade-up">
                                <Link href = {`/${content.link}`} className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-[#171717] text-white hover:bg-white hover:text-[#171717] h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Learn More</Link>
                                {session ? (
                                    <Link href = "/dashboard" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Dashboard</Link>
                                ) : (
                                    <Link href = "/signin" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Sign In</Link>
                                )}
                            </div>
                        </div>
                        <div className = "w-max h-max p-4 rounded-2xl shadow-md bg-white" data-aos = "fade-up">
                            <Image src = {`/${content.image}.${content.extension}`} unoptimized width = {content.width} height = {content.height} className = "object-contain w-lg max-lg:w-full" alt = {content.title}/>
                        </div>
                    </div>
                ))}
            </div>
            <Count/>
            <ReviewCard/>
            <ReviewInbox/>
            <Footer models session = {session}/>
        </div>
    )
}

export default page
