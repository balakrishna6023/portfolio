import React, { useState, useRef } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <AnchorLink className='nachor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='nachor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='nachor-link' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='nachor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='nachor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='nachor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

