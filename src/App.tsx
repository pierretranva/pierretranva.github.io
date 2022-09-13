// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
import React from "react";
import type { FC } from 'react';
import { useInView } from 'react-intersection-observer'
import { Navbar, Header, About, Timelist, Projects } from './components'
import './App.css'

const App: React.FC = () => {
 

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });



  return (


    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <div ref={aboutRef}>
          {aboutInView ? <div className="about"><About /> </div> : <div className='tempAbout' id='about'></div>}
        </div>
        <div >
          {projectsInView ? <div className="projects"><Projects/></div> : <div className = 'tempProjects' id="projects"></div>}
        </div>
        <div ref={projectsRef} />
      
        <Timelist/>

      </div>
    </div >

  );
};

export default App;
