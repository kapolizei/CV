import HoverAgeComponent from "./HoverAgeComponent";
import GeneratePdfButton from "./GeneratePdfButton";
import React from "react";

export default function Info() {
    return <div className="flex flex-col items-center">
        <img src="/portfolio.jpg" className="w-24  bg-gray-300 rounded-full mb-4 shrink-0"/>


        <h1 className="text-xl font-bold dark:text-slate-100">Ivan Kolesnicenko</h1>
        <p className="text-gray-700 dark:text-slate-400">Front-End Developer</p>
        <p className="text-gray-700 dark:text-slate-400">Brovary</p>


        <a href="mailto:kapolizei194@gmail.com"
           className="text-gray-700 dark:text-slate-400 hover:text-blue-500">
            kapolizei194@gmail.com
        </a>
        <HoverAgeComponent/>
        <p className="text-gray-700 dark:text-slate-400"></p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a href="https://t.me/kapolizei"
               className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>

            <GeneratePdfButton/>
        </div>
    </div>;
}