import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              A LITTLE ABOUT <span className="purple"> WHO I AM</span>
            </h1>
            <p className="home-about-body">
              My journey into the world of programming began with curiosity, and over time, it has transformed into a passion that drives me every day. 🚀
              <br />
              <br />
              I've honed my skills in languages like 
              <i>
                <b className="purple"> JavaScript, Python, and Golang</b>
              </i>, and I'm always eager to learn more.
              <br />
              <br />
              I'm particularly interested in creating innovative 
              <i>
                <b className="purple"> web applications, developing robust software solutions, and exploring the vast potential of cloud computing</b>
              </i>.
              <br />
              <br />
              When I'm not coding, you'll likely find me diving deep into the latest tech trends, especially in 
              <i>
                <b className="purple"> Node.js</b> and modern JavaScript frameworks like 
                <b className="purple"> Angular, React, and Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              I'm always open to new opportunities and collaborations. Feel free to <span className="purple">reach out</span> to me on any of these platforms.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aupadhyay13/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-upadhyay1311/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
