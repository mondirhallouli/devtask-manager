import React from 'react';
import logo from '../images/logo.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="devtask's logo" />
      </div>
      <p className="subtitle">
        A simple manager for daily tasks
      </p>
    </div>
  )
}
