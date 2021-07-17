import React, { useContext, useState } from 'react';
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
