import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Carousel, Container, Row, Col, Form, Image, Nav, Tab } from 'react-bootstrap';
import { IoCallOutline, IoCreateOutline, IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaPlay} from "react-icons/fa";
import {ReactComponent as Aicon} from './Icons/a.svg'
import {ReactComponent as Bicon} from './Icons/b.svg'
import {ReactComponent as Cicon} from './Icons/c.svg'
import {ReactComponent as Dicon} from './Icons/d.svg'
import productData from './Products.json';


import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic19 from './Images/pic19.png'
import Pic17 from './Images/pic17.png'
import Pic20 from './Images/pic20.png'
import Pic49 from './Images/pic49.png'
import Pic50 from './Images/pic50.png'
import Pic51 from './Images/pic51.png'
import CarouselImage1 from './Images/pic53.png'
import CarouselImage2 from './Images/pic47.png'
import CarouselImage3 from './Images/pic48.png'

const testimonials = [
  {
    "id": 1,
    "image": require("./Images/pic46.png"),
    "name": "Mrs. Esther Oladimeji",
    "location": "Yaba, Lagos",
    "comment": "Their services were excellent, my water had issues with coloring and smell...Benicio group solved my water problems instantly. Currently, we use the water to cook in my household. Thank you Benicio!!"
  },
  {
    "id": 2,
    "image": require("./Images/pic52.png"),
    "name": "Mr. Muhammed Ibrahim",
    "location": "Ikeja, Lagos",
    "comment": "I’ve not had issues with our water filters since they were serviced by Benicio Groups, excellent work and very nice customer service."
  }
];

export default function Home () {

  const CustomPrevIcon = () => {
    return <div className='iconGreenBg'><IoCaretBackSharp size={20} color="white" /></div>
  };
  
  const CustomNextIcon = () => {
    return <div className='iconGreenBg'><IoCaretForwardSharp size={20} color="white" /></div>
  };

  const [activeKey, setActiveKey] = useState('first');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentData = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
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
        <Row className='aboutHero'>
          <Col className='aboutHeroContent' md={5}>
            <li className='topListBox'><span className='homeHeroText1'>Welcome to Benicio Groups</span></li>
            <h1 className='heroHeader'>The Best solution to <span className='blueish2'>your</span> water problems  </h1>
            <p className='heroHeadertext'>Providing water solutions by pioneering the installation of advance treatment plants to transform lives through sustainable water solutions</p>
            <div className='d-flex flex-row'>
              <a href="/About-Us"><button className='contactBtnHome1'>About Us</button></a>
              <div className='d-none flex-row align-items-center'>
                  <div className='transCardFooterIcon3'><FaPlay /></div>
                  <p className='homeHeroText'>Watch our Videos</p>
              </div>
            </div>
          </Col>
          <Col md={7} className='aboutHeroCarousel'>
            <Carousel prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />}>
              <Carousel.Item>
                <div className='carouselImg'>
                  <Image src={CarouselImage1} alt="First slide"/>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='carouselImg'>
                  <Image src={CarouselImage2} alt="Second slide"/>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='carouselImg'>
                  <Image src={CarouselImage3} alt="Third slide"/>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <section className='aboutContent'>
          <Row className='mrsCol'>
            <Col md={6} className='mrCol'>
              <div className='phantom'><p className='textgrey'>About Us</p></div>
              <img src={Pic20} alt='water pump' className='homePicBox'/>
            </Col>
            <Col md={5}>
            <div className='ghost'><p className='textgrey'>About Us</p></div>
              <h1 className='homeHeaderText1'>We Provide Water Solutions</h1>
              <p className='greyPgraph'>As a social enterprise, our services include community water projects, Borehole Drilling & Maintenance, Water Treatment Installations, and Water Factory Setup (Bottles & Sachet). We have been dedicated to the water treatment industry, and our success lies in consistently delivering appropriate, reliable, and cost-effective solutions to various challenges within this specialized water sector.</p>
              <p className='greyPgraph'>At Benicio innovations Limited, we ensure our treatment plants meets WHO and NAFDAC standards for drinking water by prioritize the cultivation of enduring business relationships, emphasizing communication, innovation, and excellence.</p>
              <div className='hpasb mt-4'>
                <div className='graybg'>
                  <p className='graybgtext'>10</p>
                  <p className='graybgtext1'>Years Of Experience</p>
                </div>
                <ul>
                  <li className='greyPgraph1'>Solving Global Water Crisis</li>
                  <li className='greyPgraph1'>Developing Solutions to Nigeria’s Water Shortage</li>
                  <li className='greyPgraph1'>Supporting Global Health Impact</li>
                  <li className='greyPgraph1'>Solving Client Water Problems</li>
                </ul>
              </div>
            </Col>
          </Row>
        </section>
        <section className='homeContent'>
          <h1 className='serviceHeaderText'>Professional Services</h1>
          <p className='serviceHeaderText1'>Our business thrives on the commitment to succeed by providing clients with service quality that not only meets their requirements but surpasses their expectations.</p>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Nav onSelect={handleSelect} className='hppst'>
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
          <Row sm={2} md={4} className='mt-2'>
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
        <section className='projectContent'>
          <Row className='customerFormSection'>
            <Col md={5} className='someCol'>
                <p className='textgrey'><IoCreateOutline size={25}/>Testimonial</p>
                <h1 className='blackHeader'>Customers Says</h1>
                <div className='transCard'>
                  <div className='transCardFooter'>
                    <div className='d-flex flex-row align-items-center'>
                      <div className='proPicBox'>
                        <img src={currentData.image} className='propic' alt='profile pic' />
                      </div>
                      <div xs={'auto'}>
                          <p className='contactTopText3'>{currentData.name}</p>
                          <p className='contactTopText2'>{currentData.location}</p>
                      </div>
                    </div>
                    <div className='p-3'>
                      <div className='grey-Bg'>
                        <RiDoubleQuotesL className='purple'/>
                      </div>
                    </div>
                  </div>
                  <p className='transCardText'>{currentData.comment}</p>
                  <div className='transCardFooter1'>
                    <div className='d-flex flex-row align-items-center'>
                      <div className='transCardFooterIcon1' onClick={handlePrev}><IoIosArrowBack /></div>
                      <div className='transCardFooterIcon2' onClick={handleNext}><IoIosArrowForward /></div>
                    </div>
                    <div className='d-none flex-row align-items-center'>
                      <div className='transCardFooterIcon3'><FaPlay /></div>
                      <p className='transCardFooterText'>Customer review</p>
                    </div>
                  </div>
                </div>
                <div className='purpCard'>
                    <p className='textgrey'><IoCreateOutline className='yellow'/>Any Question</p>
                    <p className='purpCardText1'>99.9% Customer Satisfation Based</p>
                    <p className='purpCardText2'>If you have any questions or need help contacting us, please call</p>
                    <div className='d-flex flex-row align-items-center'>
                        <div className='purpCardIcon'><IoCallOutline /></div>
                        <p className='purpCardText3'>08032912543</p>
                    </div>
                </div>
            </Col>
            <Col md={7} className='someCol'>
                <p className='textgrey'><IoCreateOutline size={25}/>Meet Us</p>
                <h1 className='blackHeader'>Appointment Form</h1>
                {/* <div className='d-flex justify-content-center'> */}
                  <Form className='contactForm'>
                    <Form.Group className="mb-4" controlId="Name.ControlInput1">
                        <Form.Control className='contactFormField' type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="Email.ControlInput1">
                        <Form.Control className='contactFormField' type="email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="Number.ControlInput1">
                        <Form.Control className='contactFormField' type="tel" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="Location.ControlInput1">
                        <Form.Control className='contactFormField' type="text" placeholder="Location" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="problem.ControlTextarea1">
                        <Form.Control className='contactFormField1' as="textarea" rows={3} placeholder="What water problem are you facing?"/>
                    </Form.Group>
                    <button className='contactFormBtn'>Submit</button>
                  </Form>
                {/* </div> */}
            </Col>
          </Row>
        </section>
        <section className='ghost'>
            <Row className='someSection'>
              <Col sm={12} md={6} className='darkbghome'>
                  <div className='darkbghomeContent'>
                      <p className='textgrey'>Our Projects</p>
                      <h1 className='whiteHeader'>Featured Projects</h1>
                      <p className='missText2'>With 10 years of experience in the water industry we have a diverse portfolio of clients and projects.</p>
                      <a href="/ourProjects"><button className='contactBtnNav'><p className='bold m-0 p-0'>More Projects</p></button></a>
                  </div>
              </Col>
              <Col sm={6} md={3} className='bghome'>
                <div className="image-container">
                  <img src={Pic19} alt='service' className='homeePicBox'/>
                  <div className="overlay">
                    <a href='/testimonials'><button className="read-more-btn" href='/testimonials'>Read More</button></a>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3} className='bghome'>
                <div className="image-container">
                  <img src={Pic17} alt='service' className='homeePicBox'/>
                  <div className="overlay">
                    <a href='/testimonials'><button className="read-more-btn" href='/testimonials'>Read More</button></a>
                  </div>
                </div>
              </Col>
            </Row>
        </section>
        <section className='phantom'>
            <Row className='someSection'>
              <Col className='bghome'>
                <div className="image-container">
                  <img src={Pic19} alt='service' className='homeePicBox'/>
                  <div className="overlay">
                      <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </Col>
              <Col className='bghome'>
                <div className="image-container">
                  <img src={Pic17} alt='service' className='homeePicBox'/>
                  <div className="overlay">
                      <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </Col>
            </Row>
            <div className='darkbghome'>
                  <div className='darkbghomeContent'>
                      <p className='textgrey'>Our Projects</p>
                      <h1 className='whiteHeader'>Featured Projects</h1>
                      <p className='missText2'>With 10 years of experience in the water industry we have a diverse portfolio of clients and projects.</p>
                      <button href='/services' className='contactBtnNav'><p className='bold m-0 p-0'>More Projects</p></button>
                  </div>
            </div>
        </section>
        <section className=' d-flex flex-column align-items-center'>
          <div className='greenCard'>
            <li className='topListBoxpurp'><span className='greenCardText'>Contact Us</span></li>
            <h1 className='greenCardText1'>Need An Experienced <span className='white'>Professional</span> Service?</h1>
            <a href='/contact-us'><button className='greenCardBtn'>Contact Us</button></a>
          </div>
        </section>
        <iframe title='Our Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0736947615487!2d3.2640759757779065!3d6.637770421823248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90a490748365%3A0x18e2c30fe20599bc!2s32%20Abike%20Ewegbemi%20St%2C%20Oke%20Odo%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715103483413!5m2!1sen!2sng" className='googleMaps' width="100%" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}
