import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={3}>
            
          </Col>
          <Col size={12} sm={9} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/laraDrews"><img src={github} alt="Icon" /></a>
              <a href="https://www.instagram.com/jorge_gamer_gostoso/"><img src={instagram} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/lara-drews-146468257/"><img src={linkedin} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}