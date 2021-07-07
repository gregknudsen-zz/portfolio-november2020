import React, { useContext, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import PortfolioContext from '../../context/context';

import AboutImg from '../Image/AboutImg';

import './musicPhase.scss';

const MusicPhase = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphThree, resume } = about;
  const [open, setOpen] = useState(false);

  return (
    <>
     Music Phase
    </>
  );
};

export default MusicPhase;
