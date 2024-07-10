import Card from "../components/Card";
import ImagedTitledP from "../components/ImagedTitledP";
import Footer from "../components/Footer";


export default function Care(){
    return (
        <div>
            <div id="content-panel">
                <ImagedTitledP title={"Entretien"} imageSrc={"../public/image/photo-entretien.jpg"} imageAlt={"Chat Ragdoll"}>
                    <p>{"Avec un pelage mi-long et un sous-poil modérément dense, le Ragdoll n'exige pas un entretien fastidieux. Un brossage régulier permet de maintenir la beauté et la propreté de son pelage, ainsi que la bonne santé de sa peau."}<br/><br/>{"Il est recommandé de brosser le Ragdoll une à deux fois par semaine pour l'aider à se débarrasser de ses poils morts, ce qui évite qu'ils s'accumulent dans son intestin et forment des trichobézoards. Lors du brossage, il est important de porter une attention particulière à la zone du \"pantalon\" située sur l'arrière-train du chat, où le poil est généralement plus dense et fourni. De temps en temps, le Ragdoll peut également avoir besoin d'un bain. Les soins dentaires sont indispensables pour prévenir les maladies parodontales causées par le tartre, et il est également nécessaire de couper régulièrement ses griffes, car il les use très lentement."}</p>
                </ImagedTitledP>
                <hr/>
                <div className="row">
                    <Card 
                        titleCard={"Brosse"} 
                        imageSrcCard={"../public/image/img-brosse.jpg"} 
                        imageAltCard={"Brosse pour chat"} 
                        linkCard={"#"} 
                        textCard={"Voici une brosse de la marque NekoCare."}
                    />
                    <Card 
                        titleCard={"Coupe griffe"} 
                        imageSrcCard={"../public/image/img-coupe-griffes.jpg"} 
                        imageAltCard={"Coupe griffe pour chat"} 
                        linkCard={"#"} 
                        textCard={"Voici un coupe griffe de la marque PattesVelours."}
                    />
                    <Card 
                        titleCard={"Dentifrice"} 
                        imageSrcCard={"../public/image/img-dentifrice.jpg"} 
                        imageAltCard={"Dentifrice pour chat"} 
                        linkCard={"#"} 
                        textCard={"Voici un dentifrice de la marque RonronNature."}
                    />
                </div>
            </div>
            <Footer/> 
        </div>
    )
}