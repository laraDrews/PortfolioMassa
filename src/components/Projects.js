import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import colorSharp2 from "../assets/img/color-sharp2.png";
import nat1 from "../assets/img/nat1.png";
import nat2 from "../assets/img/nat2.png";
import nat3 from "../assets/img/nat3.png";
import nat4 from "../assets/img/nat4.png";
import mat1 from "../assets/img/mat1.png";
import mat2 from "../assets/img/mat2.png";
import lin1 from "../assets/img/lin1.jpg";
import lin2 from "../assets/img/lin2.jpeg";
import hum1 from "../assets/img/hum1.jpg";
import hum2 from "../assets/img/hum2.png";
import hum3 from "../assets/img/hum3.jpg";
import ti1 from "../assets/img/ti1.png";
import ti2 from "../assets/img/ti2.png";
import ti3 from "../assets/img/ti3.jpg";
import ti4 from "../assets/img/ti4.png";
import ti5 from "../assets/img/ti5.png";
import ti6 from "../assets/img/ti6.png";
import ti7 from "../assets/img/ti7.png";
import ti8 from "../assets/img/ti8.png";
import ti9 from "../assets/img/ti9.jpg";
import ti10 from "../assets/img/ti10.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = {
    // Projetos de Humanas aqui
    humanas: [
      {
        title: "Enigma",
        description: "Habilidades Desenvolvidas: Análise das dinâmicas de poder e fronteiras entre nações. \n\n Objetivo da Atividade: Compreender a geopolítica e a expansão territorial. \n\n Assunto: Relações de poder e disputas de território entre países. \n\n Crítica Pessoal: A atividade proporciona uma visão sobre como as nações interagem e competem.",
        imgUrl: hum1,
        link: "https://forms.gle/UfWEPuVYLifUWXLe8?authuser=1&hl=pt-BR"
      },
      {
        title: "What the World Eats (Mexico)",
        description: "Habilidades: Análise crítica de aspectos culturais, geográficos, políticos, sociais e econômicos do México. \n\n Objetivo da Atividade: Compreender melhor os aspectos de outro país.",
        imgUrl: hum2,
        link: "https://docs.google.com/document/d/18WoqLTItzyuVzbKP2PObYnelOku2GAQwcINDiZ6NyH0/edit?usp=sharing"
      },
      {
        title: "ONHB",
        description: "Habilidades Desenvolvidas: Análise de eventos históricos, pesquisa sobre temas específicos da história do Brasil, e compreender contextos históricos. \n\n Objetivo da Atividade: Promover o estudo e o conhecimento da história do Brasil, incentivando a pesquisa, a reflexão crítica e a análise detalhada de eventos e períodos históricos. \n\n Assunto: História do Brasil, incluindo eventos, figuras importantes e períodos significativos que moldaram o país. \n\n Crítica Pessoal: A Olimpíada oferece uma ótima oportunidade para aprofundar o conhecimento.",
        imgUrl: hum3,
        link: "https://www.canva.com/design/DAGOBwxN-EI/mCG57fc6M6OiLqjsYSQmsw/view?utm_content=DAGOBwxN-EI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
      },

      // Projetos de Linguagens aqui
    ],
    linguagens: [
      {
        title: "Redação",
        description: "Habilidades Desenvolvidas: Escrita argumentativa, análise crítica sobre políticas educacionais, e pesquisa sobre o impacto da valorização profissional na qualidade do ensino. \n\n Objetivo da Atividade: Explorar como a valorização dos profissionais da educação básica pública pode melhorar a qualidade do ensino. \n\n Assunto: O impacto da valorização dos educadores na educação básica pública, incluindo aspectos como salários, formação contínua e reconhecimento profissional. \n\n Crítica Pessoal: A redação destaca a necessidade de reconhecer e valorizar os educadores para melhorar a qualidade do ensino. ",
        link: "https://www.canva.com/design/DAGOB-UK9qg/Y5c3eDo8egvs9lReGSqSyA/view?utm_content=DAGOB-UK9qg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
        imgUrl: lin1,
      },
      {
        title: "Maquete",
        description: "Ainda não concluimos esse trabalho.",
        imgUrl: lin2,
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
        link: "https://www.canva.com/design/DAGGm-ohp8o/qh5qgECj3eMWhsXm0FyAiw/view?utm_content=DAGGm-ohp8o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
      },
      {
        title: "Circúitos Elétricos",
        description: "Objetivo: Entender os conceitos fundamentais dos circuitos elétricos. \n\n Habilidades Desenvolvidas: Entendimento dos componentes e princípios dos circuitos elétricos. Uso de mapas mentais para estruturar informações.",
        imgUrl: nat2,
        link: "https://www.canva.com/design/DAGEowJwJKw/cFJswno6TeTeupiRGrv9_Q/view?utm_content=DAGEowJwJKw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
      },
      {
        title: "Corrente Elétrica",
        description: "Objetivo: Ter melhor conhecimento sobre a Guerra das Correntes usando uma forma divertida.\n\n Habilidades: Compreensão da história da Guerra das Correntes. Desenvolver melhor a imaginação.\n\nAssunto: A rivalidade entre Edison e George Westinghouse na disputa pela eletrificação dos EUA.\n\nCrítica Pessoal: Foi uma atividade divertida que mostra o impacto da rivalidade de duas pessoas importantes.",
        imgUrl: nat4,
        link: "https://www.canva.com/design/DAF8HJpRdOs/7qnAgOMm9wm6a4MR7skQsg/view?utm_content=DAF8HJpRdOs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      },
      {
        title: "Cartaz Uso do Plástico",
        description: "Objetivo: Conscientizar sobre os impactos negativos do uso excessivo de plástico.\n\n Habilidades Desenvolvidas: Entender os problemas associados ao plástico. Criar o cartaz de modo atraente. Transmitir a mensagem de forma clara. \n\n Assunto: Aborda o impacto ambiental do plástico, como a poluição do ambiente e a ameaça à vida marinha e terrestre. \n\n Crítica Pessoal: O uso excessivo de plástico está cada vez ficando maior, afetando o meio ambiente e a saúde humana.",
        imgUrl: nat3,
        link: "https://drive.google.com/file/d/1xY8741sQI4Ceqf8xdC5wv8Y7oIzK5Vop/view?usp=sharing"
      },
      

      // Projetos de TI aqui
    ],
    modelagem: [
      {
        title: "Sala de aula Invertida",
        description: "Habilidades Desenvolvidas: Apresentação de metodologias ágeis e habilidades de comunicação e facilitação. \n\n Objetivo da Atividade: Ensinar e demonstrar a aplicação da metodologia Scrum em projetos. \n\n Assunto: Metodologia Scrum e suas práticas para gestão de projetos. \n\n Crítica Pessoal: A apresentação foi informativa e prática sobre a metodologia Scrum.",
        link: "https://www.canva.com/design/DAGOCB9vZZc/bSVBnLQidXzicJ6pSKRNVA/view?utm_content=DAGOCB9vZZc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
        imgUrl: ti1,
      },
      {
        title: "Wireframe de Alta Fidelidade",
        description: "Habilidades desenvolvidas: Design UX/UI, prototipagem e mapeamento de informações. \n\n Objetivo: Criar uma representação visual detalhada que permita entender a estrutura e a navegação do site. \n\n Assunto: Localização e informações sobre os pontos de coleta de lixo de Florianópolis. \n\n Comentário pessoal: Foi uma atividade divertida que colocou nossa criatividade e trabalho em grupo ao máximo.",
        link: "https://www.figma.com/design/Wx6TaYUznXaQeT8DZkTBpd/SA?node-id=0-1&t=IR79RsR2NMUbmOtZ-1",
        imgUrl: ti2,
      },
      {
        title: "Regra de Negócios - SA",
        description: "Habilidades: Análise e modelagem de regras, documentação, comunicação e uso de ferramentas especializadas.\n\nObjetivo: Garantir consistência, eficiência e conformidade nas operações e decisões da organização.\n\nComentário Pessoal: É crucial para manter a organização alinhada com seus objetivos e assegurar operações eficazes e conformes.",
        imgUrl: ti3,
        link: "https://docs.google.com/spreadsheets/d/1AnSrdhgOTi47XZTaShHE3acnrFfrSCtFk0P7T-XiuuY/edit?usp=sharing",
      },
    
    
    ],
    banco: [
      {
        title: "Modelo Lógico",
        description: "Habilidades: Modelagem e normalização de dados e consultas SQL.\n\nObjetivo: Organizar e gerenciar dados de alunos, professores e cursos para facilitar operações escolares.\n\nAssunto: Estrutura de dados para alunos, professores, cursos e seus relacionamentos.\n\nComentário Pessoal: Essencial para a eficiência administrativa, melhorando a organização e a tomada de decisões na educação.",
        imgUrl: ti4,
        link: "https://docs.google.com/document/d/10CyJtvWkxJTfXrr87bm_DZGksfsvETQIMvDh7bJiE8o/edit?usp=sharing",
      },
      {
        title: "Gestão de Consultório Médico",
        description: "Habilidades Desenvolvidas: Administração, comunicação, organização, finanças e atendimento ao cliente.\n\nObjetivo: Garantir uma operação eficiente e organizada, focada na satisfação dos pacientes e na otimização de recursos.\n\nAssunto: Envolve práticas administrativas, controle de agendamentos e registros, e coordenação de equipe.\n\nComentário Pessoal: Uma gestão eficaz é crucial para o sucesso e a qualidade do atendimento em um consultório médico, especialmente em um contexto complexo como o do Brasil.",
        imgUrl: ti5,
        link: "https://docs.google.com/document/d/17JnJz0cPv9ABHSJ_e52I4Dsd476KBY_8xjjvG4ri430/edit?usp=sharing",
      },
      {
        title: "Normalização de Dados",
        description: "Habilidades Desenvolvidas: Design e análise de banco de dados, identificação de redundâncias.\n\nObjetivo: Organizar dados para minimizar redundâncias e garantir integridade.\n\nAssunto: Estruturação de dados em tabelas e relações, seguindo formas normais para evitar duplicidade e inconsistências.\n\nComentário Pessoal: A normalização melhora a eficiência e a integridade dos bancos de dados, tornando-os mais fáceis de manter e mais confiáveis.",
        imgUrl: ti6,
        link: "https://docs.google.com/document/d/1v10QETfH7p4J-neUob96JjcjAopDSsHfXNrR7DHvM6s/edit?usp=sharing",
      },
    ],

    desenvolvimento: [
      {
        title: "Calculadora de Horas",
        description: "Habilidades: Programação, uso do VS Code, e desenvolvimento de interfaces. \n\nObjetivo: Calcular diferenças entre horários e somar horas, aparecendo o resultado.\n\nAssunto: Implementação de lógica para manipulação de horas e minutos, entrada e saída de dados.\n\nComentário Pessoal: Um projeto prático para aplicar habilidades de programação e gestão de tempo, utilizando uma IDE eficiente.",
        imgUrl: ti7,
        link: "https://github.com/laraDrews/CalcHoras-Atualizado.git",
      },
      {
        title: "API - GitHub",
        description: "Habilidades Desenvolvidas: Desenvolvimento de interfaces, consumo de APIs, gerenciamento de estado e componentização.\n\nObjetivo: Construir uma interface que se comunica com uma API para exibir e enviar dados, e atualizar em tempo real,\n\nAssunto: Integração da aplicação React com a API, gerenciando dados e interatividade.\n\nComentário Pessoal: Proporciona uma experiência interativa e responsiva, aproveitando as capacidades do React para atualizar a interface dinamicamente.",
        imgUrl: ti8,
        link: "https://github.com/laraDrews/API.git",
      },
      {
        title: "Trabalho API",
        description: "Habilidades Desenvolvidas: Desenvolvimento de interfaces, consumo de APIs, gerenciamento de estado e componentização.\n\nObjetivo: Construir uma interface que se comunica com uma API para exibir e enviar dados, e atualizar em tempo real,\n\nAssunto: Integração da aplicação React com a API, gerenciando dados e interatividade.\n\nComentário Pessoal: Proporciona uma experiência interativa e responsiva, aproveitando as capacidades do React para atualizar a interface dinamicamente.",
        imgUrl: ti8,
        link: "https://github.com/laraDrews/API.git",
      },
      {
        title: "Projeto Biblioteca",
        description: "Habilidades: Programação orientada a objetos, desenvolvimento de APIs RESTful, autenticação, e criação de interfaces.\n\nObjetivo: Criar e integrar uma API para gerenciamento de dados da biblioteca e autenticação, além de desenvolver interfaces de front-end.\n\nAssunto: Implementação de lógica de negócios, manipulação de dados, e interfaces para autenticação e gestão de empréstimos.\n\nComentário Pessoal: Garantia de uma funcionalidade eficiente e uma boa experiência deusuário, integrando back-end e front-end.",
        imgUrl: ti9,
        link: "https://drive.google.com/file/d/17fq3GSw-3SLF5I6m6WuvCU549GmraFTx/view?usp=sharing",
      },
    ],
    
    implantacao: [
      {
        title: "CMS",
        description: "Habilidades: Planejamento de projeto, configuração de CMS, desenvolvimento.\n\nObjetivo: Implantar o sistema CMS para a Brasil Veículos de forma coordenada e eficiente.\n\nAssunto: Implementação e integração de um CMS.\n\nComentário Pessoal: Um cronograma bem detalhado assegura a execução eficiente do projeto e a colaboração eficaz entre as equipes.",
        imgUrl: ti10,
        link: "https://docs.google.com/spreadsheets/d/1qdFIwHo4RUtBM3ieCYErhpFAYEncJD9TAyI0OF_yjqQ/edit?usp=sharing",
      },
    ],

    ppe: [
      {
        
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
                  <h2>Projetos</h2>
                  <p>Atividades Do Portfólio</p>
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
                        <Nav.Link eventKey="modelagem">Modelagem de Sistemas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="banco">Banco de Dados</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="desenvolvimento">Desenvolvimento de Sistemas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="implantacao">Implantação e Manutenção de Sistemas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ppe">PPE</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <a href="https://drive.google.com/file/d/13Kd8fdelAKQlw1KdFxouENxG0wqdTB88/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button onClick={() => console.log('connect')} style={{ display: 'flex', alignItems: 'center', width: 'auto', lineHeight: '30px', color: 'white', backgroundColor: 'transparent', border: 'none', fontSize: '18px' }}>
                    CURSO <ArrowRightCircle size={25} style={{ marginLeft: '10px' }} />
                    </button>
                    </a><br></br>
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