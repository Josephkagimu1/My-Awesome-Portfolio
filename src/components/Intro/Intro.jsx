/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Intro.css';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png';

import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from "../../Context";
import { useContext } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-scroll/modules';

const Intro = () => {
    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className='i-left'>
        <div className='i-name'>

            <span style={{color: darkMode? 'white' : ''}}> Hy! I Am </span>
            <span> Joseph Kagimu </span>
            <span>Software Engineer with high level of experience <br/>
              in web designing and development, producing <br/>
              quality work</span>
        </div>

        <Link spy={true} to='Contact-form' smooth={true} >
        <button className="button i-button" > Hire me </button>
        </Link>

        </div>
        <div className='i-right'>
            
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" style={{width:'890px'}} />
            <img src={boy} alt="" className='boy' />
            <span className='arrow'>arrow</span>
           
            <motion.div
            initial={{left: '9rem', top: '18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}

             style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            
            {/* blur divs */}
            <div className='blur' style={{background: "rgb (238 210 255)"}}></div>
            <div className='blur' style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}></div>
        </div>
    </div>
  )
}

export default Intro;