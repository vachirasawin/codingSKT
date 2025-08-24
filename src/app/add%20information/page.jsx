"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../components/Navbar";
import Message from "../components/Message";

function page() {
    const { data: session } = useSession();
    //if (!session) redirect ("/");
        
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    const [inputs, setInputs] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]);
    const [subject, setSubjects] = useState([
        ["Thai"],
        ["English - Basic"],
        ["English - Additional"],
        ["Math - Basic"],
        ["Math - Additional"],
        ["Science"],
        ["Physics"],
        ["Chemistry"],
        ["Biology"],
        ["Computer"],
        ["Robot"],
        ["Project"],
        ["Social"],
        ["Social - History / Buddhism"],
        ["Health"],
        ["PE"],
        ["Art"],
        ["Career"]
    ]);

    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [alert, setAlert] = useState(false);

    const resetAlert = () => {
        setAlert(false);
        setMessage("");
        setType("");
    };

    const handleAddInput = () => {
        setInputs(prev => {
            const gpaCount = prev[0].length - 4;
            const newInput = ["", "", "", "", ...Array(gpaCount).fill("")];
            return [...prev, newInput];
        });
    };
    const handleRemoveInput = (indexToRemove) => {
        setInputs(prev => {
            if (prev.length <= 1) return prev;
            return prev.filter((_, index) => index !== indexToRemove);
        });
    };
    
    const handleInput = (index, fieldIndex, value) => {
        setInputs(prev => {
            const updated = [...prev];
            updated[index][fieldIndex] = value;
            return updated;
        });

        console.log(inputs)
    };
    const handleReset = () => {
        setInputs([
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""]
        ]);
        resetAlert();
    };

    const handleAddGPA = () => {
        setInputs(prevInputs =>
            prevInputs.map(row => {
                const gpaCount = row.length - 4;
                if (gpaCount < 5) {
                    return [...row, ""];
                }
                return row;
            })
        );
    };
    const handleRemoveGPA = () => {
        setInputs((prevInputs) =>
            prevInputs.map(row => {
                if (row.length > 5) {
                    return row.slice(0, -1);
                }
                return row; 
            })
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const cleanedInputs = inputs.map((input) =>
            input.map((value) => (value === "" ? "-" : value))
        );

        const hasIncomplete = cleanedInputs.some((input) =>
            input[0] === "-" || input[2] === "-" || input[3] === "-" || input[4] === "-"
        );
        if (hasIncomplete) {
            setAlert(true);
            setMessage("Please complete all required fields.");
            setType("error");
            return;
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
                            <div className = "h-full w-10 gap-4 flex flex-col">
                                <div onClick = {handleAddGPA} className = "h-1/2 w-full border border-[#ececec] flex justify-center items-center rounded-xl text-[#171717] text-sm transition-all duration-200 hover:bg-[#171717] hover:text-white">
                                    <i className = "fa-solid fa-plus"></i>
                                </div>
                                <div onClick = {handleRemoveGPA} className = "h-1/2 w-full border border-[#ececec] flex justify-center items-center rounded-xl text-[#f55555] text-sm transition-all duration-200 hover:bg-[#f55555] hover:text-white">
                                    <i className = "fa-solid fa-minus"></i>
                                </div>
                            </div>
                            <div className = "flex overflow-x-auto styleScrollbar">
                                {inputs.map((input, index) => (
                                    <div key = {index} className = {`border border-[#ececec] rounded-lg ${(index === 0 && inputs.length > 1) && "rounded-r-none border-r-0"} ${(index !== 0 && index !== inputs.length - 1 && inputs.length >= 3) && "rounded-none border-r-0"} ${(index === inputs.length - 1 && inputs.length > 1) && "rounded-l-none"}`}>
                                        <div className = "w-28">
                                            <Listbox value = {`${inputs[index][0]}${inputs[index][1] ? ` - ${inputs[index][1]}` : ""}`} onChange = {(val) => {const parts = val.split(" - "); const title = parts[0] || ""; const description = parts[1] || ""; handleInput(index, 0, title); handleInput(index, 1, description); resetAlert();}}>
                                                <Listbox.Button className = "w-28 h-14 absolute opacity-0"/>
                                                <Listbox.Options className = "absolute bg-white border border-[#ececec] text-sm text-center rounded-xl max-h-60 overflow-y-auto styleScrollbar outline-none mt-14">
                                                    {subject.map((subject, i) => (
                                                        <Listbox.Option key = {i} value = {subject[0]} className = {({ active })  => `cursor-pointer px-4 py-2 trnasition-all duration-100 ${active ? "bg-blue-500 text-white" : "text-[#171717]"}`}>
                                                            {subject[0]}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Listbox>
                                            <div className = {`bg-[#171717] flex flex-col justify-center items-center h-14 rounded-t-lg ${input[0] === "" ? "text-[#9497a1]" : "text-white"} ${(index === 0 && inputs.length > 1) && "rounded-r-none"} ${(index !== 0 && index !== inputs.length - 1 && inputs.length >= 3) && "rounded-t-none"} ${(index === inputs.length - 1 && inputs.length > 1) && "rounded-l-none"}`}>
                                                <div className = "w-full outline-none text-xs gap-2 flex justify-center items-center">
                                                    <i className = {`${(input[0] === "Thai" || input[0] === "English") && "fa-solid fa-language"} ${input[0] === "Math" && "fa-solid fa-calculator"} ${(input[0] === "Science" || input[0] === "Physics") && "fa-solid fa-atom"} ${input[0] === "Chemistry" && "fa-solid fa-flask"} ${input[0] === "Biology" && "fa-solid fa-microscope"} ${input[0] === "Computer" && "fa-solid fa-computer"} ${input[0] === "Robot" && "fa-solid fa-robot"} ${input[0] === "Project" && "fa-solid fa-diagram-project"} ${input[0] === "Social" && "fa-solid fa-people-group"} ${(input[0] === "Social" && input[1] === "History / Buddhism") && "fa-solid fa-dharmachakra"} ${input[0] === "Health" && "fa-solid fa-book-medical"} ${input[0] === "PE" && "fa-solid fa-dumbbell"} ${input[0] === "Art" && "fa-solid fa-palette"} ${input[0] === "Career" && "hidden"}`}></i>
                                                    <h1 className = "text-base font-medium">{input[0] || "Subject"}</h1>
                                                </div>
                                                {input[1] !== "" && (
                                                    <div className = "w-full text-[10px] font-medium outline-none text-center">{input[1]}</div>
                                                )}
                                            </div>
                                            <div className = "w-full">
                                                <input type = "number" value = {input[2]} onChange = {(e) => handleInput(index, 2, e.target.value)} className = "no-spinner w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec]" placeholder = "Credit Studied"/>
                                                <input type = "number" value = {input[3]} onChange = {(e) => handleInput(index, 3, e.target.value)} className = "no-spinner w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec]" placeholder = "Credit Earned"/>
                                                {input.slice(4).map((value, i) => (
                                                    <input type = "number" key = {i} value = {value} onChange = {(e) => handleInput(index, i + 4, e.target.value)} className = "no-spinner w-full text-sm font-medium px-2 py-1 outline-none text-center border-b border-[#ececec]" placeholder = {`GPA ${i + 1}`}/>
                                                ))}
                                            </div>
                                            <div onClick = {() => {handleRemoveInput(inputs.length - 1); resetAlert();}} className = {`bg-[#f55555] text-center text-sm font-medium text-white py-1 rounded-b-lg ${(index === 0 && inputs.length > 1) && "rounded-br-none"} ${(index !== 0 && index !== inputs.length - 1 && inputs.length >= 3) && "rounded-b-none"} ${(index === inputs.length - 1 && inputs.length > 1) && "rounded-bl-none"}`}>
                                                <i className = "fa-solid fa-xmark"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className = "flex gap-4 justify-center items-center">
                            <div onClick = {handleAddInput} className = {`${inputs.length < 5 ? "w-full" : "w-130"} h-10 gap-3 text-sm rounded-xl flex justify-center items-center border border-[#ececec] hover:border-blue-500 hover:text-blue-500 transition-all duration-200`}>
                                <i className = "fa-solid fa-plus"></i>
                                <p>Subject</p>
                            </div>
                        </div>
                        <div className = {`flex gap-x-4 gap-y-2 max-xxs:flex-col justify-center ${inputs.length >= 3 ? "flex-row" : "flex-col"}`}>
                            <button type = "submit" className = {`${inputs.length < 3 && "w-full"} ${inputs.length < 5 ? "w-1/2" : "w-64"} max-xxs:w-full py-2 bg-[#171717] border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center`}>Submit</button>
                            <button type = "button" onClick = {handleReset} className = {`${inputs.length < 3 && "w-full"} ${inputs.length < 5 ? "w-1/2" : "w-64"} max-xxs:w-full py-2 bg-[#f55555] border-2 border-[#f55555] hover:bg-white hover:text-[#f55555] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center`}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page