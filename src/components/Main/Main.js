import React from 'react';

import guidoprofile from '../../assets/Photos/guido-profile.png'

import './Main.css'

const main = () => (
  <div id='main'>
    <div id='test'>
    </div>
      <div className='about'>
        <div>
          <h2>
            ABOUT
          </h2>
          <p>
            I'm a 25 year old dutch guy and currently living in Nijmegen. Born in Venlo &#40;South part of the Netherlands&#41;.<br/>
            I have been studying Applied Psychology for the past 3 years and decided i wanted to go in different direction. Thats how i found Codaisseur. Excited and eager to learn much in the upcoming months.
           </p>
          <br/>
          <br/>
          <h2>
            HOBBIES 
          </h2>
         
          <ul>
            <li><p>Games & Boardgames, D&D</p></li>
            <li><p>Everything sci-fi and fantasy related</p></li>
            <li><p>Music, Guitar, Drum n Bass</p></li>
            <li><p>Festivals</p></li>
            <li><p>Technology & Learning</p></li>
            <li><p>Creating, Artsy things</p></li>
            <li><p>Training with bodyweight</p></li>
          </ul>
           
         
          
        </div>
        <div>
          <img className='profile' src={guidoprofile} alt=''/>
        </div>
      </div>
      <div id='skills'>
        <ul>
          <li className='blue-circle'><p>&#60;&#47;&#62; <br/>HTML</p></li>
          <li className='blue-circle'><p>&#123; &#125; <br/>CSS</p></li>
          <li className='blue-circle'><p>&#40;&#123; &#125;&#41;<br/>JS</p></li>
        </ul>
      </div>
    
  </div>
);



export default main;