import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import nat1 from "../assets/img/nat1.png";
import nat2 from "../assets/img/nat2.png";
import nat3 from "../assets/img/nat3.png";
import nat4 from "../assets/img/nat4.png";
import mat1 from "../assets/img/mat1.png";
import mat2 from "../assets/img/mat2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = {
    // Projetos de Humanas aqui
    humanas: [
      {
        title: "Relações ecológicas",
        description: "Descrição do Projeto de Humanas 1",
        imgUrl: nat1,
        link: "https://www.canva.com/design/DAGGm-ohp8o/oDaGsdBQFUET2s7j5yXaDg/edit?utm_content=DAGGm-ohp8o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      },
      {
        title: "Circúitos Elétricos",
        description: "Descrição do Projeto de Humanas 2",
        imgUrl: nat2,
        link: "https://www.canva.com/design/DAGEowJwJKw/Lu4jSOcrXwREDiNPFljwOg/edit?utm_content=DAGEowJwJKw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      },
      {
        title: "Cartaz Uso do Plástico",
        description: "Descrição do Projeto de Humanas 1",
        imgUrl: nat3,
        link: "https://www.canva.com/design/DAGJ4zkgiLY/HIlZvN8C61lY7NQV2W_HaQ/edit?utm_content=DAGJ4zkgiLY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
        title: "Filme Quebrando a Banca",
        description: "Objetivo: Analisar e explorar temas como estratégia e ética.\n\nHabilidades Desenvolvidas:Interpretação das técnicas e temas do filme. Entendimento das estratégias reais de contagem de cartas.\n\nAssunto: Um grupo que usa contagem de cartas para ganhar no blackjack, destacando técnicas matemáticas e questões éticas.\n\nCrítica Pessoal: A ganância pode levar as pessoas a tomar decisões erradas e enfrentar as consequências, mesmo que elas tenham boas intenções no início.",
        imgUrl: mat1,
        link: "https://docs.google.com/document/d/1EyfC2LXzBjj1FHKeRfsAh_W7o315htvjgS0B5y37qxU/edit?usp=sharing",
      },
      {
        title: "Banco Imobiliário",
        description: "Objetivo: Criar um Banco Imobiliário baseado em Florianópolis para entender conceitos de administração e economia.\n\nHabilidades Desenvolvidas: Desenvolvimento da imaginação. Criação de um jogo usando o conhecimento que temos sobre Florianópolis.\n\nAssunto: Criamos um Banco Imobiliário com propriedades e valores de Florianópolis.\n\nCrítica Pessoal: O jogo oferece uma visão sobre coisas que gostamos ou achamos interessantes, e isso que faz o jogo divertido.",
        imgUrl: mat2,
        link: "https://www.canva.com/design/DAGJ_FQZHBM/P2Fzx4CF7fq-YkgKH5zlDg/edit?utm_content=DAGJ_FQZHBM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      
      // Projetos de Natureza aqui
    ],
    natureza: [
      {
        title: "Relações ecológicas",
        description: "Objetivo: Compreender as relações ecológicas entre organismos e sua influência nos ecossistemas.\n\n Habilidades Desenvolvidas: Entendimento das interações ecológicas. Avaliação dos impactos dessas relações.\n\n Crítica Pessoal: O trabalho ajuda a entender a complexidade dos ecossistemas, devido à variedade de interações.",
        imgUrl: nat1,
        link: "https://www.canva.com/design/DAGGm-ohp8o/oDaGsdBQFUET2s7j5yXaDg/edit?utm_content=DAGGm-ohp8o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      },
      {
        title: "Circúitos Elétricos",
        description: "Objetivo: Entender os conceitos fundamentais dos circuitos elétricos. \n\n Habilidades Desenvolvidas: Entendimento dos componentes e princípios dos circuitos elétricos. Uso de mapas mentais para estruturar informações.",
        imgUrl: nat2,
        link: "https://www.canva.com/design/DAGEowJwJKw/Lu4jSOcrXwREDiNPFljwOg/edit?utm_content=DAGEowJwJKw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      },
      {
        title: "Cartaz Uso do Plástico",
        description: "Objetivo: Conscientizar sobre os impactos negativos do uso excessivo de plástico.\n\n Habilidades Desenvolvidas: Entender os problemas associados ao plástico. Criar o cartaz de modo atraente. Transmitir a mensagem de forma clara. \n\n Assunto: Aborda o impacto ambiental do plástico, como a poluição do ambiente e a ameaça à vida marinha e terrestre. \n\n Crítica Pessoal: O uso excessivo de plástico está cada vez ficando maior, afetando o meio ambiente e a saúde humana.",
        imgUrl: nat3,
        link: "https://www.canva.com/design/DAGJ4zkgiLY/HIlZvN8C61lY7NQV2W_HaQ/edit?utm_content=DAGJ4zkgiLY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
    ppe: [
      {
        title: "Corrente Elétrica",
        description: "Objetivo: Ter melhor conhecimento sobre a Guerra das Correntes usando uma forma divertida.\n\n Habilidades: Compreensão da história da Guerra das Correntes. Desenvolver melhor a imaginação.\n\nAssunto: A rivalidade entre Edison e George Westinghouse na disputa pela eletrificação dos EUA.\n\nCrítica Pessoal: Foi uma atividade divertida que mostra o impacto da rivalidade de duas pessoas importantes.",
        imgUrl: nat4,
        link: "https://www.canva.com/design/DAF8HJpRdOs/wcS3IExbPNuZnwHfL1aCxw/edit?utm_content=DAF8HJpRdOs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
                        <Nav.Link eventKey="ppe">PPE</Nav.Link>
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