import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>E-Cigerattes Awarness</motion.span>
            <div className="social">
                <a href="https://www.instagram.com/tv/BxH5ON3BgOq/?igsh=dDVvOWMzZDY5NWY="><img src="/instagram.png" alt="" /></a>
                <a href="https://youtu.be/G5RzMPCnWbc?si=07MQl0B0xGXIeIF9"><img src="/youtube.png" alt="" /></a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
