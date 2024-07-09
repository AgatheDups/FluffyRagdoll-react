/* eslint-disable react/prop-types */

export default function Card ({titleCard, textCard, imageSrcCard, imageAltCard, linkCard}) {
    return (
        <div className="col-md-4">
            <div className="card bg-light mb-4 custom-shadow">
                <img src={imageSrcCard} alt={imageAltCard} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-danger text-center">{titleCard}</h5>
                    <p className="card-text">{textCard}</p>
                    <a href={linkCard} className="btn btn-danger" target="_blank"> <span>Lire plus ...</span></a>
                </div>
            </div>
        </div>
    )
}