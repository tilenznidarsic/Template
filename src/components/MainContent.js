import React from "react"
import "../css/MainContent.css"
import Property from "./Property"
import Section from "./Section"
import SideBar from "./SideBar"


export default function MainContent(props) {
    const sections = require("../json/sections.json")

    return (
        <div className="main-content">
            <SideBar />
            <Property />
            {
                sections.map((item, index) => {
                    return (
                        <Section title={item.title} start={item.startOpen} key={`section-${index}`}>
                            <p>{item.keys.desc}</p>
                        </Section>
                    )
                })
            }
        </div>
    )
}