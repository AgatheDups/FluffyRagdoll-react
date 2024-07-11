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
        const [paragraphsOrigin, setParagraphsOrigin] = useState([]);
        const [paragraphsPhysical, setParagraphsPhysical] = useState([]);
        const [paragraphsCharacter, setParagraphsCharacter] = useState([]);
    
        useEffect(() => {
            setImagedTitleP(homeData.imagedTitleP);
            setParagraphsOrigin(homeData.origin);
            setParagraphsPhysical(homeData.physical);
            setParagraphsCharacter(homeData.character);
        },[]);

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel"> 
            <ImagedTitledP title={imagedTitleP.title} imageSrc={imagedTitleP.imageSrc} imageAlt={imagedTitleP.imageAlt}>
                {paragraphsOrigin.map((origin, index) => (
                    <p key={index}> {origin.content} <br/></p>
                ))}
            </ImagedTitledP>
            <TitledP title={"Caratéristique physique"}>
            {paragraphsPhysical.map((physical, index) => (
                <p key={index}>
                <span>{physical.span}</span>{physical.content}<br/>
                </p>
            ))}
            </TitledP>
            <TitledP title={"Caractère et comportement"}>
                {paragraphsCharacter.map((character,index) =>(
                    <p key={index}>{character.content}</p>
                ))}
            </TitledP>
            <TitledP title={"Espérance de vie"}>
                <div className="d-flex">
                    <Bubble age={"12 ans"} title={"Minimum"}/>
                    <Bubble age={"17 ans"} title={"Maximum"}/>
                </div>
            </TitledP>
            <TitledP title={"Calculer l'âge humain de votre chat"}>
                {/* component for age calcule */}
                <AgeCalculator/>
            </TitledP>
            </div>
            <Footer/> 
        </motion.div>
    )
}