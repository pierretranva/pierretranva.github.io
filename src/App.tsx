// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import { Button, Dialog, Typography, TextField } from '@material-ui/core';
import { Navbar, ShoppingCart, Counter, Header, About } from './components'
import './App.css'

const App: FC = () => {
  const [data, setData] = useState<string>()
  const [open, setOpen] = React.useState<boolean>(false);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/hello")
    const jsonRes = await response.json()
    setData(String(jsonRes))

  }

  const handleClose = () => {
    setOpen(false)
  }
  return (


    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <About />

        <Counter>
          {(count, setCount) =>
            <div>
              {count}
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}>-</button>

            </div>}
        </Counter>
        <ShoppingCart />
      </div>
    </div >

  );
};

export default App;
