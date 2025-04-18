import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

import { appTitle } from '../globals/globals';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = e => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 600px)');
    mediaQuery.addEventListener('change', isDesktop);
    
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

  return (
    <header className={navOpen ? 'show' : undefined}>
      <h1>
        <Link to="/">{appTitle}</Link>
      </h1>
      <button
        className="btn-main-nav"
        onMouseDown={e => {
          e.preventDefault();
        }}
        onClick={showHideNav}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <Nav handleShowHideNav={showHideNav} />
    </header>
  );
};

export default Header;
