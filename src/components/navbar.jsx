import { NavLink } from "react-router-dom";
import React from "react";
const Navbar = (props) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          Navbar
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black",
                    };
                  }}
                  to='/home'>
                  Home
                </NavLink>
              </li>
              {!props.user ? (
                <>
                  <li className='nav-item'>
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "black",
                        };
                      }}
                      to='/login'>
                      Login
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "black",
                        };
                      }}
                      to='/register'>
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "black",
                        };
                      }}
                      to='/dashboard'>
                      Dashboard
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "black",
                        };
                      }}
                      to='/logout'>
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
              <li className='nav-item'>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black",
                    };
                  }}
                  to='/users'>
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
