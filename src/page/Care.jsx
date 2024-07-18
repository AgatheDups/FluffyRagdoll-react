import Card from "../components/Card";
import ImagedTitledP from "../components/ImagedTitledP";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion"
import { getCareData } from "../InternationalIzer";


export default function Care(){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [careData, _] = useState(getCareData())

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel">
                    <ImagedTitledP title={careData.paragraph.title} imageSrc={careData.paragraph.imageSrc} imageAlt={careData.paragraph.imageAlt}>
                        <p>{careData.paragraph.content} <br /><br />{careData.paragraph.content2}</p>
                    </ImagedTitledP>
                <hr/>
                <div className="row">
                    {careData.card.map((card, index) => (
                        <Card 
                            key={index}
                            titleCard={card.titleCard} 
                            imageSrcCard={card.imageSrcCard} 
                            imageAltCard={card.imageAltCard} 
                            linkCard={card.linkCard} 
                            textCard={card.textCard}
                            buttonCard={card.buttonCard}
                        />
                    ))}
                </div>
            </div>
            <Footer/> 
        </motion.div>
    )
}