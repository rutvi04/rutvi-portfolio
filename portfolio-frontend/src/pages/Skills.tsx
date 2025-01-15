import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Skills: React.FC = () => {

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    const skills=['Javascript','React','MongoDB','Java','Tailwind CSS','Python','Bootstrap'];

    return (
        <section id="skills" className={`py-20 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-col-4 gap-4">
                    {skills.map(skill => (
                        <div key={skill} className={`p-4 rounded shadow ${darkMode ? "bg-gray-400 text-white" : "bg-gray-100 text-black" }`}>
                            <p className="text-center">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;