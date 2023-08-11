import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header>
          <Link to={'/'}>Main</Link>
          <Link to={'/about'}>About</Link>
        </header>
    );
};

export default Header;