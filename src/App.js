import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
