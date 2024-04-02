// Header.jsx

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../styles/header.css';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/cars',
    display: 'Cars'
  },
  {
    path: '/blogs',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {
  return (
    <header className="header">
      {/* Header top */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__left">
                <span>Need Help?    
                Call us on our tollfreenumber</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +9779813000000
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <NavLink to='/login' className='d-flex align-items-center gap-1'>
                  <i className="ri-login-circle-line"></i> Login
                </NavLink>
                <NavLink to='/signup' className='d-flex align-items-center gap-1'>
                  <i className="ri-user-line"></i> Signup
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Header middle */}
      <div className="header__middle">
        <Container>
          {/* Your middle content */}
        </Container>
      </div>
      {/* Main navigation */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
            <div className="navigation">
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink to={item.path} className="nav__item" key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder='Search'/>
                <span><i className="ri-search-line"></i></span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
