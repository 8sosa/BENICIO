import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import NavBar from './Navbar'
import Footer from './Footer'
import About from './About'
import OurProjects from './OurProjects'
import Project from './Project'
import ContactUs from './ContactUs'


export default function BenicioRouter() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/About-Us" element={<About/>} exact/>
                <Route path = "/services" element={<OurProjects/>} exact/>
                <Route path = "/testimonials" element={<Project/>} exact/>
                <Route path = "/contact-us" element={<ContactUs/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}