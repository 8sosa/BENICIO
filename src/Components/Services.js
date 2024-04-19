import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Form, Nav, Tab  } from 'react-bootstrap';

import { IoCallOutline, IoCreateOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
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

export default function Services () {

  const [activeKey, setActiveKey] = useState(null);

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
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <Row className='ytSection'>
                <Col>
                  <p className='textgrey'>Our Services</p>
                  <h1 className='homeHeaderText1'>Borehole Drilling & Maintenance</h1>
                  <p className='greyPgraph'>We handle both survey and borehole drilling. Our expert team conducts thorough surveys to determine the optimal locations for boreholes, ensuring efficient and sustainable water access. From initial assessment to drilling and ongoing maintenance, we are dedicated to delivering reliable and high-quality solutions tailored to meet our clients' specific needs.</p>
                  <button href='/services' className='contactUsBtn'>Contact Us</button>
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
                  <p className='greyPgraph'>We have Premium water treatment technology capable of treating various water sources including borehole, well, sea, and sewage water. Our treatments include filters, ultraviolet sterilizers, reverse osmosis media/chemicals, available in different sizes and qualities.</p>
                  <button href='/services' className='contactUsBtn'>Contact Us</button>
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
                  <p className='greyPgraph'>We collaborate with manufacturers of sachet and bottle water machines to ensure availability and sustainability in water factory production. We provide affordable, quality machines, and maintenance plans for new and existing water factories nationwide.</p>
                  <button href='/services' className='contactUsBtn'>Contact Us</button>
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
                  <p className='greyPgraph'>As part of our commitment to achieving SDG Goal Number 6, Benicio Innovations Limited is open to partnerships with individuals, organizations, and governments to deploy our technologies. We offer drilling and installation of water treatment plants to communities across Nigeria.</p>
                  <button href='/services' className='contactUsBtn'>Contact Us</button>
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
          <Row md={4}>
            {
              currentCards.map((product) => (
                <Col>
                  <Card className='projects'>
                    <Card.Body className='cardBody'>
                      <Card.Img variant="top" src={require('./Images/' + product.image)} className='productCardImg'/>
                      <Card.Title className='projectsTitle'>{product.title}</Card.Title>
                      <div className='callBtn'>Call for price</div>
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
        <section className='projectContent'>
          <Row className='mt-5'>
            <Col>
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
                  <div className='transCardFooter'>
                    <div className='d-flex flex-row align-items-center'>
                      <div className='transCardFooterIcon1' onClick={handlePrev}><IoIosArrowBack /></div>
                      <div className='transCardFooterIcon2' onClick={handleNext}><IoIosArrowForward /></div>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
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
            <Col>
                <p className='textgrey'><IoCreateOutline size={25}/>Meet Us</p>
                <h1 className='blackHeader'>Appointment Form</h1>
                <Form className='contactForm'>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control className='contactFormField' type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control className='contactFormField' type="email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control className='contactFormField' type="tel" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control className='contactFormField' type="text" placeholder="Location" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className='contactFormField' as="textarea" rows={3} placeholder="What water problem are you facing?"/>
                    </Form.Group>
                    <button className='contactFormBtn'>Submit</button>
                </Form>
            </Col>
          </Row>
        </section>
        <section className='clientsSection'>
          <h1 className='whiteHeader'>Our Clients</h1>
          <div className='d-flex flex-row'>
            <img src={Pic4} alt='client' className='clientPic'/>
            <img src={Pic5} alt='client' className='clientPic'/>
            <img src={Pic6} alt='client' className='clientPic'/>
            <img src={Pic7} alt='client' className='clientPic'/>
          </div>
        </section>
        <section className='d-flex flex-column align-items-center'>
          <div className='greenCard'>
            <p className='greenCardText'>Contact Us</p>
            <h1 className='greenCardText1'>Need An Experienced <span className='white'>Professional</span> Service? Contact Us</h1>
            <button href='/contact-us' className='contactUsBtn'>Contact Us</button>
          </div>
        </section>
      </Container>
    </>
  )
}
