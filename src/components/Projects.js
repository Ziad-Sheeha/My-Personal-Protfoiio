import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/newImgs/E-commerce.png';
import projImg2 from '../assets/newImgs/covid-19.png';
import projImg3 from '../assets/newImgs/food-order.png';
import projImg4 from '../assets/newImgs/spaceDynamic.png';
import projImg5 from '../assets/newImgs/7Yard.png';
import projImg6 from '../assets/newImgs/foodi.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Live Preview',
      imgUrl: projImg1,
      preview: 'https://ecommerce-1-alpha.vercel.app/',
    },
    {
      title: 'Live Preview',
      imgUrl: projImg2,
      preview: 'https://covid-website-mu.vercel.app/',
    },
    {
      title: 'Live Preview',
      imgUrl: projImg3,
      preview: 'https://food-order-app-blush-five.vercel.app/',
    },
    {
      title: 'Live Preview',
      imgUrl: projImg4,
      preview: 'https://space-dynamic.vercel.app/',
    },
    {
      title: 'Live Preview',
      imgUrl: projImg5,
      preview: 'https://7-yard-cafe-restaurant.vercel.app/',
    },
    {
      title: 'Live Preview',
      imgUrl: projImg6,
      preview: 'https://foodi-git-master-zeyad-sheeha.vercel.app/',
    },
  ];

  return (
    <section
      className="project"
      id="projects"
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p className="projects-p">
                    One of my recent projects was an e-commerce website, where I
                    utilized my knowledge of HTML, CSS, and JavaScript to design
                    an intuitive product catalog, shopping cart, and checkout
                    process. I also incorporated third-party payment gateways
                    and shipping integrations to streamline the buying process
                    for customers. The website featured a responsive design that
                    ensured an optimal user experience across all devices.
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
      ></img>
    </section>
  );
};
