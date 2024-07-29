import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Card, Col, Container, Row} from 'react-bootstrap';
import projectData from './Projects.json';


export default function Project ({ project }) {

    const { link } = useParams();
    const [fetchedProject, setFetchedProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!project) {
            fetch('/Project.json')
                .then(response => response.json())
                .then(data => {
                    const foundProject = data.find(proj => proj.link === link);
                    setFetchedProject(foundProject);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching project:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [link, project]);

    const displayedProject = project || fetchedProject;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!displayedProject) {
        return <div>Project not found</div>;
    }
    const currentCards = projectData;

  return (
    <>
      <Container className='page'>
        <section className='projectTitleBlock'>
            <div>
                <li className='topListBox'><span className='homeHeroText1'>Our Projects</span></li>
                <h1 className='projectTitle'>{displayedProject.projectTitle}</h1>
            </div>
        </section>
        <Breadcrumb>
            <Breadcrumb.Item href="/projects" >
                <p className='breadcrumbText'>Testimonials</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item active><p className='breadcrumbText'>{displayedProject.projectTitle}</p></Breadcrumb.Item>
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
                        <p className='greyBackText2'>{displayedProject.projectTitle}</p>
                        <h1 className='greyBackText1'>Location :</h1>
                        <p className='greyBackText2'>{displayedProject.location}</p>
                        <h1 className='greyBackText1'>Project Date :</h1>
                        <p className='greyBackText2'>{displayedProject.projectDate}</p>
                        <h1 className='greyBackText1'>Category :</h1>
                        <p className='greyBackText2'>{displayedProject.category}</p>
                        <h1 className='greyBackText1'>Client Video:</h1>
                        <p className='greyBackText2'>Video</p>
                    </div>
                </Col>
                <Col md={9} className='d-flex justify-content-center p-0'><img src={require('./Images/' + project.image)} alt={project.projectTitle} className='projectContentImg'/></Col>
            </Row>
            <div className='sectionMargin'>
            <div className='projectContent1'>
                <h1 className='blackHeader'>Project Description</h1>
                <br />
                <p className='greyPgraph'>{project.productDescription.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}<br />
                    </React.Fragment>
                    ))}
                </p>
                </div>
            <div>
                <h1 className='blackHeader'>Related Projects</h1>
                <div sm={2} md={3} xxl={4} className='projectsContentCard'>
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
            </div>
            </div>
        </section>
      </Container>
    </>
  )
}