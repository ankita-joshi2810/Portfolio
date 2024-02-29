import React from 'react'
import './App.css'

import { Navbar, Container, Col, Row, Card, Carousel } from 'react-bootstrap'

import { FaMobileScreenButton } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { IoMdAnalytics } from "react-icons/io";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { MdOutlineDownloadForOffline } from "react-icons/md";

import bg from './Assets/img1.jpg'
import bg1 from './Assets/bg.jpg'
import bg2 from './Assets/bg1.jpg'
import bg3 from './Assets/bg2.jpg'
import img1 from './Assets/img5.png'
import logo from './Assets/anki.png'


const App = () => {
  const appStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='App' style={appStyle}>
      <Navbar id='home'>
        <Container className='header'>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar><br />
      <Container>
        <Row>
          <Col>
            <img
              src={img1}
              alt="My Pic"
            />
            <br />
          </Col>
          <Col>
            <div className='about' id='about'>
              <h2><b>Ankita Joshi</b></h2>
              <br /><br />
              <Container className='about-section'>
                <Row>
                  <Col>
                    <ul>
                      <li><b>Master of Computer Application</b> in AI&ML</li>
                      <li><b>Date of Birth :-</b> 28th July 2000</li>
                    </ul>
                  </Col>
                  <Col>
                    <p><b>
                      Sports :-</b>
                      100*4 Relay Race (2017), Sub Junior National Roll Ball Second Position (2013), Sub Junior State Roll Ball
                      Championship First Position (2013), Sub Junior District Roll Ball First Position (2013), Sub Junior Rajasthan Roll Ball First
                      Position (2013), Interschool Start Sports Roller Skating First Position (2013), Ajmer District Roller Skating Third Position
                      (2012).
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col></Row></Container>
      <br /><br /><br />
      <Container className='cont'>
        <Row>
          <Col className='tech'>
            <h2><b>Technologies</b></h2><br />
            <Row>
              <Col>
                <Container className='tech-icon'>
                  <Row>
                    <Col><FaPython size={40} /><br /> Python</Col>
                    <Col><IoMdAnalytics size={40} /><br /> Data Analytics</Col>
                    <Col><FaJava size={40} /><br /> Java</Col>
                    <Col><SiFastapi size={40} color='dark green'/><br /> Fast API</Col>
                    <Col><DiDjango size={55} /><br /></Col>
                  </Row><br />
                  <Row>
                    <Col><TbBrandCpp size={40} /></Col>
                    <Col><SiPowerbi size={40} color='yellow'/><br /> PowerBI</Col>
                    <Col><SiPandas size={40} /><br /> Pandas</Col>
                    <Col><SiNumpy size={40} /><br /> Numpy</Col>
                    <Col><SiMysql size={55} /></Col>
                  </Row><br />
                  <Row>
                    <Col><FaHtml5 size={40} color='red' /><br /> HTML</Col>
                    <Col><FaCss3Alt size={40} /><br /> CSS</Col>
                    <Col><FaBootstrap size={40} color='blue' /><br /> Bootstrap</Col>
                    <Col><FaReact size={40} color='rgb(17, 143, 247)' /><br /> React JS</Col>
                    <Col><FaLinux size={40} /><br /> Linux</Col>
                  </Row><br />
                  <Row>
                    <Col><FaPhp size={55} /> </Col>
                    <Col><SiFlask size={40} /><br /> Flask</Col>
                    <Col><SiOpencv size={40} /><br /> OpenCV</Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Col>
          <Col className='exp'>
            <h2 className='experience'><b>Experience</b></h2><br />
            <Carousel>
              <Carousel.Item>
                <Card className="text-center">
                  <Card.Img src={bg1} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Header>Innovantes IT</Card.Header>
                    <Card.Body>
                      <Card.Title>Software Developer</Card.Title>
                      <Card.Text>
                        Worked on FastAPI, Facebook Prophet and Data analytics.
                      </Card.Text>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="text-center">
                  <Card.Img src={bg2} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Header>NullClass</Card.Header>
                    <Card.Body>
                      <Card.Title>Machine Learning Engineer</Card.Title>
                      <Card.Text>
                        Worked on Emotion detection and Drowsy eyes detection project using opencv and Machine Learning.
                      </Card.Text>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="text-center">
                  <Card.Img src={bg3} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Header>Boston consulting group (BCG)</Card.Header>
                    <Card.Body>
                      <Card.Title>Data scientist</Card.Title>
                      <Card.Text>
                        Performed Data cleaning and finding insights of customer churn data.
                      </Card.Text>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container><br /><br /><br/>
      <Row>
        <Col sm={4} className='download'>
        <a href={process.env.PUBLIC_URL + "./Assets/Ankita_joshi-resume.pdf"} download="ankita_joshi_resume.pdf"><MdOutlineDownloadForOffline size={100} /></a><br/>Download Resume</Col>
        <Col sm={8}>
          <h2 className='project'><b>Projects</b></h2><br />
          <ul className='pro-li'>
            <li><b>Employee Management System</b> &nbsp; GUI based interactive EMS, including charts and data Storage.<br/> [ Python, Tkinter, Matplotlib, SQLite ]</li><br/>
            <li><b>HR Analysis</b> &nbsp; Predicted whether employees will stay to prevent them from leaving. <br/> [ Exploratory Data Analysis, SVM, Random Forest, Decision Tree ]</li><br/>
            <li><b>Emotion Detector</b> &nbsp; Detect and classify seven different facial Emotion. <br/>[ openCV, computer vision, scikit-learn, Tkinter ]</li><br/>
            <li><b>Drowsiness Detector</b> &nbsp; Detect and differentiate the active and non-active state through eye movement. <br/>[ Computer vision, openCV, Haar Cascade, scikit-learn ]</li>
          </ul>
        </Col>
      </Row><br /><br />
      <Container className='footer'>
        <Col>
          <Row className='con-details'>
            <Col>
              <FaMobileScreenButton size={20} /><p>+91 8955789513</p>
            </Col>
            <Col>
              <FaGithub size={20} /><p><a href="https://github.com/ankita-joshi2810">ankita-joshi2810</a></p>
            </Col>
            <Col>
              <IoIosMail size={20} /><p>Ankitajoshiash2810@gmail.com</p>
            </Col>
            <Col>
              <FaLinkedin size={20} /><p><a href="https://www.linkedin.com/in/ankita-joshi28">ankita-joshi28</a></p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  )
}

export default App
