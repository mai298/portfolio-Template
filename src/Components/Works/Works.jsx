import React from 'react'
import './Works.css';
import { Container, Row, Col, Button} from 'react-bootstrap';
import port1 from'../../assets/portfolio-1.png';
import port2 from'../../assets/portfolio-2.png';
import port3 from'../../assets/portfolio-3.png';
import port4 from'../../assets/portfolio-4.png';
import port5 from'../../assets/portfolio-5.png';
import port6 from'../../assets/portfolio-6.png';

export default function Works() {
  return (
   <section id='works' className='pt-5 pb-5'>
    <Container>

    <div className="portofolio-content text-center mx-auto">
          <h2>My Portfolio</h2>
          <p className='mx-auto'>
            I am a skilled and passionate front-end developer with experience
            in creating visually appealing and user-friendly websites. I have a
            strong understanding of design and a keen eye for detail. I am
            proficient in HTML, CSS, Bootstrap, MUI, and JavaScript, as well
            as frameworks such as ReactJS.
          </p>
        </div>

        <Row className='pt-5'>
          <Col lg={4} md={6} className='mb-3'>
            <img src={port1} alt="" className='img-fluid mb-3' />
          </Col>


          <Col lg={4} md={6}>
            <img src={port2} alt="" className='img-fluid mb-3' />
          </Col>


          <Col lg={4} md={6}>
            <img src={port3} alt="" className='img-fluid mb-3' />
          </Col>
          <Col lg={4} md={6}>
            <img src={port4} alt="" className='img-fluid mb-3' />
          </Col>

          <Col lg={4} md={6}>
            <img src={port5} alt="" className='img-fluid mb-3' />
          </Col>

          <Col lg={4} md={6}>
            <img src={port6} alt="" className='img-fluid mb-3' />
          </Col>

        </Row>

        <Button className="more-btn fs-5 mt-3">
                See More
              </Button>
    </Container>
   </section>
  )
}
