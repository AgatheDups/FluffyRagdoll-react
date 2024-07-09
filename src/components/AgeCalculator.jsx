/* eslint-disable react/prop-types */
import { useState } from "react"

export default function AgeCalculator (){
    const [result, setResult] = useState()
    
    function calculateResult (months){
        if (months === 2) {
            setResult(2); // Le deuxième mois équivaut à 2 ans humains.
        } else if (months === 4) {
            setResult(6); // Le quatrième mois équivaut à 6 ans humains.
        } else if (months === 6) {
            setResult(10); // Le sixième mois équivaut à 10 ans humains.
        } else if (months === 12) {
            setResult(15); // Le premier an équivaut à 15 ans humains.
        } else if (months === 24) {
            setResult(24); // Le deuxième an équivaut à 9 ans humains de plus, soit 15 + 9.
        } else {
            setResult(24 + ((months/12) - 2) * 4);  // Chaque année supplémentaire équivaut à 4 ans humains.
        }
    }
    return (
        <div className="div-calcul-age">
            <label className="label-ageCat" htmlFor="ageCat">{"Sélectionnez l'âge de votre chat"}</label>
                <select name="ageCat" id="ageCat" onChange={e => {calculateResult(parseInt(e.target.value));}}>
                    <option value="2">2 mois</option>
                    <option value="4">4 mois</option>
                    <option value="6">6 mois</option>
                    <option value="12">1 ans</option>
                    <option value="24">2 ans</option>
                    <option value="36">3 ans</option>
                    <option value="48">4 ans</option>
                    <option value="60">5 ans</option>
                    <option value="72">6 ans</option>
                    <option value="84">7 ans</option>
                    <option value="96">8 ans</option>
                    <option value="108">9 ans</option>
                    <option value="120">10 ans</option>
                    <option value="132">11 ans</option>
                    <option value="144">12 ans</option>
                    <option value="156">13 ans</option>
                    <option value="168">14 ans</option>
                    <option value="180">15 ans</option>
                    <option value="192">16 ans</option>
                    <option value="204">17 ans</option>
                    <option value="216">18 ans</option>
                    <option value="228">19 ans</option>
                    <option value="240">20 ans</option>
                    <option value="252">21 ans</option>
                </select>
            { result !== undefined ? <p> {"L'âge de votre Ragdoll en années humaines est"} {result} {"ans"}</p> : (<></>)}
        </div>
    )
}