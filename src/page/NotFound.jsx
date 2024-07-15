import Footer from "../components/Footer";
import { motion } from "framer-motion"


export default function NotFound(){
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <h2>Page non trouvée</h2>
                <img className="image-chat col-lg-4" id="image1" src="../public/image/404.jpg" alt="Erreur 404" />
            </div>
            <Footer classFooter={'stick-footer'}/> 
        </motion.div>
      );
}