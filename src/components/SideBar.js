import React from "react"
import "../css/SideBar.css"
import UserInfo from "./UserInfo"
import SideButton from "./SideButton"


export default function SideBar(props) {
    const buttons = require("../json/sidebar-buttons.json")

    return (
        <div className="side-bar">
            <UserInfo />
            {buttons.map((item, index) => {
                return (
                    <SideButton
                        title={item.title}
                        start={item.startOpen}
                        keys={item.keys}
                        key={`sideBtn-${index}`}
                    />
                )
            })}
        </div>
    )
}