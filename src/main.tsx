import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
// import Login from './page/Login.tsx';
// import Dashboard from './page/Dashboard.tsx';
import WrappedApp from './components/WrappedApp.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Not reccommend to put this in main.tsx, so move to component "WrappedApp.tsx" */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter> */}
    <WrappedApp></WrappedApp>
  </React.StrictMode>
);
