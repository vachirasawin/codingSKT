// import from Next.js
import React, { useEffect } from "react";
import "../globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

//select module from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Histogram({ data }) {
    const chartData = {
        labels: data.map((d) => [d.title, d.description] ),
        datasets: [
            {
                label: "Lower",
                data: data.map((d) => d.lower),
                backgroundColor: "#ececec",
                borderColor: "#9497a1",
                borderWidth: 1,
            },
            {
                label: "Upper",
                data: data.map((d) => d.upper - d.lower),
                backgroundColor: "#ffffff",
                borderColor: "#9497a1",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                min: 0,
                max: 4,
                ticks: {
                stepSize: 0.5,
                },
            },
        },
    };

    return (
        <div className="px-4 py-8">
            <Bar data = {chartData} options = {options} />
        </div>
    )
}

export default Histogram