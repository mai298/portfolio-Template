import React from 'react';
import './SkillRow.css';
import { Row, Col } from 'react-bootstrap';

export default function SkillRow({ imgSrc, title, para }) {
    return (
      <Row className="items mx-auto text-start">
        <Col xs={3} md={2}>
          <img src={imgSrc} alt="" className="img-fluid text-center" style={{width:"70px",height:"70px"}} />
        </Col>
        <Col xs={10} md={10} >
            <div className="items-content">
                <h2>{title}</h2>
          <p>{para}</p>
            </div>
          
        </Col>
      </Row>
    );
  }