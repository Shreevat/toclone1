import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import MobileNav from "./assets/components/MobileNav";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Service from "./assets/components/Service";
import Project from "./assets/components/Project";
import Contact from "./assets/components/Contact";
import "./App.css";

const App = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Hero />
        <About />
        <Service />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
