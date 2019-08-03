import React from 'react';

import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import behance from '../../assets/icons/behance.svg'

import './Navbar.css'

const navbar = () => (
  <div id='navbar'>
    <h1>
        GUIDO OFFERMANS
    </h1>
    <h2>
    &#123; DEVELOPER PAGE &#125;
    </h2>
    <ul>
      <li><a href='https://github.com/GuidoOffermans' target='_blank' rel='noopener noreferrer'><img src={github} alt=''/></a></li>
      <li><a href='https://www.linkedin.com/in/guido-offermans-130525160' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt=''/></a></li>
      <li><a href='https://www.behance.net/guidooffermans' target='_blank' rel='noopener noreferrer'><img src={behance} alt=''/></a></li>
    </ul>
  </div>
);



export default navbar;