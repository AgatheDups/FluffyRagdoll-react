import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import TitledPWeight from "../components/TitledPWeight";
import { useEffect, useState } from "react";
import paragraphsData from "./json/weightcalculator.json"


export default function WeightCaculator (){
    // paragraphs from Json
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        setParagraphs(paragraphsData);
    },[]);

    return (
        <div>
            <div id="content-panel">
                <TitledP title={"Graphique du poids des Ragdolls"}>
                    <img id="img-graph" src="../public/image/graphique-poids.png" alt="Graphique poids Ragdolls" />
                </TitledP>
                <div className="legend-graph">
                    <div className="legend-male">
                        <div className="box-sex box-male"></div>
                        <p>Poids pour un mâle</p> 
                    </div>
                    <div className="legend-femele">
                        <div className="box-sex box-femele"></div>
                        <p>Poids pour un femelle</p>
                    </div>
                    <br/>
                    {paragraphs.map((paragraph, index) => (
                        <TitledPWeight key={index} title={paragraph.title}>
                            <p>{paragraph.content}</p>
                        </TitledPWeight>
                    ))}

                </div>
            </div>
            <Footer/> 
        </div>
    )
}