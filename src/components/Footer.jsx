/* eslint-disable react/prop-types */
import LanguageChanger from "./LanguageChanger";


export default function Footer ({classFooter}){
    return <footer className={classFooter}>
        <p>© Agathe Dupuis 2024</p>
        <LanguageChanger/>
    </footer>
}