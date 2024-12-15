import React from "react";
import Button from "../reusableComponents/Button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Home: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <section id="home" className={`h-screen ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} flex items-center justify-center`}>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Hi, I'm Rutvi Patel</h1>
                <p className="mt-4 text-4xl">Full Stack Developer</p>
                <Button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => window.location.href = '#projects'}>See My Work</Button>
            </div>
        </section>
    );
}
export default Home;