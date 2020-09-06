import React, { Component } from "react"
import "../css/Gallery.css"


export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            active: ""
        }
    }

    getImg = () => {
        const response = require("../json/test_response.json")
        this.setState({ images: response.property.images, active: response.property.images[0] })
    }

    componentDidMount() {
        this.getImg()
    }

    render() {
        return (
            <div className="gallery">
                <div className="active-image">
                    <img src={this.state.active} alt="" />
                </div>
                <div className="gallery-q">
                    {
                        this.state.images.map((item, index) => {
                            return <img
                                src={item}
                                alt=""
                                key={`img-${index}`}
                                onClick={e => this.setState({ active: e.target.src })} />
                        })
                    }
                </div>
            </div>
        )
    }
}