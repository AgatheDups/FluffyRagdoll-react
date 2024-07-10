import AgeCalculator from "../components/AgeCalculator";
import Bubble from "../components/Bubble";
import ImagedTitledP from "../components/ImagedTitledP";
import TitledP from "../components/TitledP";
import Footer from "../components/Footer";

export default function Home (){
    return (
        <div>
            <div id="content-panel"> 
            <ImagedTitledP title={"Origine"} imageSrc={"../public/image/photo-home.jpg"} imageAlt={"Chat Ragdoll"}>
            <p> Le ragdoll est une race de chat originaire des Etats-Unis. <br/> <br/>{"La race de chat Ragdoll a été créée au début des années 1960 par Ann Baker, une éleveuse de chats Persans résidant à Riverside, en Californie. Elle a obtenu cette race en croisant une chatte Persan Angora avec un chat Sacré de Birmanie, donnant ainsi naissance à un compagnon d'une douceur remarquable. Ann Baker a nommé cette nouvelle race \"Ragdoll\", ce qui signifie littéralement « poupée de chiffon »."}</p>
            </ImagedTitledP>
            <TitledP title={"Caratéristique physique"}>
                <p><span>Son corps</span>{" est de construction puissante, lourde et longue, s'inscrivant dans un rectangle. Le cou est court et bien musclé, la poitrine large et arrondie, et les pattes sont de taille moyenne avec une ossature robuste."}<br/><br/>
                <span>Son poil</span>{" est mi-long et soyeux. Le poil de couverture est bien fourni et accompagné d'un sous-poil. Il est plus court sur les pattes avant et plus long et dense sur les pattes arrière. La collerette est particulièrement recherchée."}<br/><br/>
                <span>Sa tête</span>{" est triangulaire avec des contours arrondis, un crâne et un front arrondis également. Le museau est de longueur moyenne, bien développé, avec un menton bien marqué."}<br/><br/>
                <span>Ses yeux</span>{" sont de grande taille, en forme d'ovale, légèrement inclinés sans tendre vers le style oriental. La couleur est d'un bleu très intense."}<br/><br/>
                <span>Ses oreilles</span>{" sont de taille moyenne, larges à leur attache, prolongeant la forme triangulaire de la tête et légèrement pointées vers l'avant. Leurs sommets sont arrondis. "}<br/><br/>
                <span>Sa queue</span>{" est longue, large à la base et généreusement recouverte de poils."}</p>
            </TitledP>
            <TitledP title={"Caractère et comportement"}>
                <p>{" La douceur du Ragdoll est l'une de ses caractéristiques les plus marquantes. Ce chat n'affiche aucune forme d'agressivité. Sa patience exemplaire en fait un compagnon idéal pour les enfants. Très calme et discret, il recherche constamment la tranquillité et n'aime pas l'agitation. Il n'apprécie pas non plus la solitude et passe la majeure partie de son temps près de son maître. Envers ce dernier, il est très affectueux, aimant les câlins, rester sur ses genoux et même être pris dans ses bras. Le Ragdoll est avant tout un chat d'intérieur, préférant la quiétude, le confort et la sécurité de la maison au tumulte du monde extérieur."}</p>
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
        </div>
    )
}