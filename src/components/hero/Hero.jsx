import "./hero.scss";
import { motion } from "framer-motion";

const textVariants ={
    initial: {
        x:-500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        },
    },
};
const sliderVariants ={
    initial: {
        x:0,
    },
    animate: {
        x:"-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h1 variants={textVariants}>E-Cigeratte Awarness</motion.h1>
                <motion.h2 variants={textVariants}>Erase the Mist: Quit Vaping Today!</motion.h2>
                <motion.div variants={textVariants} className="buttons">
                    <motion.a href="http://ijcrt.org/viewfull.php?&p_id=IJCRT2405089" variants={textVariants}>
                        <motion.button>See the Latest Research</motion.button>
                    </motion.a>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            QUIT VAPING
        </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
