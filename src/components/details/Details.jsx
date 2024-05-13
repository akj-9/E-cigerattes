import { useRef } from "react";
import "./details.scss";
import {motion, useInView} from "framer-motion";

const variants={
    initial:{
        y: 500,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Details = () => {

    const ref= useRef();

    const isInView = useInView(ref, {margin: "-100px"});

  return (
    <motion.div ref={ref} className="details" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Quit Together</motion.h1>
        <motion.p variants={variants}>An initiative by:</motion.p>
        <motion.div className="item" variants={variants}>
            <h2>Harshit Agarwal</h2>
            <span>RA2011028030027</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Aksh Jain</h2>
            <span>RA2011028030007</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Aditya Prabhakar</h2>
            <span>RA2011028030015</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Abhishek Kumar</h2>
            <span>RA2011028030012</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay: 3, duration: 1}}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" width="450px" height="450px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet">
                <title>form-line</title>
                <motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength: 1}} transition={{duration:3}} d="M21,12H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H21a1,1,0,0,1,1,1v4A1,1,0,0,1,21,12ZM8,10H20V7.94H8Z" class="clr-i-outline clr-i-outline-path-1"/><motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength: 1}} transition={{duration:3}} d="M21,14.08H7a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1H18.36L22,16.3V15.08A1,1,0,0,0,21,14.08ZM20,18H8V16H20Z" class="clr-i-outline clr-i-outline-path-2"/><motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength: 1}} transition={{duration:3}} d="M11.06,31.51v-.06l.32-1.39H4V4h20V14.25L26,12.36V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V31a1,1,0,0,0,1,1h8A3.44,3.44,0,0,1,11.06,31.51Z" class="clr-i-outline clr-i-outline-path-3"/><motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength: 1}} transition={{duration:3}} d="M22,19.17l-.78.79A1,1,0,0,0,22,19.17Z" class="clr-i-outline clr-i-outline-path-4"/><motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength: 1}} transition={{duration:3}} d="M6,26.94a1,1,0,0,0,1,1h4.84l.3-1.3.13-.55,0-.05H8V24h6.34l2-2H7a1,1,0,0,0-1,1Z" class="clr-i-outline clr-i-outline-path-5"/><motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength: 1}} transition={{duration:3}} d="M33.49,16.67,30.12,13.3a1.61,1.61,0,0,0-2.28,0h0L14.13,27.09,13,31.9a1.61,1.61,0,0,0,1.26,1.9,1.55,1.55,0,0,0,.31,0,1.15,1.15,0,0,0,.37,0l4.85-1.07L33.49,19a1.6,1.6,0,0,0,0-2.27ZM18.77,30.91l-3.66.81L16,28.09,26.28,17.7l2.82,2.82ZM30.23,19.39l-2.82-2.82L29,15l2.84,2.84Z" class="clr-i-outline clr-i-outline-path-6"/>
            </svg>
        </motion.div>
        <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1}}>
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email"/>
            <textarea rows={8} placeholder="Message"/>
            <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Details;
