import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png'

import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: "100%"}} />
        <div className="f-content">
            <span style={{marginTop:'25px'}}> kagimujoseph00@gmail.com </span>
            <div className="f-icons">
              {/* Twitter link */}
                <a href='https://twitter.com/JOSEPHKAGIMU2'> <Twitter color='white' size='2rem' className='insta' /> </a>

                <Facebook color='white' size='2rem' className='facebook' />
              {/* Github link */}
                <a href='https://github.com/Josephkagimu1?tab=repositories'>
                <Github color='white' size='2rem' className='github' /> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;