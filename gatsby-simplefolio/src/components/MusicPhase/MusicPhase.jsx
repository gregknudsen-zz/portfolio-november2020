import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Collapse from 'react-bootstrap/Collapse';
import Fade from 'react-bootstrap/Fade';
import PortfolioContext from '../../context/context';

import AboutImg from '../Image/AboutImg';

import './musicPhase.scss';

const MusicPhase = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphThree, resume } = about;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="my-button cta-btn cta-btn--resume"
      >
        Phase I - Musician
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="about-wrapper__image">
            <AboutImg alt="profile picture" filename={img} />
          </div>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
};

export default MusicPhase;
