/* eslint-disable react/prop-types */
import { Children } from "react"

export default function TitledP ({title,children}){
    return <div>
        <h2>{title}</h2>
        {Children.map(children, child =>
            <div>{child}</div>
        )}
    </div>
}