import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/knight2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "de Lara Drews" ];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Esse é o Portfolio</span>
                <h1>{` `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "de Lara Drews" ]'><span className="wrap">{text}</span></span></h1>
                <p>Eu sou o Roblox</p>
                <br></br><br></br><br></br><br></br>
                <div style={{ display: 'flex', gap: '10px' }}>
                <a href= "http://portfolio-laradrews.vercel.app/?authuser=1&hl=pt-BR" target="_blank" rel="noopener noreferrer">
  <button onClick={() => console.log('connect')} style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
    Portfólio 1°tri <ArrowRightCircle size={25} />
  </button>
</a>
<a href="https://www.canva.com/design/DAGBdk-WYqE/R9SNRAXOpwJ19_MbG9GG3Q/edit?utm_content=DAGBdk-WYqE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
  <button onClick={() => console.log('connect')} style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
    Currículo <ArrowRightCircle size={25} />
  </button>
</a>
<a href="https://www.canva.com/design/DAGOBv_9XNg/iv0Zx2XxbE_XNlekG25k9A/edit?utm_content=DAGOBv_9XNg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
  <button onClick={() => console.log('connect')} style={{ display: 'flex', alignItems: 'center' }}>
    Carta de Apresentação <ArrowRightCircle size={25} />
  </button>
</a>
  
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={10} md={5} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={logo} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
