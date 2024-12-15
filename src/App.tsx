import React,{useEffect} from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  useEffect(() => {
    if(darkMode){
      document.body.classList.add("dark");
    }
    else{
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Layout>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
      </Layout>
    </div>
  );
}

export default App;
