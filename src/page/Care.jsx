import Card from "../components/Card";
import ImagedTitledP from "../components/ImagedTitledP";
import Footer from "../components/Footer";
import careData from "./json/care.json"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"


export default function Care(){
    // Paragraph and card from Json
    const [paragraphs, setParagraphs] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setParagraphs(careData.paragraph);
        setCards(careData.card);
    },[]);

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                {paragraphs.map((paragraph, index) => (
                    <ImagedTitledP key={index} title={paragraph.title} imageSrc={paragraph.imageSrc} imageAlt={paragraph.imageAlt}>
                        <p>{paragraph.content} <br /><br />{paragraph.content2}</p>
                    </ImagedTitledP>
                ))}
                <hr/>
                <div className="row">
                    {cards.map((card, index) => (
                        <Card 
                            key={index}
                            titleCard={card.titleCard} 
                            imageSrcCard={card.imageSrcCard} 
                            imageAltCard={card.imageAltCard} 
                            linkCard={card.linkCard} 
                            textCard={card.textCard}
                        />
                    ))}
                </div>
            </div>
            <Footer/> 
        </motion.div>
    )
}