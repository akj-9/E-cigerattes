import { useRef } from "react";
import "./solutions.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title:"How to Quit Vaping: A Practical Guide",
        img:"https://images.everydayhealth.com/images/lung-respiratory/stop-smoking/a-practical-guide-to-quit-vaping-722x406.jpg",
        desc:"Many people believe that e-cigarettes or vaping can be a means to quit smoking. According to one report, an estimated 50,700 to 69,930 smokers in England quit by using e-cigarettes as a cessation tool",
        link:"https://www.everydayhealth.com/stop-smoking/a-practical-guide-to-quit-vaping/",
    },
    {
        id:2,
        title:"7 Tips For How to Quit Vaping",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAzwj1SLgoNoHEwSS_-43m6kYDuJlLW6PQ8rZ1181WQ&s",
        desc:"Many people are under the misconception that the techniques for how to quit vaping are easier than those to stop smoking cigarettes. But that’s simply not true, as quitting vaping can sometimes be harder than quitting smoking cigarettes.",
        link:"https://www.ororecovery.com/how-to-quit-vaping-stop-vape-withdrawal/",
    },
    {
        id:3,
        title:"How to Quit Vaping",
        img:"https://teen.smokefree.gov/sites/default/files/styles/quit_note/public/featured_images/18638_Smokeree_E-Cig_QuitNotes_8_Release.jpg?itok=JzsqDxeT",
        desc:"Quitting vaping can be easier when you prepare in advance and have a plan. Find out what steps you can take to get ready to quit vaping.",
        link:"https://teen.smokefree.gov/quit-vaping/how-to-quit-vaping",
    },
    {
        id:4,
        title:"Electronic Cigarettes",
        img:"https://www.cdc.gov/tobacco/basic_information/e-cigarettes/images/CDC-EVFY.jpg?_=59221",
        desc:"Get the facts about electronic cigarettes, their health effects and the risks of using e-cigarettes.",
        link:"https://www.cdc.gov/tobacco/basic_information/e-cigarettes/index.htm",
    },
];

const Single = ({item}) =>{

    const ref= useRef();

    const {scrollYProgress} = useScroll({target:ref, offset:["start start","end start"]});

    const y= useTransform(scrollYProgress, [0,1], ["0%", "-300%"]);

    return (
        <section ref={ref}>
            <div className="container" >
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link}>
                            <button>Read More</button>
                        </a>
                    </motion.div>
                </div> 
            </div>
        </section>
    )
};

const Solutions = () => {
    const ref= useRef();

    const {scrollYProgress} = useScroll({target:ref, offset:["end end","start start"],});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

  return (
    <div className="solutions" ref={ref}>
        <div className="progress">
            <h1>Ways to Quit</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map((item)=>(
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Solutions;
