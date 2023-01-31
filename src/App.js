import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="flex flex-row bg-cuerpo min-h-screen">
      <Header />
      <main className="flex flex-col w-11/12 ">
        <Inicio />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
