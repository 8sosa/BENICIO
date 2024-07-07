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
import projectData from './Projects.json';
import teamData from './Team.json'



export default function BenicioRouter() {
    const currentProject = projectData;
    const team = teamData;

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/" element={<Home />} exact/>
                <Route path = "/About-Us" element={<About/>} exact/>
                <Route path = "/services" element={<Services/>} exact/>
                <Route path = "/projects" element={<OurProjects/>} exact/>
                {
                    currentProject.map((project) => (
                        <Route key={project.id} path={`/projects/${project.link}`} element={<Project project={project}/>} exact/>
                    ))
                }
                <Route path = "/Consultations" element={<Consultations/>} exact/>
                <Route path = "/teams" element={<Teams />} exact/>
                {
                    team.map((teamMember) => (
                        <Route key={teamMember.id} path={`/teams/${teamMember.id}`} element={<Teammember teamMember={teamMember}/>}exact/>
                    ))
                }
                <Route path = "/teammember" element={<Teammember />} exact/>
                <Route path = "/contact-us" element={<ContactUs/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}