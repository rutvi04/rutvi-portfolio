import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const About: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <section id="about" className={`py-20 ${darkMode? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <div className="conatiner mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
                <p className="text-lg leading-8 text-center max-w-2xl mx-auto">
                    I'm a Full Stack Developer with a passion for building beautiful and functional web applications.
                    I have experience in backend technologies like Java and MongoDB, as well as frontend frameworks like React and Tailwind CSS.
                </p>
            </div>
        </section>
    );
}

export default About;