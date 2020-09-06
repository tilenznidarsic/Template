import React, { useState } from "react"
import "../css/SideButton.css"


export default function SideButton(props) {
    const [open, setOpen] = useState(props.start)

    return (
        <div className="side-button" style={{ height: open ? "200px" : "50px" }}>
            <div className="side-btn-header center" onClick={() => setOpen(!open)}>
                <span>
                    {props.title}
                </span>
                <span>
                    {open ? "-" : "+"}
                </span>
            </div>
            <div className="side-btn-content" style={{ display: open ? "flex" : "none" }}>
                {
                    props.keys.map((item, index) => {
                        return (
                            <form key={`form-${index}`}>
                                <input type="checkbox" name={`check-${index}`} ></input>
                                <label htmlFor={`check-${index}`}>{item}</label>
                            </form>
                        )
                    })
                }
            </div>
        </div >
    )
}