import React from 'react';
import'./Footer.css';
import { Container } from 'react-bootstrap';
import face from'../../assets/facebook-icon.png';
import twitter from'../../assets/twitter.png';
import youtube from'../../assets/youtube.png';
import insta from '../../assets/instagram.png';



export default function Footer() {
  return (
   <footer className='pt-5 pb-5'>
    <Container>
    <img src={face} alt="" className='img-fluid mx-auto  footer-img' />
    <img src={youtube} alt="" className='img-fluid mx-auto footer-img' />
    <img src={twitter} alt=""  className='img-fluid mx-auto footer-img'/>
    <img src={insta} alt="" className='img-fluid mx-auto footer-img' />

<hr/>
<p style={{color:"white",fontWeight:"bold"}}>Copyright © 2023. All rights reserved.</p>
    </Container>

   </footer>
  )
}
