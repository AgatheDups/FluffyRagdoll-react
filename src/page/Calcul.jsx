import TitledP from "../components/TitledP";
import Footer from "../components/Footer";


export default function Calcul (){
    return (<div>
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
                <p>La croissance du Ragdolls se fait au long de ses deux premières années, donc après ses 2ans votre Ragdoll doit se strabiliser.</p>
            </div>
        </div>
        <Footer/> 
    </div>
    )
}