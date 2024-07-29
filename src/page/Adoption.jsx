import Footer from "../components/Footer";
import { motion } from "framer-motion"

export default function Adoption (){
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <div id="Todo">
                <img src="./assets/giphy.gif" alt="" />
                </div>
            </div>
            <Footer classFooter={'stick-footer'}/> 
        </motion.div>
    )
}