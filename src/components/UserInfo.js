import React, { useState, Component } from "react"
import "../css/UserInfo.css"


export default class UserInfo extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            email: ""
        }
        this.fetchUser = this.fetchUser.bind(this)
    }

    async fetchUser() {
        await fetch(`https://swapi.dev/api/people/1`)
            .then(res => res.json())
            .then(jsn => this.setState({ user: jsn }))
    }

    componentDidMount() {
        this.fetchUser()
    }

    render() {
        const { user } = this.state

        return (
            <div className="user-info" >
                <img src="https://img.icons8.com/fluent/96/000000/user-male-circle.png" />
                <span>{user.name}</span>
                <span>
                    {
                        user.name ?
                            `${user.name.split(" ")[0].toLowerCase()}.${user.name.split(" ")[1].toLowerCase()}@gmail.com`
                            :
                            null
                    }
                </span>
                <span>+386 41 666 666</span>
            </div>
        )
    }
}