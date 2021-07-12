import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import MusicPhase from '../MusicPhase/MusicPhase.jsx';
import DevPhase from '../DevPhase/DevPhase.jsx';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="My Story" />
        <Row className="about-wrapper text-center">
          <Col sm={12}>
            <p className="about-wrapper__info-text">
              Welcome! I'm currently a full stack developer for Duquesne Light Company in
              Pittsburgh, PA. The picture you see is from my former life as Co Principal Trumpet of
              the Sarasota Orchestra. My journey to this point has been a
              series of twists and turns that have led me here to Indiana, PA - just outside of
              Pittsburgh. Click on one of the buttons below to get a sense of where I've come from.
            </p>
          </Col>
        </Row>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <DevPhase />
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <MusicPhase />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        <div className="about-wrapper__info">
          {resume && (
            <span className="d-flex mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={resume}
              >
                View My Resume
              </a>
            </span>
          )}
        </div>
      </Container>
    </section>
  );
};

export default About;
