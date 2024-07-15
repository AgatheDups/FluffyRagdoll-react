/* eslint-disable react/prop-types */


export default function Bubble ({age,title}){
    return (
        <div className="bubble-parent">
            <div className="bubble">
                <p>{age}</p>
            </div>
            <p>{title}</p>
        </div>
    )
}