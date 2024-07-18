import Card from "../components/Card";
import ImagedTitledP from "../components/ImagedTitledP";
import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion"
import { getFoodData } from "../InternationalIzer";


export default function Food (){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [foodData, _] = useState(getFoodData())
        
    
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <ImagedTitledP title={foodData.paragraph.title} imageSrc={foodData.paragraph.imageSrc} imageAlt={foodData.paragraph.imageAlt}>
                <p>{foodData.paragraph.content}</p>
                </ImagedTitledP>
                <hr />
                <div className="row">
                    {foodData.foodCards.map((foodCard, index) => (
                    <Card key={index} 
                        titleCard={foodCard.titleCard}
                        imageSrcCard={foodCard.imageSrcCard}
                        imageAltCard={foodCard.imageAltCard} 
                        linkCard={foodCard.linkCard}
                        textCard={foodCard.textCard}
                        buttonCard={foodCard.buttonCard}
                    />
                    ))}
                </div>
                <hr />
                <TitledP title={foodData.paragraph.title2}/>
                <div className="row">
                    {foodData.toyCards.map((toyCard, index) => (
                    <Card key={index}
                        titleCard={toyCard.titleCard} 
                        imageSrcCard={toyCard.imageSrcCard} 
                        imageAltCard={toyCard.imageAltCard} 
                        linkCard={toyCard.linkCard} 
                        textCard={toyCard.textCard}
                        buttonCard={toyCard.buttonCard}
                    />
                    ))}
                </div>
            </div>
            <Footer/> 
        </motion.div>
    )
}