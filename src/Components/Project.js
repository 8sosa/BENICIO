import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Card, Col, Container, Row} from 'react-bootstrap';


import testimonialData from './Testimonials.json'
import Pic55 from './Images/pic55.png'


export default function Project () {

    const currentCards = testimonialData;

  return (
    <>
      <Container className='page'>
        <section className='projectTitleBlock'>
            <div>
                <li className='topListBox'><span className='homeHeroText1'>Our Projects</span></li>
                <h1 className='projectTitle'>Marygoal International School</h1>
            </div>
        </section>
        <Breadcrumb>
            <Breadcrumb.Item href="/ourProjects" >
                <p className='breadcrumbText'>Testimonials</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item active><p className='breadcrumbText'>Marygoal International School</p></Breadcrumb.Item>
        </Breadcrumb>
        <section className='projectContent'>
            <Row md={2} className='sectionPadding1'>
                <Col md={3} className='greyBack'>
                    <div className='greyBack'>
                        <h1 className='greyBackText'>Project Information</h1>
                        <Row>
                            <Col className='styledLine' xs={3}></Col>
                            <Col className='styledLine1' xs={9}></Col>
                        </Row>
                        <h1 className='greyBackText1'>Client :</h1>
                        <p className='greyBackText2'>Marygoal International School </p>
                        <h1 className='greyBackText1'>Location :</h1>
                        <p className='greyBackText2'>Calabar, Cross River State</p>
                        <h1 className='greyBackText1'>Project Date :</h1>
                        <p className='greyBackText2'>15 December ,2022</p>
                        <h1 className='greyBackText1'>Category :</h1>
                        <p className='greyBackText2'>Service</p>
                        <h1 className='greyBackText1'>Client Video:</h1>
                        <p className='greyBackText2'>Video</p>
                    </div>
                </Col>
                <Col md={9} className='d-flex justify-content-center p-0'><img src={Pic55} alt='location' className='projectContentImg'/></Col>
            </Row>
            <div className='sectionMargin'>
            <div className='projectContent1'>
                <h1 className='blackHeader'>Project Description</h1>
                <br />
                <p className='greyPgraph'>Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium dynamically target high-payoff intellectual capital for customized technologies objectively integrate emerging core competencies before process-centric communities dramatically evisculate holistic innovation rather than client-centric data.</p>
                <br />
                <ol className='greyPgraph'>
                    <li>Listen to what they say about you</li> <br />
                    <li>Randomised words which.</li> <br />
                    <li>Internet tend to repeat predefined chunks</li> <br />
                </ol>
                <p className='greyPgraph'>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                <br />
                <ol className='greyPgraph'>
                    <li>Interactively procrastinate high-payoff content</li> <br />
                    <li>Randomised words which don't look even slightly believable.</li> <br />
                    <li>Your best work, together in one package that works seamlessly from your computer</li> <br />
                    <li>Delivers the tools you need to save time Improve field performance always</li> <br />
                </ol>
                <p className='greyPgraph'>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
            </div>
            <div>
                <h1 className='blackHeader'>Related Projects</h1>
                <Row md={4}>
                    {
                    currentCards.map((testimonial) => (
                        <Col>
                        <a href='/testimonials'>
                            <Card className='testimonials'>
                            <Card.Body className='cardBody'>
                                <Card.Img variant="top" src={require('./Images/' + testimonial.image)} className='productCardImg'/>
                                <Card.Title className='projectsTitle'>{testimonial.title}</Card.Title>
                                <Card.Text className='projectsText'>{testimonial.location}</Card.Text>
                            </Card.Body>
                            </Card>
                        </a>
                        </Col>
                    ))
                    }
                </Row>
            </div>
            </div>
        </section>
      </Container>
    </>
  )
}