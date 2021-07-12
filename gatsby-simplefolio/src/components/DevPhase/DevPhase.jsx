import React, { useContext, useState } from 'react';
import PortfolioContext from '../../context/context';

import AboutImg from '../Image/AboutImg';

import './devPhase.scss';

const DevPhase = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphThree, resume } = about;
  const [open, setOpen] = useState(false);

  return (
    <>
      <p>Dev Phase</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Maecenas nec massa id neque pellentesque luctus sit amet at nibh.</li>
        <li>Pellentesque vitae mi ut ipsum tincidunt maximus.</li>
        <li>Aenean feugiat lacus a ante euismod varius.</li>
        <li>Proin condimentum magna nec nibh dictum pulvinar.</li>
        <li>Sed imperdiet sapien non efficitur venenatis.</li>
        <li>Aenean condimentum velit et fermentum imperdiet.</li>
        <li>Donec vitae ligula sed ligula placerat cursus.</li>
        <li>Mauris sed ante tempor, rhoncus nulla a, mollis felis.</li>
        <li>Etiam varius massa id feugiat facilisis.</li>
        <li>Suspendisse egestas nulla nec eros sodales hendrerit.</li>

        </ul>
    </>

      );
};

      export default DevPhase;
