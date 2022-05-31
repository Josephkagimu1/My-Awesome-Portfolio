import React from 'react';
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";

import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';

const Works = () => {
  return (
    <div className="Works">
        
        {/* left side */}
        <div className="awesome">
        <span style={{fontSize: '30px'}}> Works for All these </span>
        <span  > Brands & Clients </span>
        <spane>
            <li>Joseph kagimu is a programmer with all the 
            <br /> needed skills in Web Designing Software engineer with
            <br/> skills in React.js, CSS, HTML, Carbon-design, Photoshop .
             </li>
            <li>Works for different brands most especially Upwork</li>
            <li>Great contributer to OPENMRS, an open source software <br/>
             platform (write code save lives). Find it here <a href='https://openmrs.org'>Openmrs</a> </li>
             
        </spane>
        
        <Link spy={true} to='Contact-form' smooth={true} >
        <button className='button s-button'> Hire me </button>
        </Link>       
        
        <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>

        </div>

        {/* right side */}
        <div className="w-right">
          <motion.div
          initial={{rotate: 45}}
          whileInView={{rotate: 0}}
          viewport={{duration: 7.5, type: 'spring'}}
           className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>

            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>

            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>

            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>

            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>

            {/* background Circle */}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>

          </motion.div>
        </div>

    </div>
  )
}

export default Works;