/* eslint-disable react/prop-types */
import TitledP from "./TitledP"

export default function ImagedTitledP ({title,children,imageSrc, imageAlt}){
    return <div className="d-flex col intro">
        <img className="image-chat col-lg-4" id="image1" src={imageSrc} alt={imageAlt}/>
        <TitledP title={title}>
            {children}
        </TitledP>
    </div>
}