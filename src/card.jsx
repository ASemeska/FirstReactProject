import { useState } from "react"


const Card = (props) =>{
    return(
        <div className="card">
            <img className="card-img" src={props.item.imageUrl} alt="image" />
            <div className="text-container">
                <div className="top-text-container">
                    <p className="location-text">📍{props.item.location}</p>
                    <a className="link" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <h3 className="date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="text-content">{props.item.description}</p>
            </div>

            
        </div>
    )
}

export default Card