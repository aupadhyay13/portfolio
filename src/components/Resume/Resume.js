import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/ADITYA_UPADHYAY_RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Freelancing"
              date="Nov 2022 - present"
              content={[
                "Successfully integrated third-party APIs like OpenAI, Midjourney, and Leonardo AI to generate and edit images from text prompts, leading to a 30% increase in user engagement.",
                "Developed APIs for mobile app, enabling remote audience participation with real-time audio feedback.",
                "Implemented query optimization strategies in MongoDB, reducing cluster size and lowering infrastructure costs by 30%, enhancing client billing efficiency and reducing response times by 50%",
                "Implemented cron jobs to automate the data retrieval process.",
                "Created and integrated APIs to search and retrieve content from TikTok, Instagram, and YouTube, enhancing content discovery capabilities of app and providing users with a seamless experience.",
                "Enforced robust security measures, including JWT and encryption algorithms for secure user authentication and AWS security features, reducing security incidents by 25%."
              ]}
            />
            <Resumecontent
              title="Senior Software Engineer [Solution Analysts]"
              date="Jun 2019 - Sep 2022"
              content={[
                "Managed backend for high-traffic applications with over 100K users, ensuring optimal performance and reliability, achieving a 99.9% uptime.",
                "Engineered RESTful API for mobile app, enabling contactless payments via NFC bands, enhancing transaction ease and security, leading to a 50% increase in payment processing speed.",
                "Built features for the admin panel using Angular, including a graphical dashboard and various management modules, streamlining admin operations and reducing management time.",
                "Implemented CI/CD, automating systems and processes, leading to a significant increase in deployment efficiency and reducing manual errors.",
                "Leveraged Docker and Kubernetes for application containerization and orchestration, which resulted in improvement of application deployment speed, significant increase in system scalability, and reduced infrastructure costs.",
                "Led and mentored junior engineers in JavaScript, Angular, and NodeJS, fostering a supportive and collaborative team environment, resulting in an improvement in code quality."
              ]}
            />
           
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech in Computer Engineering [B.V.M. Anand] "
              date="2015 - 2019"
              content={[
                `CGPA: 7.47/10 `,
                "I completed bachelor degree from Birla Vishwakarma Mahavidyalaya Eng College.",
              ]}
            />

            <h3 className="resume-title">Awards and Recognition</h3>
            <Resumecontent
              title="Mr. Perfectionist [Solution Analysts]"
              content={[
                `In recognition of setting new standards of communication with developers and clients alike by not keeping any loose ends in the written or verbal communication.`,
              ]}
            />
             <Resumecontent
              title="Rising Stars [Solution Analysts]"
              content={[
                `In recognition of showing a glimpse of potential to move up in roles and responsibilities while performing all the given duties well. Appreciated for keeping positive energy and growth intent along with dedication.`
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
