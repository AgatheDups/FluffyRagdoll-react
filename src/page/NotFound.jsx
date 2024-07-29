import Footer from "../components/Footer";
import { motion } from "framer-motion"
import { getNotFoundData } from "../InternationalIzer";
import { useState } from "react";


export default function NotFound(){
    // eslint-disable-next-line no-unused-vars
    const [notFoundData, _] = useState(getNotFoundData())



    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <h2>{notFoundData.content}</h2>
                <img className="image-chat col-lg-4" id="image1" src="../public/assets/404.jpg" alt="Erreur 404" />
            </div>
            <Footer classFooter={'stick-footer'}/> 
        </motion.div>
      );
}