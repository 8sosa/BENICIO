import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import NavBar from './Navbar'
import Footer from './Footer'
import About from './About'
import OurProjects from './OurProjects'
import Consultations from './Consultations'
import Project from './Project'
import ContactUs from './ContactUs'
import Home from './Home'
import Services from './Services'
import Teams from './Teams'
import Teammember from './Teammember'
import WDPage from './WDPage'


export default function BenicioRouter() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/" element={<Home />} exact/>
                <Route path = "/About-Us" element={<About/>} exact/>
                <Route path = "/services" element={<Services/>} exact/>
                <Route path = "/ourProjects" element={<OurProjects/>} exact/>
                <Route path = "/testimonials" element={<Project/>} exact/>
                <Route path = "/Consultations" element={<Consultations/>} exact/>
                <Route path = "/teams" element={<Teams />} exact/>
                <Route path = "/teammember" element={<Teammember />} exact/>
                <Route path = "/contact-us" element={<ContactUs/>} exact/>
                <Route path = "/servWDP" element={<WDPage/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}