/* eslint-disable react/prop-types */

export default function LanguageChanger(){
    function changeLanguage (language){
        localStorage.setItem("language", language)
        window.location.reload()
    }

    return (
        <div className="div-language">
            <button className="btn-language" onClick={() => changeLanguage("fr")}>
                <img className="img-language" src="/image/drapeau-france.png" alt="" />
            </button>
            <button className="btn-language" onClick={() => changeLanguage("en")}>
                <img className="img-language" src="/image/drapeau-R-U.png" alt="" />
            </button>
        </div>
    )
}