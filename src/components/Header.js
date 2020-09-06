import React from "react"
import "../css/Header.css"


function getCurrentDateTime() {
    var date = new Date()
    var month = date.getMonth() < 10 ? "0" + String(date.getMonth() + 1) : (date.getMonth() + 1)
    var dateString = `${date.getDate()}. ${month}. ${date.getFullYear()}`
    var timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return dateString + " " + timeString
}

export default function Header(props) {
    return (
        <div className="header">
            <div className="header-image"></div>
            <div className="top-bar">
                <div className="center">
                    <h1>MyWebsite</h1>
                </div>
                <div className="navigation">
                    {getCurrentDateTime()}
                    <img src="https://img.icons8.com/color/48/000000/slovenia.png" />
                </div>
            </div>
            <div className="bottom-bar">
                <div className="nav-btn center">NEPREMIČNINE</div>
                <div className="nav-btn center">PREMIČNINE</div>
                <div className="nav-btn center">PRAVICE</div>
            </div>
        </div>
    )
}