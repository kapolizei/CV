
import Header from "../../components/Header";
import Info from "../../components/Info";
import Skills from "../../components/Skills";
import AboutMe from "../../components/AboutMe";
import React, {useState} from "react";

export default function HomeView (){

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            <div id='content-to-print' className={`${isDarkMode && 'dark'} dark:bg-slate-900 h-screen`}>
                <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
                <div className={`container mx-auto py-8 dark:bg-slate-900 ${isDarkMode && 'dark'}`}>
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 ">
                        <div className="col-span-4 sm:col-span-3 ">
                            <div className="bg-white shadow rounded-lg p-6 dark:bg-slate-800 ">
                                <Info/>
                                <hr className="my-6 border-t border-gray-300"/>
                                <Skills/>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6 dark:bg-slate-800">
                                <AboutMe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}