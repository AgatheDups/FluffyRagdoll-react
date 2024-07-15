import Card from "../components/Card";
import ImagedTitledP from "../components/ImagedTitledP";
import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import foodData from "./json/food.json"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"


export default function Food (){
    // Pagragraph, Food and Toy card Json
    const [paragraph, setParagraph] = useState({});
    const [foodCards, setFoodCards] = useState([]);
    const [toyCards, setToyCards] = useState([]);
    

    useEffect(() => {
        setParagraph(foodData.paragraph);
        setFoodCards(foodData.foodCards);
        setToyCards(foodData.toyCards);
    },[]);
        
    
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                <ImagedTitledP title={paragraph.title} imageSrc={paragraph.imageSrc} imageAlt={paragraph.imageAlt}>
                <p>{paragraph.content}</p>
                </ImagedTitledP>
                <hr />
                <div className="row">
                    {foodCards.map((foodCard, index) => (
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
                <TitledP title={paragraph.title2}/>
                <div className="row">
                    {toyCards.map((toyCard, index) => (
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