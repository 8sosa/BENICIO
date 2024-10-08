import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';

import Pic4 from './Images/pic4.png';
import Pic5 from './Images/pic5.png';
import Pic6 from './Images/pic6.png';
import Pic7 from './Images/pic7.png';
import projectData from './Projects.json';

export default function OurProjects () {

  const currentCards = projectData;

  return (
    <>
      <Container className='page'>
        <section className='aboutHero'>
          <div className='aboutHeroContent'>
            <li className='topListBox'><span className='homeHeroText1'>The Case Studies</span></li>
            <h1 className='heroHeader'>Our Latest Projects</h1>
          </div>
          <div className='testiHeroImg'>
          </div>
        </section>
        <section className='projectsContent'>
          <div className='projectsContentCard'>
          {
            currentCards.map((project) => (
              <Link to={`/projects/${project.link}`} key={project.id}>
                <Card className='testimonials'>
                  <Card.Body className='cardBody'>
                    <Card.Img variant="top" src={require('./Images/' + project.image)} className='productCardImg'/>
                    <Card.Title className='projectsTitle'>{project.projectTitle}</Card.Title>
                    <Card.Text className='projectsText'>{project.location}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))
          }
          </div>
        </section>
        <section className='clientsSection'>
          <h1 className='whiteHeader'>Our Clients</h1>
         <div className='d-flex flex-row'>
            <img src={Pic4} alt='client' className='clientPic'/>
            <img src={Pic7} alt='client' className='clientPic'/>
            <img src={Pic6} alt='client' className='clientPic'/>
            <img src={Pic5} alt='client' className='clientPic'/>
          </div>
        </section>
        <div className='ghost'>
        <section className='d-flex flex-column align-items-center'>
          <div className='greenCard'>
            <li className='topListBoxpurp'><span className='greenCardText'>Contact Us</span></li>
            <h1 className='greenCardText1'>Need An Experienced <span className='white'>Professional</span> Service?</h1>
            <a href='/contact-us'><button className='greenCardBtn'>Contact Us</button></a>
          </div>
        </section>
        </div>
        <iframe title='Our Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0736947615487!2d3.2640759757779065!3d6.637770421823248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90a490748365%3A0x18e2c30fe20599bc!2s32%20Abike%20Ewegbemi%20St%2C%20Oke%20Odo%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715103483413!5m2!1sen!2sng" width="100%" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}
