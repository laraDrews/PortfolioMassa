import a from "../assets/img/50.png";
import b from "../assets/img/60.png";
import c from "../assets/img/75.png";
import d from "../assets/img/80.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>Humanas</h5>
                            </div>
                            <div className="item">
                                <img src={d} alt="Image" />
                                <h5>Linguagens</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>Matemática</h5>
                            </div>
                            <div className="item">
                                <img src={b} alt="Image" />
                                <h5>Natureza</h5>
                            </div>
                            <div className="item">
                                <img src={b} alt="Image" />
                                <h5>Implantação e Manutenção de Sistemas</h5>
                            </div>
                            <div className="item">
                                <img src={b} alt="Image" />
                                <h5>Desenvolvimento de sistemas</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>Desenvolvimento de Sistemas</h5>
                            </div>
                            <div className="item">
                                <img src={d} alt="Image" />
                                <h5>Banco de Dados</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}