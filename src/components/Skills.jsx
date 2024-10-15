import React from "react";

export default function Skills() {
    return <div className="flex flex-col">
                        <span
                            className="text-gray-700 uppercase font-bold tracking-wider mb-2 dark:text-slate-100">Skills</span>
        <ul>
            <li className="mb-2 dark:text-slate-400">English - B2</li>
            <li className="mb-2 dark:text-slate-400">JavaScript, ReactJS, Redux</li>
            <li className="mb-2 dark:text-slate-400">PHP</li>
            <li className="mb-2 dark:text-slate-400">Git, GitHub</li>
            <li className="mb-2 dark:text-slate-400">HTML/CSS, Tailwind, Bootstrap</li>
            <li className="mb-2 dark:text-slate-400">Debug with Chrome DevTools</li>

        </ul>
    </div>;
}