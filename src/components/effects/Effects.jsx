import { useRef } from "react";
import "./effects.scss";
import { color, motion, useInView } from "framer-motion";

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
};

const Effects = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin:"-100px"});

  return (
    <motion.div className="effects" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>E-cigerattes Awarness</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.jpg" alt="" />
            <h1><motion.b whileHover={{color: "orange"}}>Harmful</motion.b> Effects of</h1>
        </div>
        <div className="title">
            <h1>using<motion.b whileHover={{color: "orange"}}> E-cigerattes</motion.b></h1>
            <button>Let's Quit Vaping</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray",color: "black"}}>
            <h2>Vaping/E-Cigarettes</h2>
            <p>Vaping involves inhaling aerosol from an electronic device containing nicotine, flavorings, and additives, leading to potential health risks including breathing problems, organ damage, addiction, and other conditions.</p>
            <a href="https://my.clevelandclinic.org/health/treatments/21162-vaping">
            <button>Visit Website</button></a>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color: "black"}}>
            <h2>Can vaping damage your lungs? What we do (and don't) know</h2>
            <p>Vaping is on the rise among teenagers, but reports link it to severe lung disease.</p>
            <a href="https://www.health.harvard.edu/blog/can-vaping-damage-your-lungs-what-we-do-and-dont-know-2019090417734">
              <button>Visit Website</button></a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Effects;
