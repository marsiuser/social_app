import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
return(
    <nav className={classes.app_nav}>
    <ul className={classes.user_nav}>
      <NavLink to="/profile" activeClassName={classes.activeLink}><li>Profile</li></NavLink>
      <NavLink to="/dialogs" activeClassName={classes.activeLink}><li>Messages</li></NavLink>
      <a href="#"><li>News</li></a>
      <a href="#"><li>Music</li></a>
      <a href="#"><li>Settings</li></a>
    </ul>
  </nav>
  )
}

export default Navbar;