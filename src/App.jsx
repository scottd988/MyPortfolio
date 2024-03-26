import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <main id="main">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer id="footer" />
    </>
  );
}

export default App;
