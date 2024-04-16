import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'

import { IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from './Images/Logo.png'

export default function BenNavbar () {
  return (
    <>
        <Navbar className='mainNavBar'>
            <div className='topBar'>
                <div className='topNavContent'>
                    <div className='d-flex flex-row justify-content-space-between'>
                        <IoLocationOutline className='icons'/>
                        <p className='text1'><span className='bold'>Lagos</span>: 32 Abike Ewegbemi St, Oke Odo, Lagos</p>
                    </div>
                    <div>
                        <p className='text1'><span className='bold'>Akwa Ibom</span>: 11 Grace Bill Road Eket, Akwa- Ibom State</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <IoMailOutline className='icons'/>
                        <p className='text1'>info.nigeria@beniciogroups.com</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <IoCallOutline  className='icons'/>
                        <p className='text1'>0803 291 2543</p>
                    </div>
                </div>
                <div className='follow'>
                    <IoLogoInstagram className='white'/>
                    <IoLogoFacebook className='white'/>
                    <IoLogoTwitter className='white'/>
                    <FaLinkedinIn className='white'/>
                </div>
            </div>
            <div className='bottomBar'>
                <div>
                    <img src={Logo} alt='logo' />
                </div>
                <Nav className='navLinks'>
                <Nav.Link href='/' className='navLink'>Home</Nav.Link>
                <Nav.Link href="/About-Us" className='navLink'>About Us</Nav.Link>
                <Nav.Link href='/services' className='navLink'>Services</Nav.Link>
                <Nav.Link href='/testimonials' className='navLink'>Testimonials</Nav.Link>
                <Nav.Link href='/teams' className='navLink'>Teams</Nav.Link>
                </Nav>
                <div>
                    <a href='/contact-us'><button className='contactBtn'>Contact Us</button></a>
                </div>
            </div>
        </Navbar>
    </>
  )
}
