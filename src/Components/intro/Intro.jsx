import React from 'react';
import './Intro.css';
import hire from '../../assets/hireme.png';
import Button from 'react-bootstrap/Button';
import bg from '../../assets/image.png';
import { Container, Row, Col } from 'react-bootstrap';


export default function Intro() {
  return (
<section  id="intro" className="pt-5 mt-5 text-start">
      <Container>
        <Row>
          <Col lg={6} md={4} className="pt-5 mx-auto">
            <div className="content">
              <h4 style={{ color: 'white' }}>Hello,</h4>
              <h2 style={{ color: 'white' }}>
                I'm <span style={{ color: 'yellow' }}>Mai Mohamed</span>
                <br /> Front-End Developer
              </h2>
              <p style={{ color: 'white' }}>
                I am a skilled and passionate front-end developer with
                experience in creating visually appealing and user-friendly
                websites.
              </p>
              <Button className="hire-btn">
                <img src={hire} className="hire-img" alt="contact" />
                Hire me
              </Button>
            </div>
          </Col>
          <Col lg={3} md={6} className='' >
            <img src={bg} alt="bg" className="img-fluid bg mx-auto " />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
