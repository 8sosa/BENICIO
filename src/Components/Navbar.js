import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

import { IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Logo from './Images/Logo.png'

export default function BenNavbar () {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className='mainNavBar mobile-fixed-top'>
            <div className='topBar'>
                <div className='topNavContent'>
                    <div className='topNavItems'>
                        <IoLocationOutline className='icons'/>
                        <p className='text1'><span className='bold'>Lagos</span>: 32 Abike Ewegbemi St, Oke Odo, Lagos</p>
                    </div>
                    <div className='topNavItems'>
                        <p className='text1'><span className='bold'>Akwa Ibom</span>: 11 Grace Bill Road Eket, Akwa- Ibom State</p>
                    </div>
                    <div className='topNavItems'>
                        <IoMailOutline className='icons'/>
                        <p className='text1'>info.nigeria@beniciogroups.com</p>
                    </div>
                    <div className='topNavItems'>
                        <IoCallOutline  className='icons'/>
                        <p className='text1'>0803 291 2543</p>
                    </div>
                </div>
                <div className='follow'>
                    <a href='https://www.instagram.com/benicioinnovations?igsh=MXZhZDhjeTJodWw5aw==' target="_blank" rel="noopener noreferrer"><IoLogoInstagram className='white'/></a>
                    <a href='https://m.facebook.com/people/Benicio-Innovations-Limited/61557395136407/' target="_blank" rel="noopener noreferrer"><IoLogoFacebook className='white'/></a>
                    <a href='https://twitter.com/BIL2DEWORLD' target="_blank" rel="noopener noreferrer"><IoLogoTwitter className='white'/></a>
                    <a href='https://www.linkedin.com/company/benicio-innovations-limited/' target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='white'/></a>
                </div>
            </div>
            <div className='bottomBar'>
                <div className='mobileMenuBottom'>
                    <Navbar.Brand href="#home"> <img src={Logo} alt='logo' /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggler'>
                        <span className='menuToggle'><CiMenuBurger /></span>
                    </Navbar.Toggle>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar-nav'>
                    <Nav className='navLinks'>
                        <Nav.Link href='/' className='navLink'>Home</Nav.Link>
                        <Nav.Link href="/About-Us" className='navLink'>About Us</Nav.Link>
                        <NavDropdown className='navLink' title="Services">
                            <NavDropdown.Item href="/services">Our Services</NavDropdown.Item>
                            <NavDropdown.Item href="/Consultations">Consultation</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/projects" className='navLink'>Testimonials</Nav.Link>
                        <Nav.Link href="/teams" className='navLink'>Teams</Nav.Link>
                    </Nav>
                    <a href='/contact-us' className='d-flex align-items'><button className='contactBtnNav'>Contact Us</button></a>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </>
  )
}
