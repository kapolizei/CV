import React from "react";

import { Link } from "react-router-dom";
export default function SkillTree() {
    return (
        <>
            <div className="container mx-auto p-4 dark:bg-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg drop-shadow-2xl p-6 dark:bg-slate-800">
                        <h3 className="text-xl font-bold mb-2 dark:text-slate-100">HTML & CSS</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-slate-100">
                            <li>Flexbox и Grid Layout</li>
                            <li>Semantic Markup</li>
                            <li>CSS Animations</li>
                            <li>Media Requests</li>
                            <li>Responsive Design</li>
                        </ul>
                        <span
                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mt-4 inline-block  dark:text-gray-800">Intermediate Level</span>
                    </div>


                    {/*Второй элемент*/}
                    <div className="bg-white rounded-lg drop-shadow-2xl p-6 dark:bg-slate-800">
                        <h3 className="text-xl font-bold mb-2 dark:text-slate-100">JavaScript</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-slate-100">
                            <li>DOM Manipulation</li>
                            <li>Basics of ES6</li>
                            <li>Promises and Asynchronous Programming</li>
                        </ul>
                        <span
                            className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mt-4 inline-block dark:text-gray-800">Foundational Level</span>
                    </div>


                    {/*Третий элемент*/}
                    <div className="bg-white rounded-lg drop-shadow-2xl p-6 dark:bg-slate-800">
                        <h3 className="text-xl font-bold mb-2 dark:text-slate-100">React</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-slate-100">
                            <li>React Router</li>
                            <li>Component-based approach</li>
                            <li>React Hooks (useState, useEffect, useRef, useContext)</li>
                            <li>React Props</li>
                            <li>Controlled Components</li>
                            <li>Uncontrolled Components</li>
                            <li className='hover:text-blue-500'> <Link to="/api">FetchApi</Link></li>

                        </ul>
                        <span
                            className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mt-4 inline-block dark:text-gray-800">Intermediate Level</span>
                    </div>


                </div>
            </div>
        </>
    )
}