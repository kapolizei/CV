import React, {useRef, useState} from 'react';
import './App.css';
import GeneratePdfButton from "./components/GeneratePdfButton";

function App() {
  
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = (event) => {
        setIsDarkMode(!isDarkMode)
        event.preventDefault();
        event.stopPropagation();
    }





  return (
    <>
    <div class= { `${isDarkMode && 'dark' } dark:bg-slate-900 h-screen`}>

    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 dark:bg-transparent">
  <div className="max-w-8xl mx-auto">
    <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
      <div className="relative flex items-center">
        <div className="relative lg:flex items-center ml-auto">
          <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
            <label className="sr-only" for="theme-selector">Theme</label>
            <button onClick={handleClick} type="button" id="headlessui-listbox-button-:R2lkcr6:" aria-haspopup="listbox" aria-expanded="true" data-headlessui-state="open active" aria-labelledby="headlessui-label-:R1lkcr6: headlessui-listbox-button-:R2lkcr6:" className="" data-open="" data-active="" aria-controls="headlessui-listbox-options-:R3lkcr6:"><span className="dark:hidden"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500"></path></svg></span><span className="hidden dark:inline"><svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path></svg></span></button>

            <a href="https://github.com/kapolizei/TatonIntro" className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <span className="sr-only">Tailwind CSS on GitHub</span>
              <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>




    <div className={ `container mx-auto py-8 dark:bg-slate-900 ${isDarkMode && 'dark' }`} >

        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6 dark:bg-slate-800 ">
                    <div className="flex flex-col items-center">
                        <img src="/portfolio.jpg" className="w-24  bg-gray-300 rounded-full mb-4 shrink-0"/>



                        <h1 className="text-xl font-bold dark:text-slate-100">Ivan Kolesnicenko</h1>
                        <p className="text-gray-700 dark:text-slate-400">Trainee Front-End Developer</p>
                        <p className="text-gray-700 dark:text-slate-400">Brovary</p>
                        <p className="text-gray-700 dark:text-slate-400">kapolizei194@gmail.com </p>
                        <p className="text-gray-700 dark:text-slate-400">06.12.2004</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="tel:+380968813949" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                            <GeneratePdfButton/>
                        </div>
                    </div>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2 dark:text-slate-100">Skills</span>
                        <ul>
                            <li className="mb-2 dark:text-slate-400">English - B2</li>
                            <li className="mb-2 dark:text-slate-400">JavaScript, ReactJS</li>
                            <li className="mb-2 dark:text-slate-400">Git, GitHub</li>
                            <li className="mb-2 dark:text-slate-400">HTML/CSS, Tailwind, Bootstrap </li>
                            <li className="mb-2 dark:text-slate-400">Debug with Chrome DevTools</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6 dark:bg-slate-800">






                    <h2 className="text-xl font-bold mb-4 dark:text-slate-100">About Me</h2>
                    <p className="text-gray-700 dark:text-slate-400">                    I am a passionate front-end developer with a good foundation in web development. My journey began with learning HTML and building websites, which provided me with an understanding of web design principles. About a year ago, I dived into JavaScript to create dynamic and interactive web pages. In the past four months, I have focused on mastering React to develop modern, responsive, and scalable web applications. I am eager to continue growing and applying my knowledge to create user-friendly and efficient web interfaces.
                    </p>

                    <br/>


                    <p className="text-gray-700 dark:text-slate-400">I chose your vacancy because I noticed that the requirements for a Trainee position are realistic and reasonable. Many job postings have inflated requirements and unrealistic expectations. I am eager to gain more practical experience in programming, especially with React and JavaScript, and your position offers an excellent opportunity for that.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-4 dark:text-slate-100">Why your time spent on me will have sense?</h2>
                    <p className="text-gray-700 dark:text-slate-400">I quickly adapt to new technologies, handle complex tasks effectively, and have a solid background in related fields. My strong motivation and commitment to growth in web development will enable me to become a valuable team member over time.
                    </p>



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
                        <p className="mt-2">
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold dark:text-slate-400">ReactJS web development course</span>
                            <p>
                                <span className="text-gray-700 mr-2 dark:text-slate-400">at udemy.com</span>
                                <span className="text-gray-700 dark:text-slate-100">2024 - present</span>
                            </p>
                        </div>
                        <p className="mt-2">

                        </p>
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
