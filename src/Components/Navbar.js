import React from 'react'
import { Navbar} from 'react-bootstrap'

import { IoLocationOutline, IoMailOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
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
                        <p className='text1'>BenicioGroups@gmail.com</p>
                    </div>
                </div>
                <div className='follow'>
                    <IoLogoInstagram className='white'/>
                    <IoLogoFacebook className='white'/>
                    <IoLogoTwitter className='white'/>
                </div>
            </div>
            <div className='bottomBar'>
                <div>
                    <img src={Logo} alt='logo' href="/"/>
                </div>
                <div className='navLinks'>
                    <div href='/'>
                        <h1 className='navLink'>Home</h1>
                    </div>
                    <div href='/about-us'>
                        <h1 className='navLink'>About Us</h1>
                    </div>
                    <div href='/services'>
                        <h1 className='navLink'>Services</h1>
                    </div>
                    <div href='/testimonials'>
                        <h1 className='navLink'>Testimonials</h1>
                    </div>
                    <div href='/teams'>
                        <h1 className='navLink'>Teams</h1>
                    </div>
                </div>
                <div>
                    <button href='/teams' className='contactBtn'>Contact Us</button>
                </div>
            </div>
        </Navbar>
    </>
  )
}
