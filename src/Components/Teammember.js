import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Col, Container, Row} from 'react-bootstrap';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { useParams } from 'react-router-dom';


export default function Teammember ({teamMember}) {

    const { id } = useParams();
    const [fetchedTeamMember, setFetchedTeamMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!teamMember) {
            fetch('/Team.json')
                .then(res => res.json())
                .then(data => {
                    const foundTeamMember = data.find(tM => tM.id === id);
                    setFetchedTeamMember(foundTeamMember);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error finding team Memebr:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    },
    [id, teamMember]);

    const displayedTeamMember = teamMember || fetchedTeamMember;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!displayedTeamMember) {
        return <div>Team member not found</div>;
    }
  return (
    <>
      <Container className='page'>
        <section className='projectTitleBlock'>
            <div>
                <li className='topListBox'><span className='homeHeroText1'>Our Team</span></li>
                <h1 className='projectTitle'>{displayedTeamMember.name}</h1>
            </div>
        </section>
        <Breadcrumb>
            <Breadcrumb.Item href="/teams">
                <p className='breadcrumbText'>Team</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item active><p className='breadcrumbText'>{displayedTeamMember.name}</p></Breadcrumb.Item>
        </Breadcrumb>
        <section className='projectContent'>
            <Row md={2} className='sectionPadding'>
                <Col md={5} className='d-flex justify-content-center p-0'><img src={require('./Images/' + displayedTeamMember.image)} alt='location' className='projectContentImg'/></Col>
                <Col md={6} className='mobileGreyBg d-flex flex-column justify-content-center align-items-flex-start'>
                    <h1 className='teamtext4'>{displayedTeamMember.description}</h1>
                    <p className='teamtext5'>{displayedTeamMember.years}</p>
                    <hr className='styledLine1' xs={9}></hr>
                    <h1 className='teamtext7'>Phone : <span className='teamtext6'>{displayedTeamMember.phone}</span></h1>
                    <h1 className='teamtext7'>Email : <span className='teamtext6'>{displayedTeamMember.email}</span></h1>
                    <div className='marginBottom'>
                        <div className='m-2'><IoLogoInstagram className='blueish3'/></div>
                        <div className='m-2'><IoLogoFacebook className='blueish3'/></div>
                        <div className='m-2'><FaLinkedinIn className='blueish3'/></div>
                        <div className='m-2'><IoLogoTwitter className='blueish3'/></div>
                    </div>
                    <a href='/contact-us'><button className='contactBtn'>Contact Me</button></a>
                </Col>
            </Row>
            <div className='sectionMargin'>
                <h1 className='blackHeader'>Qualification & Experience</h1>
                <p className='teamtext5'>{displayedTeamMember.qualification}</p>
                <p className='teamtext5'>{displayedTeamMember.experience}</p>
            </div>
        </section>
      </Container>
    </>
  )
}