import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
//import Resume from '../../img/wave.png'
import Resume from '../../components/jose-CV.pdf'
import { motion } from 'framer-motion';

const Services = () => {
    const transition = {duration : 1, type: 'spring'}

  return (
    <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome">
        <span> My Awesome </span>
        <span> Services </span>
        <spane>
            Joseph kagimu is a programmer with all the needed skills in Web Designing <br />
            Software engineer with skills in React.js, CSS, HTML, Javascript, <br/>
             bootstrap, Carbon-design, Photoshop .
        </spane>
        
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
        
        <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>

        </div>

        {/* right side */}
        <div className="cards">
            <motion.div
            whileInView={{left: '8rem'}}
            initial={{left: '10%'}}
            transition={transition}

             style={{left: '14rem'}} >
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>

            {/* second card */}
            <motion.div 
             whileInView={{left: '5rem'}}
             initial={{left: '-20%'}}
             transition={transition}

            style={{top: "12rem", left: "-4rem"}}>
                <Card 
                emoji={Glasses}
                heading={'Developer'}
                detail={"HTML, Css, JavaScript, React"}
                />
            </motion.div>

            {/* 3rd card */}
            <motion.div 
             whileInView={{left: '12rem'}}
             initial={{left: '15%'}}
             transition={transition}

            style={{top: '19rem', left: '12rem'}} >
                <Card 
                  emoji={Humble}
                  heading={"UI/UX"}
                  detail= {
                      "Programming made easy, Experienced in React.js, Frontend development"
                  }
                />
            </motion.div>  
            
            <div className='blur s-blur2' style={{background: "var(--purple)"}} ></div>         
        </div>
    </div>
  )
}

export default Services