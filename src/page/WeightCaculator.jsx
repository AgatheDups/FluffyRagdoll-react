import TitledP from "../components/TitledP";
import Footer from "../components/Footer";
import TitledPWeight from "../components/TitledPWeight";


export default function WeightCaculator (){
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
                    <TitledPWeight title={"À la naissance et à 3 mois"}>
                        <p>{"Le poids de naissance de cette race varie généralement entre 80 et 130 grammes. Le sexe des chatons influence également leur poids. À trois mois, les femelles pèsent entre 1,2 et 1,63 kg, tandis que les mâles peuvent atteindre 2,3 kg. Cependant, il est essentiel de noter qu'il n'existe pas de règle absolue en matière de croissance."}</p>
                    </TitledPWeight>
                    <TitledPWeight title={"À plus d'un an et l'âge adulte"}>
                    <p>{"Ce félin au caractère docile pèse entre 3,5 et 7 kg à l'âge d'un an. La femelle pèse généralement entre 3,5 et 5,4 kg, tandis que le mâle se situe entre 6 et 7,7 kg. À l'âge adulte, un Ragdoll peut peser de 8 à 10 kg. Les femelles atteignent souvent un poids maximal de 8 kg, et certains mâles peuvent même atteindre jusqu'à 17 kg."}</p>
                    </TitledPWeight>
                </div>
            </div>
            <Footer/> 
        </div>
    )
}