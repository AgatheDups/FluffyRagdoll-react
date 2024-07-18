/* eslint-disable react/prop-types */

export default function Footer ({classFooter}){
    return <footer className={classFooter}>
        <p>© Agathe Dupuis 2024</p>
        <div className="div-language">
            <button className="btn-language">
                <img className="img-language" src="/image/drapeau-france.png" alt="" />
            </button>
            <button className="btn-language">
                <img className="img-language" src="/image/drapeau-R-U.png" alt="" />
            </button>
        </div>
    </footer>
}