"use client";

// import from Next.js
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Histogram from "../components/Histogram";
import Grid from "../components/Grid";
import Card from "../components/Card";

function page() {
    const { data: session } = useSession();
    const [predictedGPAArray, setPredictedGPAArray] = useState([]);
    let predictedGPALower;
    let predictedGPAUpper;
    let averagePredictedGPA;

    const [dataset, setDataset] = useState(null); 
    const [gpa, setGPA] = useState(null);  

    if (!session) redirect ("/");
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const fetchDecisionTreeRegression = async () => {
            if (!session?.user?.id) return;

            try {
                const response = await fetch("/api/predictGPA/DecisionTreeRegression", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userID: session.user.id }),
                });

                const data = await response.json();
                if (data.predictedGPA !== undefined) {
                    predictedGPAArray.push(data.predictedGPA)
                }
            } catch (error) {
                console.error("Error fetching predicted GPA:", error);
            }
        };
        
        const fetchLinearRegression = async () => {
            if (!session?.user?.id) return;

            try {
                const response = await fetch("/api/predictGPA/LinearRegression", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userID: session.user.id }),
                });

                const data = await response.json();
                if (data.predictedGPA !== undefined) {
                    predictedGPAArray.push(data.predictedGPA)
                }
            } catch (error) {
                console.error("Error fetching predicted GPA:", error);
            }
        };
        
        const fetchPolynomialRegression = async () => {
            if (!session?.user?.id) return;

            try {
                const response = await fetch("/api/predictGPA/PolynomialRegression", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userID: session.user.id }),
                });

                const data = await response.json();
                if (data.predictedGPA !== undefined) {
                    predictedGPAArray.push(data.predictedGPA)
                }
            } catch (error) {
                console.error("Error fetching predicted GPA:", error);
            }
        };
        
        const fetchRegularizedLinearRegression_Ridge = async () => {
            if (!session?.user?.id) return;

            try {
                const response = await fetch("/api/predictGPA/RegularizedLinearRegression_Ridge", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userID: session.user.id }),
                });

                const data = await response.json();
                if (data.predictedGPA !== undefined) {
                    predictedGPAArray.push(data.predictedGPA)
                }
            } catch (error) {
                console.error("Error fetching predicted GPA:", error);
            }
        };

        const fetchModelData = async () => {
            if (!session?.user?.id) return;

            try {
                const response = await fetch(`/api/modelData?userID=${session.user.id}`);
                const data = await response.json();

                if (data && data.dataset && data.gpa) {
                    setDataset(data.dataset);
                    setGPA(data.gpa)
                }
            } catch (error) {
                console.error("Error fetching dataset:", error);
            }
        };

        fetchDecisionTreeRegression();
        fetchLinearRegression();
        fetchPolynomialRegression();
        fetchRegularizedLinearRegression_Ridge();
        fetchModelData();
    }, [session?.user?.id]);

    const sortedPredictedGPAArray = [...predictedGPAArray].sort((a, b) => a - b);

    if (sortedPredictedGPAArray.length > 0) {
        predictedGPALower = Math.max(0, sortedPredictedGPAArray[0]).toFixed(2);
        predictedGPAUpper = Math.min(4, sortedPredictedGPAArray[sortedPredictedGPAArray.length - 1]).toFixed(2);
    }

    averagePredictedGPA = (predictedGPAArray.reduce((a, b) => a + b, 0) / sortedPredictedGPAArray.length).toFixed(2);

    const contentsPredict = [
        {
            title: "Sign In / Sign Up",
            image: "-",
            extension: "-",
            content: "เข้าสู่ระบบเพื่อทำการกรอกข้อมูล",
            description: "เข้าสู่ระบบ",
            width: "-",
            height: "-",
            link: "/signin",
            symbol: "fa-solid fa-arrow-right-to-bracket"
        },
        {
            title: "Add Information",
            image: "-",
            extension: "-",
            content: "เพิ่มข้อมูลเกรดรายวิชาและหน่วยกิตรายวิชา เพื่อทำการพยากรณ์",
            description: "เพิ่มข้อมูล",
            width: "-",
            height: "-",
            link: "/add-information",
            symbol: "fa-solid fa-plus"
        },
        {
            title: "Dashboard",
            image: "-",
            extension: "-",
            content: "ดูการพยากรณ์เกรดในเทอมต่อไปจากผลลัพธ์ของโมเดล",
            description: "พยากรณ์เกรดในเทอมต่อไป",
            width: "-",
            height: "-",
            link: "/dashboard",
            symbol: "fa-solid fa-eye"
        }
    ]

    return (
        <div>
            <Navbar dashboard/>
            <Title/>
            {predictedGPAArray && averagePredictedGPA !== "null" ? (
                <>
                    <div className = "px-4 border-b border-[#ececec] bg-[#f7f7f7]">
                        <div className = "container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 py-24 max-md:py-8 justify-center items-center">
                            <div className = "flex justify-center w-full" data-aos = "fade-up">
                                <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                                    <div className = "flex justify-center items-center gap-2.5 flex-wrap">
                                        <h1 className = "text-4xl font-bold max-md:text-2x">Predict</h1>
                                        <h1 className = "text-4xl font-bold max-md:text-2x text-blue-500">GPA</h1>
                                    </div>
                                    <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full">เกรดในเทอมต่อไปจากการพยากรณ์</p>
                                </div>
                            </div>
                            <div className = "w-max max-xs:w-full max-xs:py-4 py-6 min-xs:px-24 border border-[#ececec] shadow-xl rounded-xl flex justify-center text-center flex-col" data-aos = "fade-up">
                                <div className = "text-6xl max-xs:text-5xl text-blue-500 font-bold flex gap-2 justify-center">
                                    <h1>{predictedGPALower}</h1>
                                    <div className = "flex flex-col justify-center items-center h-max w-max">
                                        <h1 className = "text-[#171717] text-3xl max-xs:text-2xl">{averagePredictedGPA}</h1>
                                        <div className = "h-0.5 w-24 rounded-full bg-[#9497a1] max-md:w-16"></div>
                                    </div>
                                    <h1>{predictedGPAUpper}</h1>
                                </div>
                                <p className = "text-sm max-xs:text-[12px] text-[#9497a1] font-medium">ค่าประมาณการพยากรณ์เกรดในเทอมต่อไป</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Card contents = {contentsPredict} title = "How To Predict" subTitle = "GPA" description = "วิธีการพยากรณ์เกรดในเทอมต่อไป" h = "h-70"/>
            )}
            {dataset && (
                <>
                    <Grid data = {dataset}/>
                    {gpa.map((data, index) => (
                        <Histogram key = {index + 1} data = {dataset} bg = "bg-[#f7f7f7]" title = {index + 1} subTitle = "GPA" inverse description = {`เกรดในเทอมที่ ${index + 1}`} gpa = {index + 1} information/>
                    ))}
                    <Histogram data = {dataset} bg = "bg-[#f7f7f7]" title = "Average" subTitle = "GPA" description = "ค่าเฉลี่ยเกรดรายวิชา" predict/>
                </>
            )}
            <Footer dashboard/>
        </div>
    )
}

export default page