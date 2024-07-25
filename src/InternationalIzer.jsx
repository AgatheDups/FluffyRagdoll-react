/* eslint-disable react/prop-types */
import homeDataFr from "./page/json/fr/home.json"
import homeDataEn from "./page/json/en/home.json"
import notFoundDataFr from "./page/json/fr/notfound.json"
import notFoundDataEn from "./page/json/en/notfound.json"
import weightCalculatorDataFr from "./page/json/fr/weightcalculator.json"
import weightCalculatorDataEn from "./page/json/en/weightcalculator.json"
import lostPasswordDataFr from "./page/json/fr/lostpassword.json"
import lostPasswordDataEn from "./page/json/en/lostpassword.json"
import signInDataFr from "./page/json/fr/signin.json"
import signInDataEn from "./page/json/en/signin.json"
import signUpDataFr from "./page/json/fr/signup.json"
import signUpDataEn from "./page/json/en/signup.json"
import foodDataFr from "./page/json/fr/food.json"
import foodDataEn from "./page/json/en/food.json"
import careDataFr from "./page/json/fr/care.json"
import careDataEn from "./page/json/en/care.json"
import contactDataFr from "./page/json/fr/contact.json"
import contactDataEn from "./page/json/en/contact.json"
import ageCalculatorDataFr from "./components/json/fr/agecalculator.json"
import ageCalculatorDataEn from "./components/json/en/agecalculator.json"
import navBarDataFr from "./components/json/fr/navbar.json"
import navBarDataEn from "./components/json/en/navbar.json"


export function getHomeData (){
    console.log(localStorage.getItem("language"));
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return homeDataFr
    } else {
        return homeDataEn
    }
}

export function getNotFoundData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return notFoundDataFr
    } else {
        return notFoundDataEn
    }
}

export function getWeightCalculatorData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return weightCalculatorDataFr
    } else {
        return weightCalculatorDataEn
    }
}

export function getLostPasswordData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return lostPasswordDataFr
    } else {
        return lostPasswordDataEn
    }
}

export function getSignInData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return signInDataFr
    } else {
        return signInDataEn
    }
}

export function getSignUpData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return signUpDataFr
    } else {
        return signUpDataEn
    }
}

export function getFoodData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return foodDataFr
    } else {
        return foodDataEn
    }
}

export function getCareData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return careDataFr
    } else {
        return careDataEn
    }
}

export function getContactData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return contactDataFr
    } else {
        return contactDataEn
    }
}

export function getAgeCalculatorData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return ageCalculatorDataFr
    } else {
        return ageCalculatorDataEn
    }
}

export function getMonthLabel (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return "mois"
    } else {
        return "months"
    }
}

export function getYearLabel (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return "an(s)"
    } else {
        return "year(s)"
    }
}

export function getNavBarData (){
    if(localStorage.getItem("language") == "fr" || localStorage.getItem("language") == null){
        return navBarDataFr
    } else {
        return navBarDataEn
    }
}