import React from 'react'
import Header from './components/Header';
import Menu from './components/Menu';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* logo, subtitle */}
      <Header />

      {/* navigation */}
      <Menu />

      {/* outlet to display the selected route from the menu */}
      <Outlet />

      {/* footer  */}
      <Footer />
    </div>
  )
}

export default App;