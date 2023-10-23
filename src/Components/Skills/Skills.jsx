import React from 'react';
import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import SkillRow from '../SkillRow/SkillRow';
import ui from'../../assets/ui-design.png';
import website from'../../assets/website-design.png';
import appDesign from'../../assets/app-design.png';

export default function Skills() {
  return (
    <section id='skills' className="pt-5 pb-5">
      <Container>
        <div className="skill-content text-center mx-auto">
          <h2>What I Do</h2>
          <p className='mx-auto'>
            I am a skilled and passionate front-end developer with experience
            in creating visually appealing and user-friendly websites. I have a
            strong understanding of design and a keen eye for detail. I am
            proficient in HTML, CSS, Bootstrap, MUI, and JavaScript, as well
            as frameworks such as ReactJS.
          </p>
        </div>

        <Row className="mb-3">
          <Col>
            <SkillRow imgSrc={ui} title="UI/UX design" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <SkillRow
              imgSrc={website}
              title="Website design"
              para="fdsdftyuytrdbnmkjtiroertuhfjdshdgf"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <SkillRow
              imgSrc={appDesign}
              title="App design"
              para="fdsdftyuytrdbnmkjtiroertuhfjdshdg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}