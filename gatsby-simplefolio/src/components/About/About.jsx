import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
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
              the Sarasota Orchestra. I don't have any photos of me sitting at a computer this
              exciting, so that's what I decided to go with. ツ My journey to this point has been a
              series of twists and turns that have led me here to Indiana, PA - just outside of
              Pittsburgh.
            </p>
          </Col>
        </Row>
        <Row className="about-wrapper text-center">
          <Col sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <MusicPhase />
            </Fade>
          </Col>
        </Row>
        <Row className="about-wrapper text-center">
          <Col sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <DevPhase />
            </Fade>
          </Col>
        </Row>
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
