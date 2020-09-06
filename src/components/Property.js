import React from "react"
import "../css/Property.css"
import Gallery from "./Gallery"


export default function Property(props) {

    const response = require("../json/test_response.json")

    return (
        <div className="property">
            <div className="property-header">
                <h2>ID OBJAVE: {response.id}</h2>
                <h4>DATUM OBJAVE: {response.date}</h4>
            </div>
            <div className="property-main">
                <Gallery />
                <div className="info">
                    <div className="top">
                        <h4>{response.property.type}</h4>
                        <h4>{response.price} {response.currency}</h4>
                    </div>
                    <div className="property-info-section">
                        <div className="col">
                            <span>
                                OBLIKA PRODAJE:  Spletna prodaja
                            </span>
                            <span>
                                NAČIN PRODAJE:  Dražba z višanjem cene
                            </span>
                            <span>
                                VRSTA PRODAJE:  Posamična - ena nepremičnina
                            </span>
                        </div>
                        <div className="col">
                            <span>
                                DATUM ZAČETKA PRODAJE: <br />{response.sale_start_date}
                            </span>
                            <span>
                                NASLOV: <br /> {
                                    `${response.address.street}, 
                                    ${response.address.zip}, 
                                    ${response.address.city}, 
                                    ${response.address.country}`
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}