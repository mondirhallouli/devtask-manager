import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className='menu-wrapper'>
      <NavLink to={'/tasksColumn' && '/'} className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>Tasks</NavLink>
      <NavLink to='/progressColumn' className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>Progress</NavLink>
      <NavLink to='/finishedColumn' className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>Finished</NavLink>
    </nav>
  )
}
