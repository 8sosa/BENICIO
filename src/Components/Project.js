import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row} from 'react-bootstrap';

import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic9 from './Images/pic9.png'
import Pic10 from './Images/pic10.png'


export default function Project () {
  return (
    <>
      <Container className='page'>
        <section className='projectTitleBlock'>
            <div>
                <li className='projectTitleText'>Our Projects</li>
                <h1 className='projectTitle'>Marygoal International School</h1>
            </div>
        </section>
        <section className='projectContent'>
            <Row xs={2}>
                <Col xs={3} className='greyBack'>
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
                <Col xs={9}><img src={Pic10} alt='location' className='projectContentImg'/></Col>
            </Row>
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
                <Row md={3}>
                    <Col>
                        <Card className='projects'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Img variant="top" src={Pic9} />
                                <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                                <Card.Text className='projectsText'>House,  Office</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='projects'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Img variant="top" src={Pic9} />
                                <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                                <Card.Text className='projectsText'>House,  Office</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='projects'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Img variant="top" src={Pic9} />
                                <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                                <Card.Text className='projectsText'>House,  Office</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
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
            <p className='greenCardText2'>Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled  a type specimen book. </p>
            <button href='/teams' className='contactUsBtn'>Contact Us</button>
          </div>
        </section>
      </Container>
    </>
  )
}