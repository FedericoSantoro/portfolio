import "./App.css";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Aos from "aos";

function App() {
  Aos.init();
  return (
    <div className="flex md:flex-row bg-cuerpo s:flex s:flex-col s:w-[100%] relative">
      <Header />
      <main className="flex flex-col md:w-11/12 s:w-[100%] overflow-hidden">
        <Inicio />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
