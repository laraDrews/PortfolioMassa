import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = {
    // Projetos de Humanas aqui
    humanas: [
      {
        title: "Humanas Project 1",
        description: "Descrição do Projeto de Humanas 1",
        imgUrl: projImg1,
      },

      // Projetos de Linguagens aqui
    ],
    linguagens: [
      {
        title: "Linguagens Project 1",
        description: "Descrição do Projeto de Linguagens 1",
        imgUrl: projImg2,
      },
      
      // Projetos de Matemática aqui
    ],
    matematica: [
      {
        title: "Matemática Project 1",
        description: "Descrição do Projeto de Matemática 1",
        imgUrl: projImg3,
      },
      
      // Projetos de Natureza aqui
    ],
    natureza: [
      {
        title: "Natureza Project 1",
        description: "Descrição do Projeto de Natureza 1",
        imgUrl: projImg1,
      },

      // Projetos de TI aqui
    ],
    ti: [
      {
        title: "TI Project 1",
        description: "Descrição do Projeto de TI 1",
        imgUrl: projImg2,
      },

      // Projetos de TI aqui
    ],
    ti2: [
      {
        title: "TI Project 1",
        description: "Descrição do Projeto de TI 1",
        imgUrl: projImg2,
      },
      
    ],
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="humanas">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="humanas">Humanas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="linguagens">Linguagens</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="matematica">Matemática</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="natureza">Natureza</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ti">TI</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ti2">TI</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {Object.keys(projects).map(category => (
                        <Tab.Pane eventKey={category} key={category}>
                          <Row>
                            {projects[category].map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};