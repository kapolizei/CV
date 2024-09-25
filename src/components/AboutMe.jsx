import React from "react";

export default function AboutMe() {
    return <>
        <h2 className="text-xl font-bold mb-4 dark:text-slate-100">About Me</h2>
        <p className="text-gray-700 dark:text-slate-400"> I am a passionate front-end developer with
            a good
            foundation in web development. My journey began with learning HTML and building
            websites, which
            provided me with an understanding of web design principles. About a year ago, I dived
            into
            JavaScript to create dynamic and interactive web pages. In the past four months, I have
            focused
            on mastering React to develop modern, responsive, and scalable web applications. I am
            eager to
            continue growing and applying my knowledge to create user-friendly and efficient web
            interfaces.
        </p>

        <br/>


        <p className="text-gray-700 dark:text-slate-400">I chose your vacancy because I noticed that
            the
            requirements for this position are realistic and reasonable. Many job postings have
            inflated
            requirements and unrealistic expectations. I am eager to gain more practical experience
            in
            programming, especially with React and JavaScript, and your position offers an excellent
            opportunity for that.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4 dark:text-slate-100">Why your time spent on me
            will have
            sense?</h2>
        <p className="text-gray-700 dark:text-slate-400">I quickly adapt to new technologies, handle
            complex
            tasks effectively, and have a solid background in related fields. My strong motivation
            and
            commitment to growth in web development will enable me to become a valuable team member
            over
            time.
        </p>

        {/*Education Block*/}

        <h2 className="text-xl font-bold mt-6 mb-4 dark:text-slate-100">Education</h2>
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span
                                        className="text-gray-700 font-bold dark:text-slate-400">Computer Science</span>
                <p>
                                <span className="text-gray-700 mr-2 dark:text-slate-400">at Borys Grinchenko Kyiv Metropolitan University
                                </span>
                    <span className="text-gray-700 dark:text-slate-100">2021 - present</span>
                </p>
            </div>
        </div>


        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-gray-700 font-bold dark:text-slate-400">HTML & CSS</span>
                <p>
                    <span className="text-gray-700 mr-2 dark:text-slate-400">at udemy.com</span>
                    <span className="text-gray-700 dark:text-slate-100">2023</span>
                </p>
            </div>
        </div>

        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-gray-700 font-bold dark:text-slate-400">React 2024 (incl. Next.js, Redux)</span>
                <p>
                    <span className="text-gray-700 mr-2 dark:text-slate-400">at udemy.com</span>
                    <span className="text-gray-700 dark:text-slate-100">2024 - present</span>
                </p>
            </div>
        </div>
    </>;
}