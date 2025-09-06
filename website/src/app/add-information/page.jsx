"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { redirect } from "next/navigation";

// import from components
import Navbar from "../components/Navbar";
import Message from "../components/Message";

function page() {
    const { data: session } = useSession();
    if (!session) redirect ("/");
        
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [predictedGPA, setPredictedGPA] = useState(null);

    const [inputs, setInputs] = useState([
        ["Thai", "", "", "", "", "", ""],
        ["English - Basic", "", "", "", "", "", ""],
        ["English - Additional", "", "", "", "", "", ""],
        ["Math - Basic", "", "", "", "", "", ""],
        ["Math - Additional", "", "", "", "", "", ""],
        ["Science", "", "", "", "", "", ""],
        ["Physics", "", "", "", "", "", ""],
        ["Chemistry", "", "", "", "", "", ""],
        ["Biology", "", "", "", "", "", ""],
        ["Computer", "", "", "", "", "", ""],
        ["Robot", "", "", "", "", "", ""],
        ["Project", "", "", "", "", "", ""],
        ["Social", "", "", "", "", "", ""],
        ["Social - History / Buddhism", "", "", "", "", "", ""],
        ["Health", "", "", "", "", "", ""],
        ["PE", "", "", "", "", "", ""],
        ["Art", "", "", "", "", "", ""],
        ["Career", "", "", "", "", "", ""]
    ]);

    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [alert, setAlert] = useState(false);

    const resetAlert = () => {
        setAlert(false);
        setMessage("");
        setType("");
    };
    
    const handleInput = (index, fieldIndex, value) => {
        const newInputs = [...inputs];
        newInputs[index] = [...newInputs[index]]
        newInputs[index][fieldIndex] = value;
        setInputs(newInputs);

        resetAlert();
    };

    const handleReset = () => {
        setInputs([
            ["Thai", "", "", "", "", "", ""],
            ["English - Basic", "", "", "", "", "", ""],
            ["English - Additional", "", "", "", "", "", ""],
            ["Math - Basic", "", "", "", "", "", ""],
            ["Math - Additional", "", "", "", "", "", ""],
            ["Science", "", "", "", "", "", ""],
            ["Physics", "", "", "", "", "", ""],
            ["Chemistry", "", "", "", "", "", ""],
            ["Biology", "", "", "", "", "", ""],
            ["Computer", "", "", "", "", "", ""],
            ["Robot", "", "", "", "", "", ""],
            ["Project", "", "", "", "", "", ""],
            ["Social", "", "", "", "", "", ""],
            ["Social - History / Buddhism", "", "", "", "", "", ""],
            ["Health", "", "", "", "", "", ""],
            ["PE", "", "", "", "", "", ""],
            ["Art", "", "", "", "", "", ""],
            ["Career", "", "", "", "", "", ""]
        ]);
        resetAlert();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (let i = 0; i < inputs.length; i++) {
            for (let j = 1; j < inputs[i].length; j++) {
                if (inputs[i][j] === "") inputs[i][j] = "0";
            }
        }

        let credits_studied = [[], [], [], [], []];
        let credits_earned = [[], [], [], [], []];
        let credits_studied_SUM = [[], [], [], [], []];
        let credits_earned_SUM = [[], [], [], [], []];
        let gpaSubjects = [[], [], [], [], []];
        let gpa = [[], [], [], [], []];
        let api = [];

        for (let i = 0; i < inputs.length; i++) {
            for (let j = 0; j < credits_studied.length; j++) {
                credits_studied[j].push(inputs[i][1]);
                credits_earned[j].push(inputs[i][1]);
                gpaSubjects[j].push(inputs[i][j + 2]);
            }
        }

        for (let i = 0; i < credits_studied.length; i++) {
            for (let j = 0; j < credits_studied[i].length; j++) {
                credits_studied[i][j] = credits_studied[i][j] * 1;
                gpaSubjects[i][j] = Number(gpaSubjects[i][j]);
                credits_earned[i][j] = credits_earned[i][j] * (gpaSubjects[i][j] > 0 ? 1 : 0);
            }
        }

        for (let i = 0; i < gpa.length; i++) {
            for (let j = 0; j < gpaSubjects.length; j++) {
                gpa[i].push(Number(gpaSubjects[i][j]) * Number(credits_studied[i][j]));
            }
        }

        for (let i = 0; i < credits_studied.length; i++) {
            credits_studied_SUM[i] = credits_studied[i].reduce((a, b) => a + b, 0);
            credits_earned_SUM[i] = credits_earned[i].reduce((a, b) => a + b, 0);
            gpa[i] = gpa[i].reduce((a, b) => a + (isNaN(b) ? 0 : b), 0);
        }

        for (let i = 0; i < gpa.length; i++) {
            gpa[i] = Number((gpa[i] / credits_studied_SUM[i]).toFixed(2));
            gpaSubjects[i] = gpaSubjects[i].map(Number);
            api.push([...gpaSubjects[i], credits_studied_SUM[i], credits_earned_SUM[i], gpa[i]]);
        }

        const apiData = api.flat();

        for (let i = 0; i < api.length; i++) {
            if (isNaN(api[i])) api[i] = 0;
        }
        for (let i = 0; i < gpa.length; i++) {
            if (isNaN(gpa[i])) gpa[i] = 0;
        }

        for (let i = 0; i < gpaSubjects.length; i++) {
            if (gpaSubjects[i].reduce((a, b) => a + b, 0) === 0) {
                for (let j = 0; j < credits_studied[i].length; j++) {
                    credits_studied[i][j] = 0;
                }

                credits_studied_SUM[i] = 0;
            }
        }

        try {
            const response = await fetch("/api/modelData/", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({
                    userID: session?.user?.id,
                    dataset: inputs,
                    features: apiData,
                    gpa: gpa
                }),
            });

            if (response.ok) {
                setAlert(true);
                setMessage("Data has been successfully saved.");
                setType("success");
            } else {
                setAlert(true);
                setMessage("An error occurred while save the data." || error);
                setType("error");
            }
        } catch (error) {
            setAlert(true);
            setMessage("An error occurred while submitting GPA." || error);
            setType("error");
        }
    }

    return (
        <div>
            <Navbar addInfo session = {session}/>
            <div className = "p-4">
                <form onSubmit = {handleSubmit} className = "container mx-auto justify-self-center flex flex-col items-center gap-4 h-[calc(100vh-12rem)] mt-12 justify-center">
                    <div className = "flex flex-col gap-4 max-w-full w-max bg-white p-4 md:p-8 rounded-2xl shadow-md" data-aos = "fade-up">
                        <Message message = {message} type = {type} alert = {alert}/>
                        <div className = "flex gap-4">
                            <div className = "flex overflow-x-auto styleScrollbar">
                                <div className = "border border-[#ececec] rounded-lg rounded-r-none border-r-0">
                                    <div className = "w-28">
                                        <div className = "bg-[#171717] flex flex-col justify-center items-center h-14 rounded-t-lg rounded-r-none">
                                            <div className = "w-full outline-none text-xs gap-2 flex justify-center items-center text-white">
                                                <i className = "fa-solid fa-book"></i>
                                                <h1 className = "text-base font-medium">Subject</h1>
                                            </div>
                                        </div>
                                        <div className = "w-full">
                                            <div className = "w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec] min-h-8 h-8">Credit</div>
                                            <div className = "w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec] min-h-8 h-8">GPA 1</div>
                                            <div className = "w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec] min-h-8 h-8">GPA 2</div>
                                            <div className = "w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec] min-h-8 h-8">GPA 3</div>
                                            <div className = "w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec] min-h-8 h-8">GPA 4</div>
                                            <div className = "w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec] min-h-8 h-8">GPA 5</div>
                                        </div>
                                    </div>
                                </div>
                                {inputs.map((input, index) => {
                                    const parts = inputs[index][0] ? inputs[index][0].split(" - ") : ["", ""];
                                    return (
                                        <div key = {index} className = {`border border-[#ececec] rounded-lg ${(index === 0 && inputs.length > 1) && "rounded-r-none border-r-0"} ${(index !== 0 && index !== inputs.length - 1 && inputs.length >= 3) && "rounded-none border-r-0"} rounded-l-none`}>
                                            <div className = "w-28">
                                                <div className = {`bg-[#171717] flex flex-col justify-center items-center h-14 rounded-t-lg ${inputs[0] === "" ? "text-[#9497a1]" : "text-white"} ${(index === 0 && inputs.length > 1) && "rounded-r-none"} ${(index !== 0 && index !== inputs.length - 1 && inputs.length >= 3) && "rounded-t-none"} rounded-l-none`}>
                                                    <div className = "w-full outline-none text-xs gap-2 flex justify-center items-center">
                                                        <i className = {`${(parts[0] === "Thai" || parts[0] === "English") && "fa-solid fa-language"} ${parts[0] === "Math" && "fa-solid fa-calculator"} ${(parts[0] === "Science" || parts[0] === "Physics") && "fa-solid fa-atom"} ${parts[0] === "Chemistry" && "fa-solid fa-flask"} ${parts[0] === "Biology" && "fa-solid fa-microscope"} ${parts[0] === "Computer" && "fa-solid fa-computer"} ${parts[0] === "Robot" && "fa-solid fa-robot"} ${parts[0] === "Project" && "fa-solid fa-diagram-project"} ${parts[0] === "Social" && "fa-solid fa-people-group"} ${(parts[0] === "Social" && parts[1] === "History / Buddhism") && "fa-solid fa-dharmachakra"} ${parts[0] === "Health" && "fa-solid fa-book-medical"} ${parts[0] === "PE" && "fa-solid fa-dumbbell"} ${parts[0] === "Art" && "fa-solid fa-palette"} ${parts[0] === "Career" && "hidden"}`}></i>
                                                        <h1 className = "text-base font-medium">{parts[0] || "Subject"}</h1>
                                                    </div>
                                                    {parts[1] !== "" && (
                                                        <div className = "w-full text-[10px] font-medium outline-none text-center">{parts[1]}</div>
                                                    )}
                                                </div>
                                                <div className = "w-full">
                                                    <input value = {inputs[index][1]} type = "number" onChange = {(e) => handleInput(index, 1, e.target.value)} className = "no-spinner w-full text-sm font-medium px-2 min-h-8 h-8 outline-none text-center border-b border-[#ececec]" placeholder = "Credit"/>
                                                    {input.slice(2).map((value, i) => (
                                                        <input type = "number" key = {i} value = {value} onChange = {(e) => handleInput(index, i + 2, e.target.value)} className = "no-spinner w-full text-sm font-medium px-2 min-h-8 h-8 outline-none text-center border-b border-[#ececec]" placeholder = {`GPA ${i + 1}`}/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className = {`flex gap-x-4 gap-y-2 max-xxs:flex-col justify-center ${inputs.length >= 3 ? "flex-row" : "flex-col"}`}>
                            <button type = "submit" className = {`${inputs.length < 3 && "w-full"} ${inputs.length < 5 ? "w-1/2" : "w-64"} max-xxs:w-full py-2 bg-[#171717] border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center`}>Submit {predictedGPA !== null ? predictedGPA : ""}</button>
                            <button type = "button" onClick = {handleReset} className = {`${inputs.length < 3 && "w-full"} ${inputs.length < 5 ? "w-1/2" : "w-64"} max-xxs:w-full py-2 bg-[#f55555] border-2 border-[#f55555] hover:bg-white hover:text-[#f55555] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center`}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page

