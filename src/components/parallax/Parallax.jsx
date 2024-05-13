import { useRef } from "react";
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  });

  const yText=useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg=useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  return (
    <div className="parallax" ref={ref} style={{background: type==="eff ects"? "linear-gradient(180deg, #84c4cc, #398183)":"linear-gradient(180deg, #398183, #84c4cc)"}}>
      <motion.h1 style={{y:yText}}>{type==="effects" ? "If You Dont Quit Vaping!" : "Ways To Quit!"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{y:yBg,
        backgroundImage: `url(${type==="effects" ? "/planets.png" : "/sun.png"})`,
      }}></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
