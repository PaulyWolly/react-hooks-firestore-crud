import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          React-Firebase w/Hooks
        </a>
        <div className="navbar-nav mr-auto">
          <div className='menu-items'>
            <li className="nav-item">
              <NavLink to={"/tutorials"} className="nav-link">
                Tutorials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/add"} className="nav-link">
                Add
              </NavLink>
            </li>
          </div>

        </div>
    </nav>
  );
}
