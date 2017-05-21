import React from "react"
import Icon, { IconType } from "../shared/Icon"
import { Link } from "react-router-dom"

export default class AppWrapper extends React.Component {
    render() {
        return (
            <div  className="container">
                <h1>
                    Hello from React <Icon name={IconType.Smiley} /> 
                </h1>

                {this.props.children}
            </div>
        )
    }
}
