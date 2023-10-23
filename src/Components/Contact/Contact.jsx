import React from 'react';
import './Contact.css';
import { Container, Row,  Button, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();





    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_en10oqw', 'template_cqlevod', form.current, 'WQQ0qlIbHJJhelceL')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("email is sent successfully");
          }, (error) => {
              console.log(error.text);
          });
      };



  return (
    <section id='contact' className='pt-5 pb-5'>
<Container>
    <div className="contact-content">
        <h2>Contact Me</h2>
        <p className='text-center'>Please fill out the form below to discuss any work opportunities</p>
    </div>

    <Row>

  <Col lg={5} md={6} className='mx-auto'>
  <Form ref={form} onSubmit={sendEmail} >
    <InputGroup className="mb-3 ">
        <Form.Control
          placeholder="Your name"
          aria-label="Username"
          name='your_name'
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name='your_email' />
      </Form.Group>

      <InputGroup>
        <Form.Control name='message' placeholder=' Your Message' as="textarea" aria-label="With textarea" className='mb-3' />
      </InputGroup>
      <Button value='send' type="submit" className='submit-btn'>
        Submit
      </Button>
    </Form>
  
  
  
  </Col>

    </Row>
</Container>
    </section>
  )
}
