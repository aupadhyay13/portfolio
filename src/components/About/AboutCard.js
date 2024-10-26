import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hello Everyone, I'm <span className="purple"> Aditya Upadhyay </span> 
            from  <span className="purple"> Toronto, Canada.</span>
            <br />I'm a Full Stack Developer with a passion for building innovative solutions.
            <br />
            <br />
            When I'm not coding, I enjoy engaging in a few other interests:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "The only way to do great work is to love what you do."{' '}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
