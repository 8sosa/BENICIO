import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import NavBar from './Navbar'
import Footer from './Footer'
import About from './About'

export default function BenicioRouter() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/About-Us" element={<About/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}