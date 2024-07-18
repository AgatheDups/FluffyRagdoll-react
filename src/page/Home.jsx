import AgeCalculator from "../components/AgeCalculator";
import Bubble from "../components/Bubble";
import ImagedTitledP from "../components/ImagedTitledP";
import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import { motion } from "framer-motion"
import { getHomeData } from "../InternationalIzer";
import { useState } from "react";

export default function Home (){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [homeData, _] = useState(getHomeData())


    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel"> 
            <ImagedTitledP title={homeData.imagedTitleP.title} imageSrc={homeData.imagedTitleP.imageSrc} imageAlt={homeData.imagedTitleP.imageAlt}>
                {homeData.origin.map((origin, index) => (
                    <p key={index}> {origin.content} <br/></p>
                ))}
            </ImagedTitledP>
            <TitledP title={homeData.titleP.titlePhysical}>
            {homeData.physical.map((physical, index) => (
                <p key={index}>
                <span>{physical.span}</span>{physical.content}<br/>
                </p>
            ))}
            </TitledP>
            <TitledP title={homeData.titleP.titleCharacter}>
                {homeData.character.map((character,index) =>(
                    <p key={index}>{character.content}</p>
                ))}
            </TitledP>
            <TitledP title={homeData.titleP.titleExpectancy}>
                <div className="d-flex">
                {homeData.bubble.map((bubble, index) => (
                    <Bubble key={index} age={bubble.age} title={bubble.title}/>
                ))}
                </div>
            </TitledP>
            <TitledP title={homeData.titleP.titleCalculator}>
                {/* component for age calcule */}
                <AgeCalculator/>
            </TitledP>
            </div>
            <Footer/> 
        </motion.div>
    )
}