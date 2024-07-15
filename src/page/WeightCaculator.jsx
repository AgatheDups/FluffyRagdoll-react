import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import TitledPWeight from "../components/TitledPWeight";
import { useEffect, useState } from "react";
import weightCalculatorData from "./json/weightcalculator.json"
import { motion } from "framer-motion"


export default function WeightCaculator (){
    // paragraphs from Json
    const [titlePImg, setTitlePImg] = useState({});
    const [titleP, setTitleP] = useState({});
    const [legendGraph, setLegendGraph] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        setTitleP(weightCalculatorData.titleP);
        setTitlePImg(weightCalculatorData.titlePImg);
        setLegendGraph(weightCalculatorData.legendGraph);
        setParagraphs(weightCalculatorData.paragraph);
    },[]);

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <TitledP title={titleP.title}>
                    <img id="img-graph" src={titlePImg.src} alt={titlePImg.alt} />
                </TitledP>
                <div className="legend-graph">
                    {legendGraph.map((legendGraph, index) => (
                        <div key={index} className={legendGraph.className}>
                            <div className={legendGraph.className2}></div>
                            <p>{legendGraph.content}</p> 
                        </div>
                    ))}
                    {paragraphs.map((paragraph, index) => (
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