"use client";

// import from Next.js
import React from "react";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Card from "../components/Card";
import Footer from "../components/Footer";

function page() {
    const { data: session } = useSession();

    const contentsSoftware = [
        {
            title: "Node.js",
            image: "nodejs",
            extension: "png",
            content: "Runtime สำหรับรัน JavaScript บนเซิร์ฟเวอร์ได้",
            description: "version 22.17.1",
            width: "1200",
            height: "735",
            link: "https://nodejs.org/en"
        },
        {
            title: "Next.js",
            image: "nextjs",
            extension: "avif",
            content: "Framework สำหรับพัฒนาเว็บแอปพลิเคชัน",
            description: "version 15.4.6",
            width: "512",
            height: "512",
            link: "https://nextjs.org/"
        },
        {
            title: "React",
            image: "react",
            extension: "png",
            content: "Library JavaScript สำหรับสร้าง UI",
            description: "version 19.1.0",
            width: "800",
            height: "720",
            link: "https://react.dev/"
        },
        {
            title: "Tailwind CSS",
            image: "tailwindcss",
            extension: "png",
            content: "Framework ของ CSS ที่ใช้สำหรับออกแบบ UI แบบรวดเร็ว",
            description: "",
            width: "1280",
            height: "770",
            link: "https://tailwindcss.com/"
        },
        {
            title: "Font Awesome",
            image: "fontawesome",
            extension: "png",
            content: "Icon library สำหรับเอาสัญลักษณ์ต่าง ๆ มาใช้",
            description: "",
            width: "1200",
            height: "490",
            link: "https://www.fontawesome.com/"
        },
        {
            title: "Color Hunt",
            image: "colorhunt",
            extension: "gif",
            content: "Website ที่รวบรวมสีต่าง ๆ ที่เข้ากันได้อย่างสวยงาม",
            description: "",
            width: "320",
            height: "320",
            link: "https://colorhunt.co/"
        },
        {
            title: "Mongoose",
            image: "mongoose",
            extension: "png",
            content: "Library สำหรับทำงานกับฐานข้อมูล",
            description: "version 8.17.1",
            width: "280",
            height: "280",
            link: "https://mongoosejs.com/"
        },
        {
            title: "MongoDB Atlas",
            image: "mongodb",
            extension: "png",
            content: "ฐานข้อมูลแบบ MongoDB แบบคลาวด์",
            description: "",
            width: "512",
            height: "512",
            link: "https://www.mongodb.com/products/platform"
        },
        {
            title: "BCrypt HASH",
            image: "bcrypt",
            extension: "webp",
            content: "Algorithm สำหรับเข้ารหัสของรหัสผ่าน",
            description: "version 3.0.2",
            width: "400",
            height: "400",
            link: "https://www.npmjs.com/package/bcryptjs"
        },
        {
            title: "NextAuth.js",
            image: "nextauthjs",
            extension: "png",
            content: "Library สำหรับจัดการระบบ authentication",
            description: "version 4.24.11",
            width: "327",
            height: "361",
            link: "https://next-auth.js.org/"
        },
        {
            title: "Google Developers",
            image: "google",
            extension: "webp",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "250",
            height: "250",
            link: "https://developers.google.com/?hl=th"
        },
        {
            title: "Github Developers",
            image: "github",
            extension: "png",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "1200",
            height: "1200",
            link: "https://developer.github.com/"
        },
        {
            title: "Facebook Developers",
            image: "meta",
            extension: "webp",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "1280",
            height: "851",
            link: "https://developers.facebook.com/?locale=th_TH"
        },
        {
            title: "Visual Studio Code",
            image: "vscode",
            extension: "png",
            content: "Code editor สำหรับใช้เพื่อพัฒนาเว็บแอปพลิเคชันและโมเดล",
            description: "version 1.103.1",
            width: "1080",
            height: "1080",
            link: "https://code.visualstudio.com/"
        },
        {
            title: "Google Chrome",
            image: "google",
            extension: "webp",
            content: "Web Browser ใช้สำหรับแสดงเว็บแอพลิเคชันขณะพัฒนา",
            description: "version 139.0.7258.128",
            width: "250",
            height: "256",
            link: "https://www.google.com/intl/th_th/chrome/"
        },
        {
            title: "Vercel",
            image: "vercel",
            extension: "png",
            content: "Platform สำหรับ host เว็บไซต์แบบ dynamic",
            description: "",
            width: "360",
            height: "360",
            link: "https://vercel.com/"
        },
        {
            title: "Git",
            image: "git",
            extension: "png",
            content: "โปรแกรมสำหรับ push source code เว็บแอปพลิเคชันขึ้น github",
            description: "version 2.50.1.windows.1",
            width: "383",
            height: "383",
            link: "https://git-scm.com/"
        },
        {
            title: "Python",
            image: "python",
            extension: "png",
            content: "ภาษาโปรแกรมหลักที่ใช้ในการพัฒนาโมเดล",
            description: "version 3.13.5",
            width: "1200",
            height: "1200",
            link: "https://www.python.org/"
        },
        {
            title: "Jupyter Notebook",
            image: "jupyter",
            extension: "png",
            content: "โปรแกรมสำหรับรันโค้ด python ทีละเซลล์",
            description: "version 7.2.2",
            width: "1200",
            height: "1391",
            link: "https://jupyter.org/"
        },
        {
            title: "NumPy",
            image: "numpy",
            extension: "png",
            content: "Library สำหรับใช้คำนวณทางคณิตศาสตร์และจัดการข้อมูล array",
            description: "version 2.3.1",
            width: "2336",
            height: "2500",
            link: "https://numpy.org/"
        },
        {
            title: "Pandas",
            image: "pandas",
            extension: "png",
            content: "Library สำหนับใช้อ่านข้อมูลจากตาราง (.csv)",
            description: "version 2.3.0",
            width: "1200",
            height: "486",
            link: "https://pandas.pydata.org/"
        },
        {
            title: "Seaborn",
            image: "seaborn",
            extension: "png",
            content: "Library สำหรับใช้สร้างกราฟข้อมูล",
            description: "version 0.13.2",
            width: "400",
            height: "400",
            link: "https://seaborn.pydata.org/"
        },
        {
            title: "Google Sheets",
            image: "sheets",
            extension: "png",
            content: "โปรแกรมสำหรับสร้างตารางเพื่อรวบรวมข้อมูล",
            description: "",
            width: "1200",
            height: "1650",
            link: "https://workspace.google.com/products/sheets/"
        }
    ];

    const contentsHardware = [
        {
            title: "AMD Ryzen 7 5700U",
            image: "-",
            content: "AMD Ryzen 7 5700U with Radeon Graphics 1.80GHz",
            description: "Processor",
            link: "-"
        },
        {
            title: "16GB DDR4",
            image: "-",
            content: "16GB DDR4 3200MHz",
            description: "Installed RAM",
            link: "-"
        },
        {
            title: "SSD NVMe 512GB",
            image: "-",
            content: "477GB SSD PC SN530 NVMe WDC 512GB",
            description: "Storage",
            link: "-"
        },
        {
            title: "AMD Radeon(TM) Graphics",
            image: "-",
            content: "AMD Radeon(TM) Graphics (496MB)",
            description: "Graphics Card",
            link: "-"
        },
        {
            title: "Windows 10 Home",
            image: "-",
            content: "Window 10 Home Single Language (version 22H2)",
            description: "OS",
            link: "-"
        },
        {
            title: "64-bit",
            image: "-",
            content: "64-bit operation system, x64-based processor",
            description: "System Type",
            link: "-" 
        },
    ];

    return (
        <div>
            <Navbar information session = {session}/>
            <Title/>
            <Card contents = {contentsSoftware} title = "Software" description = "ซอฟแวร์ที่ใช้ในการพัฒนาเว็บแอปพลิเคชันและโมเดลในการพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต" h = "h-72"/>
            <Card contents = {contentsHardware} title = "Hardware" description = "ฮาร์ดแวร์ที่ใช้ในการพัฒนาเว็บแอปพลิเคชันและโมเดลในการพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต" h = "h-52"/>
            <Footer information session = {session}/>
        </div>
    )
}

export default page