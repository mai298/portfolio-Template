import React from 'react'
import'./Clients.css';
import { Container,Row ,Col} from 'react-bootstrap';
import walmart from'../../assets/walmart.png';
import adobe from'../../assets/adobe.png';
import microsoft from'../../assets/microsoft.png';
import facebook from'../../assets/facebook.png';
export default function Clients() {
  return (
  <section id='clients' className='pt-5 pb-5' >
    <Container  >

      <div className="client-content">
        <h2>My Clients</h2>
        <p className='mx-auto'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies i have worked with include</p>

      </div>
      <Row className='mt-4 mx-auto'>
        <Col lg={2} sm={6} md={4} className='mx-auto  mb-3'>
          <img src={walmart} alt="" className='img-fluid'/>
        </Col>
        <Col lg={2} sm={6} md={4} className='mx-auto  mb-3' >
        <img src={adobe} alt="" className='img-fluid'/>

        </Col>
        <Col lg={2} sm={6} md={4} className='mx-auto  mb-3'  >
        <img src={microsoft} alt="" className='img-fluid'/>

        </Col>
        <Col lg={2} sm={6} md={4} className='mx-auto '>
        <img src={facebook} alt="" className='img-fluid'/>

        </Col>
      </Row>
    </Container>

  </section>
  )
}
