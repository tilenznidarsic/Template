import React, { useState } from "react"
import "../css/Section.css"


export default function Section(props) {
    const [open, setOpen] = useState(props.start)

    return (
        <div className="section" style={{ height: open ? "400px" : "40px" }}>
            <div className="section-header" onClick={() => setOpen(!open)}>
                <h1>{props.title}</h1>
                <h1>{open ? "-" : "+"}</h1>
            </div>
            <div className="section-content" style={{ display: open ? "" : "none" }}>
                {props.children}
            </div>
        </div>
    )
}