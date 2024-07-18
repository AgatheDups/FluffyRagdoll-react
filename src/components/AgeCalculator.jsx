/* eslint-disable react/prop-types */
import { useState } from "react"
import { getAgeCalculatorData, getMonthLabel, getYearLabel } from "../InternationalIzer";


export default function AgeCalculator (){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [ageCalculatorData, setA] = useState(getAgeCalculatorData())
    // eslint-disable-next-line no-unused-vars
    const [monthLabel, setB] = useState(getMonthLabel())
    // eslint-disable-next-line no-unused-vars
    const [yearLabel, setC] = useState(getYearLabel())


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
            <label className="label-ageCat" htmlFor="ageCat">{ageCalculatorData.label}</label>
                <select name="ageCat" id="ageCat" onChange={e => {calculateResult(parseInt(e.target.value));}}>
                    <option value="2">2 {monthLabel}</option>
                    <option value="4">4 {monthLabel}</option>
                    <option value="6">6 {monthLabel}</option>
                    <option value="12">1 {yearLabel}</option>
                    <option value="24">2 {yearLabel}</option>
                    <option value="36">3 {yearLabel}</option>
                    <option value="48">4 {yearLabel}</option>
                    <option value="60">5 {yearLabel}</option>
                    <option value="72">6 {yearLabel}</option>
                    <option value="84">7 {yearLabel}</option>
                    <option value="96">8 {yearLabel}</option>
                    <option value="108">9 {yearLabel}</option>
                    <option value="120">10 {yearLabel}</option>
                    <option value="132">11 {yearLabel}</option>
                    <option value="144">12 {yearLabel}</option>
                    <option value="156">13 {yearLabel}</option>
                    <option value="168">14 {yearLabel}</option>
                    <option value="180">15 {yearLabel}</option>
                    <option value="192">16 {yearLabel}</option>
                    <option value="204">17 {yearLabel}</option>
                    <option value="216">18 {yearLabel}</option>
                    <option value="228">19 {yearLabel}</option>
                    <option value="240">20 {yearLabel}</option>
                    <option value="252">21 {yearLabel}</option>
                </select>
            <div id="resultCalculator">
                { result !== undefined ? <p> {ageCalculatorData.resultatPart1} {result} {ageCalculatorData.resultatPart2}</p> : (<></>)}
            </div>
        </div>
    )
}