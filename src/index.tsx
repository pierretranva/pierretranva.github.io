// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import 'react-quill/dist/quill.snow.css';
// import 'nprogress/nprogress.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import { BrowserRouter } from 'react-router-dom';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import App from './App';
import React from 'react';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
