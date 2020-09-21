import React from 'react';
import Navi from "./Navi";
import Home from "./Home";
import About from "./About";
import Career from "./Career";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => (
  <React.Fragment>
    <Navi />
    <Home />
    <About />
    <Career />
    <Projects />
    <Contact />
    <Footer />
  </React.Fragment>
);

export default App;
