// import from Next.js
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Card from "../components/Card";
import Footer from "../components/Footer";

function page() {
    const { data: session } = useSession();

    const contentsDevelopers = [
        {
            title: "Mr. Tiyasak Armedeenlamyan",
            image: "logo",
            extension: "png",
            content: "Lorem ipsum dolor sit amet consectetur.",
            description: "นายติยศักดิ์ อามีดีนลามยาน",
            width: "1000",
            height: "1000",
            link: "-",
            symbol: "-"
        },
        {
            title: "Mr. Ratchanon Tribawonkul",
            image: "logo",
            extension: "png",
            content: "Lorem ipsum dolor sit amet consectetur.",
            description: "นายรัชชานนท์ ตรีบวรกุล",
            width: "1000",
            height: "1000",
            link: "-",
            symbol: "-"
        },
        {
            title: "Mr. Vachirasawin Mahantaphalanon",
            image: "logo",
            extension: "png",
            content: "Lorem ipsum dolor sit amet consectetur.",
            description: "นายวชิรัศวิน มหันตพลานนท์",
            width: "1000",
            height: "1000",
            link: "-",
            symbol: "-"
        },
        {
            title: "Mr. Aiyakarn phorphakwaen",
            image: "logo",
            extension: "png",
            content: "Lorem ipsum dolor sit amet consectetur.",
            description: "นายอัยการ เพราะผักแว่น",
            width: "1000",
            height: "1000",
            link: "-",
            symbol: "-"
        }
    ];
    const contentsSoftware = [
        {
            title: "Node.js",
            image: "nodejs",
            extension: "png",
            content: "Runtime สำหรับรัน JavaScript บนเซิร์ฟเวอร์ได้",
            description: "version 22.17.1",
            width: "1200",
            height: "735",
            link: "https://nodejs.org/en",
            symbol: "-"
        },
        {
            title: "Next.js",
            image: "nextjs",
            extension: "avif",
            content: "Framework สำหรับพัฒนาเว็บแอปพลิเคชัน",
            description: "version 15.4.6",
            width: "512",
            height: "512",
            link: "https://nextjs.org/",
            symbol: "-"
        },
        {
            title: "React",
            image: "react",
            extension: "png",
            content: "Library JavaScript สำหรับสร้าง UI",
            description: "version 19.1.0",
            width: "800",
            height: "720",
            link: "https://react.dev/",
            symbol: "-"
        },
        {
            title: "Tailwind CSS",
            image: "tailwindcss",
            extension: "png",
            content: "Framework ของ CSS ที่ใช้สำหรับออกแบบ UI แบบรวดเร็ว",
            description: "",
            width: "1280",
            height: "770",
            link: "https://tailwindcss.com/",
            symbol: "-"
        },
        {
            title: "Font Awesome",
            image: "fontawesome",
            extension: "png",
            content: "Icon library สำหรับเอาสัญลักษณ์ต่าง ๆ มาใช้",
            description: "",
            width: "1200",
            height: "490",
            link: "https://www.fontawesome.com/",
            symbol: "-"
        },
        {
            title: "Color Hunt",
            image: "colorhunt",
            extension: "gif",
            content: "Website ที่รวบรวมสีต่าง ๆ ที่เข้ากันได้อย่างสวยงาม",
            description: "",
            width: "320",
            height: "320",
            link: "https://colorhunt.co/",
            symbol: "-"
        },
        {
            title: "Mongoose",
            image: "mongoose",
            extension: "png",
            content: "Library สำหรับทำงานกับฐานข้อมูล",
            description: "version 8.17.1",
            width: "280",
            height: "280",
            link: "https://mongoosejs.com/",
            symbol: "-"
        },
        {
            title: "MongoDB Atlas",
            image: "mongodb",
            extension: "png",
            content: "ฐานข้อมูลแบบ MongoDB แบบคลาวด์",
            description: "",
            width: "512",
            height: "512",
            link: "https://www.mongodb.com/products/platform",
            symbol: "-"
        },
        {
            title: "BCrypt HASH",
            image: "bcrypt",
            extension: "webp",
            content: "Algorithm สำหรับเข้ารหัสของรหัสผ่าน",
            description: "version 3.0.2",
            width: "400",
            height: "400",
            link: "https://www.npmjs.com/package/bcryptjs",
            symbol: "-"
        },
        {
            title: "NextAuth.js",
            image: "nextauthjs",
            extension: "png",
            content: "Library สำหรับจัดการระบบ authentication",
            description: "version 4.24.11",
            width: "327",
            height: "361",
            link: "https://next-auth.js.org/",
            symbol: "-"
        },
        {
            title: "Google Developers",
            image: "google",
            extension: "webp",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "250",
            height: "250",
            link: "https://developers.google.com/?hl=th",
            symbol: "-"
        },
        {
            title: "Github Developers",
            image: "github",
            extension: "png",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "1200",
            height: "1200",
            link: "https://developer.github.com/",
            symbol: "-"
        },
        {
            title: "Facebook Developers",
            image: "meta",
            extension: "webp",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "1280",
            height: "851",
            link: "https://developers.facebook.com/?locale=th_TH",
            symbol: "-"
        },
        {
            title: "Visual Studio Code",
            image: "vscode",
            extension: "png",
            content: "Code editor สำหรับใช้เพื่อพัฒนาเว็บแอปพลิเคชันและโมเดล",
            description: "version 1.103.1",
            width: "1080",
            height: "1080",
            link: "https://code.visualstudio.com/",
            symbol: "-"
        },
        {
            title: "Google Chrome",
            image: "google",
            extension: "webp",
            content: "Web Browser ใช้สำหรับแสดงเว็บแอพลิเคชันขณะพัฒนา",
            description: "version 139.0.7258.128",
            width: "250",
            height: "256",
            link: "https://www.google.com/intl/th_th/chrome/",
            symbol: "-"
        },
        {
            title: "Vercel",
            image: "vercel",
            extension: "png",
            content: "Platform สำหรับ host เว็บไซต์แบบ dynamic",
            description: "",
            width: "360",
            height: "360",
            link: "https://vercel.com/",
            symbol: "-"
        },
        {
            title: "Git",
            image: "git",
            extension: "png",
            content: "โปรแกรมสำหรับ push source code เว็บแอปพลิเคชันขึ้น github",
            description: "version 2.50.1.windows.1",
            width: "383",
            height: "383",
            link: "https://git-scm.com/",
            symbol: "-"
        },
        {
            title: "Python",
            image: "python",
            extension: "png",
            content: "ภาษาโปรแกรมหลักที่ใช้ในการพัฒนาโมเดล",
            description: "version 3.13.5",
            width: "1200",
            height: "1200",
            link: "https://www.python.org/",
            symbol: "-"
        },
        {
            title: "Jupyter Notebook",
            image: "jupyter",
            extension: "png",
            content: "โปรแกรมสำหรับรันโค้ด python ทีละเซลล์",
            description: "version 7.2.2",
            width: "1200",
            height: "1391",
            link: "https://jupyter.org/",
            symbol: "-"
        },
        {
            title: "NumPy",
            image: "numpy",
            extension: "png",
            content: "Library สำหรับใช้คำนวณทางคณิตศาสตร์และจัดการข้อมูล array",
            description: "version 2.3.1",
            width: "2336",
            height: "2500",
            link: "https://numpy.org/",
            symbol: "-"
        },
        {
            title: "Pandas",
            image: "pandas",
            extension: "png",
            content: "Library สำหนับใช้อ่านข้อมูลจากตาราง (.csv)",
            description: "version 2.3.0",
            width: "1200",
            height: "486",
            link: "https://pandas.pydata.org/",
            symbol: "-"
        },
        {
            title: "Seaborn",
            image: "seaborn",
            extension: "png",
            content: "Library สำหรับใช้สร้างกราฟข้อมูล",
            description: "version 0.13.2",
            width: "400",
            height: "400",
            link: "https://seaborn.pydata.org/",
            symbol: "-"
        },
        {
            title: "Google Sheets",
            image: "sheets",
            extension: "png",
            content: "โปรแกรมสำหรับสร้างตารางเพื่อรวบรวมข้อมูล",
            description: "",
            width: "1200",
            height: "1650",
            link: "https://workspace.google.com/products/sheets/",
            symbol: "-"
        }
    ];
    const contentsHardware = [
        {
            title: "AMD Ryzen 7 5700U",
            image: "-",
            content: "AMD Ryzen 7 5700U with Radeon Graphics 1.80GHz",
            description: "Processor",
            link: "-",
            symbol: "fa-solid fa-microchip"
        },
        {
            title: "16GB DDR4",
            image: "-",
            content: "16GB DDR4 3200MHz",
            description: "Installed RAM",
            link: "-",
            symbol: "fa-solid fa-memory"
        },
        {
            title: "SSD NVMe 512GB",
            image: "-",
            content: "477GB SSD PC SN530 NVMe WDC 512GB",
            description: "Storage",
            link: "-",
            symbol: "fa-solid fa-warehouse"
        },
        {
            title: "AMD Radeon(TM) Graphics",
            image: "-",
            content: "AMD Radeon(TM) Graphics (496MB)",
            description: "Graphics Card",
            link: "-",
            symbol: "fa-solid fa-microchip"
        },
        {
            title: "Windows 10 Home",
            image: "-",
            content: "Window 10 Home Single Language (version 22H2)",
            description: "OS",
            link: "-",
            symbol: "fa-brands fa-windows"
        },
        {
            title: "64-bit",
            image: "-",
            content: "64-bit operation system, x64-based processor",
            description: "System Type",
            link: "-",
            symbol: "fa-solid fa-computer"
        },
    ];
    const contentsReport = [
        {
            title: "Introduction",
            image: "-",
            extension: "-",
            content: "บทที่ 1 บทนำ",
            description: "Chapter 1",
            width: "-",
            height: "-",
            link: "/introduction.pdf",
            symbol: "fa-solid fa-book"
        },
        {
            title: "Chapter 2",
            image: "-",
            extension: "-",
            content: "บทที่ 2 XXX",
            description: "Chapter 2",
            width: "-",
            height: "-",
            link: "/system-analysis.pdf",
            symbol: "fa-solid fa-book"
        },
        {
            title: "System Analysis",
            image: "-",
            extension: "-",
            content: "บทที่ 3 การวิเคราะห์ระบบ",
            description: "Chapter 3",
            width: "-",
            height: "-",
            link: "/system-analysis.pdf",
            symbol: "fa-solid fa-book"
        },
        {
            title: "Chapter 4",
            image: "-",
            extension: "-",
            content: "บทที่ 4 XXX",
            description: "Chapter 4",
            width: "-",
            height: "-",
            link: "/system-analysis.pdf",
            symbol: "fa-solid fa-book"
        },
        {
            title: "Chapter 5",
            image: "-",
            extension: "-",
            content: "บทที่ 5 XXX",
            description: "Chapter 5",
            width: "-",
            height: "-",
            link: "/system-analysis.pdf",
            symbol: "fa-solid fa-book"
        },
        {
            title: "Chapter 6",
            image: "-",
            extension: "-",
            content: "บทที่ 6 XXX",
            description: "Chapter 6",
            width: "-",
            height: "-",
            link: "/system-analysis.pdf",
            symbol: "fa-solid fa-book"
        }
    ];

    return (
        <div>
            <Navbar aboutUs/>
            <Title/>
            <div className = "px-4 border-b border-[#ececec] bg-white">
                <div className = "container mx-auto justify-self-center flex justify-around flex-wrap-reverse items-center gap-16 max-md:gap-8 py-24 max-md:py-4">
                    <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                        <div className = "flex flex-col gap-7 max-md:gap-4">
                            <div>
                                <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">
                                    <span>coding</span>
                                    <span className = "text-[#1d9dda]">S</span>
                                    <span className = "text-[#df69a0]">K</span>
                                    <span>T</span>
                                </h1>
                                <h2 className = "text-md max-md:text-xs font-medium">AI พยากรณ์ช่วงของเกรดในอนาคตจากข้อมูลเกรดเดิม</h2>
                                <div className = "w-36 border-2 border-blue-500 rounded-md mt-2"></div>
                            </div>
                            <div className = "text-[#9497a1] text-xl max-md:text-base">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?
                                </p>
                            </div>
                        </div>
                        {session && (
                            <div className = "flex gap-2 max-md:flex-col">
                                <Link href = "/add information" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-[#171717] text-white hover:bg-white hover:text-[#171717] h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Add Information</Link>
                                <Link href = "/profile" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Profile</Link>
                            </div>
                        )}
                    </div>
                    <Image src = "/AI.jpg" unoptimized width = {2000} height = {1300} className = "object-contain w-lg max-lg:w-full rounded-2xl shadow-md" alt = "AI"/>
                </div>
            </div>
            <Card contents = {contentsDevelopers} title = "Developers" subTitle = "-" description = "ผู้พัฒนาเว็บแอปพลิเคชันและโมเดลในการพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต" h = "h-84"/>
            <Card contents = {contentsSoftware} title = "Software" subTitle = "We Use" description = "ซอฟแวร์ที่ใช้ในการพัฒนาเว็บแอปพลิเคชันและโมเดลในการพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต" h = "h-72"/>
            <Card contents = {contentsHardware} title = "Hardware" subTitle = "We Use" description = "ฮาร์ดแวร์ที่ใช้ในการพัฒนาเว็บแอปพลิเคชันและโมเดลในการพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต" h = "h-74"/>
            <Card contents = {contentsReport} title = "Report" subTitle = "Project" inverse downloadType description = "ฮาร์ดแวร์ที่ใช้ในการพัฒนาเว็บแอปพลิเคชันและโมเดลในการพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต" h = "h-64"/>
            <Footer aboutUs session = {session}/>
        </div>
    )
}

export default page