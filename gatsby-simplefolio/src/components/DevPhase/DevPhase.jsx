import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import PortfolioContext from '../../context/context';

import AboutImg from '../Image/AboutImg';

import './devPhase.scss';

const DevPhase = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphThree, resume } = about;
  const [open, setOpen] = useState(false);

  return (
    <>
      Dev Phase
    </>
    //   {/* <Accordion>
    //     <Card>
    //       <Card.Header>
    //         <Accordion.Toggle as={Button} variant="link" eventKey="0">
    //           Phase 2 - Developer
    //         </Accordion.Toggle>
    //       </Card.Header>
    //       <Accordion.Collapse eventKey="0">
    //         <Card.Body className="my-card-body">
    //         <div className="about-wrapper__info">
    //             <p className="about-wrapper__info-text">
    //               Welcome! I'm currently a full stack developer for Duquesne Light Company in
    //               Pittsburgh, PA. The picture you see is from my former life as Co Principal Trumpet
    //               of the Sarasota Orchestra. I don't have any photos of me sitting at a computer
    //               this exciting, so that's what I decided to go with. ツ My journey to this point
    //               has been a series of twists and turns that have led me here to Indiana, PA - just
    //               outside of Pittsburgh.
    //             </p>
    //             <p className="about-wrapper__info-text">I love to learn things.</p>
    //             <p className="about-wrapper__info-text">
    //               {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
    //             </p>
    //             {resume && (
    //               <span className="d-flex mt-3">
    //                 <a
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="cta-btn cta-btn--resume"
    //                   href={resume}
    //                 >
    //                   View My Resume
    //                 </a>
    //               </span>
    //             )}
    //           </div>
    //         </Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //   </Accordion>
    // </> */}
  );
};

export default DevPhase;
