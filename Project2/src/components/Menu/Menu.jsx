// Imports:
import React from 'react';

// CSS
import './Menu.css';  

const Menu = ({ handleAppSectionChange }) => {
  const handleClick = (section, event) => {
    event.preventDefault();
    handleAppSectionChange(section);
  };

  return (
    <nav className="menu">
      <ul>
        <li><a href="/about" onClick={(e) => handleClick('about', e)} style={{color: "#F76902", fontWeight: "500"}}>About</a></li>
        <li><a href="/home" onClick={(e) => handleClick('degrees', e)} style={{color: "#F76902", fontWeight: "500"}}>Degrees</a></li>
        <li><a href="/minors" onClick={(e) => handleClick('minors', e)} style={{color: "#F76902", fontWeight: "500"}}>Minors</a></li>
        <li><a href="/employment" onClick={(e) => handleClick('employment', e)} style={{color: "#F76902", fontWeight: "500"}}>Employment</a></li>
        <li><a href="/people" onClick={(e) => handleClick('people', e)} style={{color: "#F76902", fontWeight: "500"}}>People</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
