import React, {useState} from 'react';
import './App.css';
import GeneratePdfButton from "./components/GeneratePdfButton";
import LogRocket from 'logrocket';
import HoverAgeComponent from "./components/HoverAgeComponent";
import AppRoutes from './routing/AppRoutes.jsx';
import Header from "./components/Header";



LogRocket.init('2gfoz0/ivanlucentservices');
function App() {
  
    const [isDarkMode, setIsDarkMode] = useState(false);




  return (
    <>
        <div id='content-to-print' className={`${isDarkMode && 'dark'} dark:bg-slate-900 h-screen`}>

      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>


    <div className={ `container mx-auto py-8 dark:bg-slate-900 ${isDarkMode && 'dark' }`} >

        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 ">
            <div className="col-span-4 sm:col-span-3 ">
                <div className="bg-white shadow rounded-lg p-6 dark:bg-slate-800 ">
                    <div className="flex flex-col items-center">
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
                    </div>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span
                            className="text-gray-700 uppercase font-bold tracking-wider mb-2 dark:text-slate-100">Skills</span>
                        <ul>
                            <li className="mb-2 dark:text-slate-400">English - B2</li>
                            <li className="mb-2 dark:text-slate-400">JavaScript, ReactJS</li>
                            <li className="mb-2 dark:text-slate-400">Git, GitHub</li>
                            <li className="mb-2 dark:text-slate-400">HTML/CSS, Tailwind, Bootstrap</li>
                            <li className="mb-2 dark:text-slate-400">Debug with Chrome DevTools</li>

                        </ul>
                    </div>


                </div>
            </div>

            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6 dark:bg-slate-800">


                    <h2 className="text-xl font-bold mb-4 dark:text-slate-100">About Me</h2>
                    <p className="text-gray-700 dark:text-slate-400"> I am a passionate front-end developer with a good
                        foundation in web development. My journey began with learning HTML and building websites, which
                        provided me with an understanding of web design principles. About a year ago, I dived into
                        JavaScript to create dynamic and interactive web pages. In the past four months, I have focused
                        on mastering React to develop modern, responsive, and scalable web applications. I am eager to
                        continue growing and applying my knowledge to create user-friendly and efficient web interfaces.
                    </p>

                    <br/>


                    <p className="text-gray-700 dark:text-slate-400">I chose your vacancy because I noticed that the
                        requirements for this position are realistic and reasonable. Many job postings have inflated
                        requirements and unrealistic expectations. I am eager to gain more practical experience in
                        programming, especially with React and JavaScript, and your position offers an excellent
                        opportunity for that.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-4 dark:text-slate-100">Why your time spent on me will have
                        sense?</h2>
                    <p className="text-gray-700 dark:text-slate-400">I quickly adapt to new technologies, handle complex
                        tasks effectively, and have a solid background in related fields. My strong motivation and
                        commitment to growth in web development will enable me to become a valuable team member over
                        time.
                    </p>

                    {/*Education Block*/}

                    <h2 className="text-xl font-bold mt-6 mb-4 dark:text-slate-100">Education</h2>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold dark:text-slate-400">Computer Science</span>
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




































                </div>

            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default App;
