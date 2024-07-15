import AgeCalculator from "../components/AgeCalculator";
import Bubble from "../components/Bubble";
import ImagedTitledP from "../components/ImagedTitledP";
import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import homeData from "./json/home.json"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function Home (){
    // Text, pagragraph, Food and Toy card Json
    const [imagedTitleP, setImagedTitleP] = useState({});
    const [titleP, setTitleP] = useState({});
    const [paragraphsOrigin, setParagraphsOrigin] = useState([]);
    const [paragraphsPhysical, setParagraphsPhysical] = useState([]);
    const [paragraphsCharacter, setParagraphsCharacter] = useState([]);
    const [paragraphsExpectancy, setParagraphsExpectancy] = useState([]);

    useEffect(() => {
        setImagedTitleP(homeData.imagedTitleP);
        setTitleP(homeData.titleP);
        setParagraphsOrigin(homeData.origin);
        setParagraphsPhysical(homeData.physical);
        setParagraphsCharacter(homeData.character); 
        setParagraphsExpectancy(homeData.bubble); 
    },[]);

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel"> 
            <ImagedTitledP title={imagedTitleP.title} imageSrc={imagedTitleP.imageSrc} imageAlt={imagedTitleP.imageAlt}>
                {paragraphsOrigin.map((origin, index) => (
                    <p key={index}> {origin.content} <br/></p>
                ))}
            </ImagedTitledP>
            <TitledP title={titleP.titlePhysical}>
            {paragraphsPhysical.map((physical, index) => (
                <p key={index}>
                <span>{physical.span}</span>{physical.content}<br/>
                </p>
            ))}
            </TitledP>
            <TitledP title={titleP.titleCharacter}>
                {paragraphsCharacter.map((character,index) =>(
                    <p key={index}>{character.content}</p>
                ))}
            </TitledP>
            <TitledP title={titleP.titleExpectancy}>
                <div className="d-flex">
                {paragraphsExpectancy.map((bubble, index) => (
                    <Bubble key={index} age={bubble.age} title={bubble.title}/>
                ))}
                </div>
            </TitledP>
            <TitledP title={titleP.titleCalculator}>
                {/* component for age calcule */}
                <AgeCalculator/>
            </TitledP>
            </div>
            <Footer/> 
        </motion.div>
    )
}