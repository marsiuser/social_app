import React from 'react';
import classes from './Header.module.css'

const Header = () =>{
    return  (
      <header className={classes.app_header}>
           <div className="container">
               <div className={classes.header_logo}>
                    <img src="http://gambolthemes.net/workwise-new/images/logo.png" alt="logo"/>
               </div>
           </div>
      </header>
    )
}

export default Header;