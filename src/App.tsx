// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
import React, { useEffect, useState, useRef } from "react";
import type { FC } from 'react';
import { useInView } from 'react-intersection-observer'
import { Navbar, ShoppingCart, Counter, Header, About } from './components'
import './App.css'

const App: React.FC = () => {
  const [data, setData] = useState<string>();
  const [open, setOpen] = React.useState<boolean>(false);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/hello")
    const jsonRes = await response.json()
    setData(String(jsonRes))
  }

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });



  return (


    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <div ref={aboutRef}>
          {aboutInView ? <div className="about"><About /> </div> : <span></span>}
        </div>

      </div>
    </div >

  );
};

export default App;
