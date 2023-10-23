import React from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';

export default function NavBar() {
  return (
  <>
  
  <Navbar expand="lg"  style={{position:"sticky",background: "rgb(30, 30, 30)!important"
,zIndex:"3"}}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className='logo  img-fluid ' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white",backgroundColor:"white"}}/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={300} className='desktop-menu-list' >Home</Link>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={300} className='desktop-menu-list' >About</Link>
            <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={300} className='desktop-menu-list' >Portfolio</Link>
            <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={300} className='desktop-menu-list' >Clients</Link>
          </Nav>
<Button className='desktop-btn' onClick={()=>{
  document.getElementById('contact').scrollIntoView({behavoir:"smooth"});
}}>
    <img src={contact} className='contact-img' alt="contact" />
    Contact Me</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  
  </>
  )
}
