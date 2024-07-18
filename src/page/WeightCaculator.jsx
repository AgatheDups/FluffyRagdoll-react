import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import TitledPWeight from "../components/TitledPWeight";
import { useState } from "react";
import { motion } from "framer-motion"
import { getWeightCalculatorData } from "../InternationalIzer";


export default function WeightCaculator (){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [weightCalculatorData, _] = useState(getWeightCalculatorData())


    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <TitledP title={weightCalculatorData.titleP.title}>
                    <img id="img-graph" src={weightCalculatorData.titleP.src} alt={weightCalculatorData.titleP.alt} />
                </TitledP>
                <div className="legend-graph">
                    {weightCalculatorData.legendGraph.map((legendGraph, index) => (
                        <div key={index} className={legendGraph.className}>
                            <div className={legendGraph.className2}></div>
                            <p>{legendGraph.content}</p> 
                        </div>
                    ))}
                    {weightCalculatorData.paragraph.map((paragraph, index) => (
                        <TitledPWeight key={index} title={paragraph.title}>
                            <p>{paragraph.content}</p>
                        </TitledPWeight>
                    ))}

                </div>
            </div>
            <Footer/> 
        </motion.div>
    )
}