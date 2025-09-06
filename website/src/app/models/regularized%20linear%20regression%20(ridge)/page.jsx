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
import Count from "@/app/components/Count";

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
            link: ""
        }
    ];
    const contentsEvaluation = [
        {
            title: "R<sup>2</sup>",
            image: "-",
            extension: "-",
            content: "98.92523%",
            description: "วัดความแม่นยำของโมเดล",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            link: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html"
        },
        {
            title: "MSE",
            image: "-",
            extension: "-",
            content: "0.0220779",
            description: "วัดความคลาดเคลื่อนเฉลี่ยยกกำลังสองระหว่างค่าจริงกับค่าพยากรณ์",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            link: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_squared_error.html"
        },
        {
            title: "√MSE",
            image: "-",
            extension: "-",
            content: "0.1485865",
            description: "ขนาดความคลาดเคลื่อนเฉลี่ยของโมเดล",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            link: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.root_mean_squared_error.html"
        },
        {
            title: "MAE",
            image: "-",
            extension: "-",
            content: "0.1066574",
            description: "วัดความคลาดเคลื่อนเฉลี่ยสัมบูรณ์ระหว่างค่าจริงกับค่าพยากรณ์",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            link: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_absolute_error.html"
        }
    ]
    
    return (
        <div>
            <Navbar regularizedLinearRegressionRidge/>
            <Title/>
            <TitleFooter title = "Regularized Linear Regression (Ridge)" description = "การถดถอยเชิงเส้นแบบมีการปรับค่าลงโทษ"/>
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
            <Count/>
            <Card contents = {contentsEvaluation} subTitle = "Model" title = "Evaluation" inverse description = "ประเมินผลโมเดล" h = "h-40"/>
            <Footer typeAdmin regularizedLinearRegressionRidge session = {session}/>
        </div>
    )
}

export default page
