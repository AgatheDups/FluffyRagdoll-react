import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NotFoundData from "./json/notfound.json"
import { motion } from "framer-motion"


export default function NotFound(){
    const [h2, setH2] = useState({});

    useEffect(() => {
        setH2(NotFoundData);
    },[]);


    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <h2>{h2.content}</h2>
                <img className="image-chat col-lg-4" id="image1" src="../public/image/404.jpg" alt="Erreur 404" />
            </div>
            <Footer classFooter={'stick-footer'}/> 
        </motion.div>
      );
}