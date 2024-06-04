import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Nav, Tab  } from 'react-bootstrap';

import { IoCreateOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {ReactComponent as Aicon} from './Icons/a.svg'
import {ReactComponent as Bicon} from './Icons/b.svg'
import {ReactComponent as Cicon} from './Icons/c.svg'
import {ReactComponent as Dicon} from './Icons/d.svg'
import productData from './Products.json';



import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic20 from './Images/pic20.png'
import Pic49 from './Images/pic49.png'
import Pic50 from './Images/pic50.png'
import Pic51 from './Images/pic51.png'

export default function Services () {

  const [activeKey, setActiveKey] = useState('first');

  const handleSelect = (key) => {
    setActiveKey(key);
  };  

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = productData.slice(indexOfFirstCard, indexOfLastCard);

  const totalCards = productData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Container className='page'>
        <section className='aboutHero'>
          <div className='aboutHeroContent'>
            <li className='topListBox'><span className='homeHeroText1'>Our Services</span></li>
            <h1 className='heroHeader'>What We’re Offering</h1>
          </div>
          <div className='servicesHeroImg'>
          </div>
        </section>
        <section className='homeContent'>
          <h1 className='serviceHeaderText'>Professional Services</h1>
          <p className='serviceHeaderText1'>Our business thrives on the commitment to succeed by providing clients with service quality that not only meets their requirements but surpasses their expectations.</p>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Nav onSelect={handleSelect}>
                <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <div className={activeKey === "first" ? 'tag0 active' : 'tag0'}>
                          <Aicon color='black' size={50}/>
                          <p className='checkText p-1'>Borehole Drilling & Maintenance</p>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                    <div className={activeKey === "second" ? 'tag0 active' : 'tag0'}>
                      <Bicon color='black' size={50}/>
                      <p className='checkText p-1'>Water Treatment Installations</p>
                    </div>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                      <div className={activeKey === "third" ? 'tag0 active' : 'tag0'}>
                        <Cicon color='black' size={50}/>
                        <p className='checkText p-1'>Water Factories Setup</p>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                    <div className={activeKey === "fourth" ? 'tag0 active' : 'tag0'}>
                      <Dicon color='black' size={50}/>
                      <p className='checkText p-1'>Community Water Project</p>
                    </div>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
              </Nav>
            </Row>
            <Tab.Content className='cPan'>
              <Tab.Pane eventKey="first">
              <Row className='ytSection'>
                <Col>
                  <p className='textgrey'>Our Services</p>
                  <h1 className='homeHeaderText1'>Borehole Drilling & Maintenance</h1>
                  <p className='greyPgraph2'>We handle both survey and borehole drilling. Our expert team conducts thorough surveys to determine the optimal locations for boreholes, ensuring efficient and sustainable water access. From initial assessment to drilling and ongoing maintenance, we are dedicated to delivering reliable and high-quality solutions tailored to meet our clients' specific needs.</p>
                  <a href="/contact-us"><button className='greenCardBtn'>Contact Us</button></a>
                </Col>
                <Col>
                  <img src={Pic20} alt='water' className='aboutPicBox' />
                </Col>
              </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Row className='ytSection'>
                <Col>
                  <p className='textgrey'>Our Services</p>
                  <h1 className='homeHeaderText1'>Water Treatment Installations</h1>
                  <p className='greyPgraph2'>We have Premium water treatment technology capable of treating various water sources including borehole, well, sea, and sewage water. Our treatments include filters, ultraviolet sterilizers, reverse osmosis media/chemicals, available in different sizes and qualities.</p>
                  <a href="/contact-us"><button className='greenCardBtn'>Contact Us</button></a>
                </Col>
                <Col>
                  <img src={Pic49} alt='water' className='aboutPicBox' />
                </Col>
              </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <Row className='ytSection'>
                <Col>
                  <p className='textgrey'>Our Services</p>
                  <h1 className='homeHeaderText1'>Water Factory Setup</h1>
                  <p className='greyPgraph2'>We collaborate with manufacturers of sachet and bottle water machines to ensure availability and sustainability in water factory production. We provide affordable, quality machines, and maintenance plans for new and existing water factories nationwide.</p>
                  <a href="/contact-us"><button className='greenCardBtn'>Contact Us</button></a>
                </Col>
                <Col>
                  <img src={Pic50} alt='water' className='aboutPicBox' />
                </Col>
              </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
              <Row className='ytSection'>
                <Col>
                  <p className='textgrey'>Our Services</p>
                  <h1 className='homeHeaderText1'>Community Water Project</h1>
                  <p className='greyPgraph2'>As part of our commitment to achieving SDG Goal Number 6, Benicio Innovations Limited is open to partnerships with individuals, organizations, and governments to deploy our technologies. We offer drilling and installation of water treatment plants to communities across Nigeria.</p>
                  <a href="/contact-us"><button className='greenCardBtn'>Contact Us</button></a>
                </Col>
                <Col>
                  <img src={Pic51} alt='water' className='aboutPicBox' />
                </Col>
              </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>
        <section className='homeContent1'>
          <p className='textgrey'><IoCreateOutline className='yellow'/>The Gallery</p>
          <h1 className='serviceHeaderText'>Check Our Products</h1>
          <Row md={4} className='productSection9'>
            {
              currentCards.map((product) => (
                <Col>
                  <Card className='projects'>
                    <Card.Body className='cardBody'>
                      <Card.Img variant="top" src={require('./Images/' + product.image)} className='productCardImg'/>
                      <Card.Title className='projectsTitle'>{product.title}</Card.Title>
                      <a href='/contact-us'><div className='callBtn'>Call for price</div></a>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className='paginationBtn'><IoIosArrowBack /></button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'paginationBtnActive' : 'paginationBtn'}>
                {index + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentCards.length < cardsPerPage} className='paginationBtn'><IoIosArrowForward /></button>
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
        <section className='d-flex flex-column align-items-center'>
          <div className='greenCard'>
            <li className='topListBoxpurp'><span className='greenCardText'>Contact Us</span></li>
            <h1 className='greenCardText1'>Need An Experienced <span className='white'>Professional</span> Service?</h1>
            <a href='/contact-us'><button className='greenCardBtn'>Contact Us</button></a>
          </div>
        </section>
        <iframe title='Our Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0736947615487!2d3.2640759757779065!3d6.637770421823248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90a490748365%3A0x18e2c30fe20599bc!2s32%20Abike%20Ewegbemi%20St%2C%20Oke%20Odo%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715103483413!5m2!1sen!2sng" width="100%" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}
