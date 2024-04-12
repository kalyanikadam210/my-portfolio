import {  Routes, Route , useLocation} from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, {useEffect, useState} from "react";
import Home from './Home/index'
import Contact from './Contact/index';
import Skill from './Skill/index';
import Portfolio from './Portfolio/index';
import Resume from './Resume/index';
import About from './About/index';
import Navbar from './Navbar/index';
import particlesopt from './utils.js/particles';
import { loadFull } from "tsparticles";




function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (init) {
        return;
    }
    initParticlesEngine(async (engine) => {
        await loadFull(engine);
    }).then(() => {
        setInit(true);
    });
});
  const location = useLocation();
  console.log(location,"llll")
 

  const renderPrticleJsInHomePage = location.pathname ==="/";
  return (
  <div className='App'>

    <Particles id ="particles"   options={particlesopt}   />
   {renderPrticleJsInHomePage &&(
    <Particles id ='Particles' options={Particles} />
   )}
      <Navbar/>
      <div className='App_main-page-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />

      </Routes>
      </div>
    {/* </Router> */}
    </div>
  );
}

export default App;
