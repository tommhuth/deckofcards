import React from "react"
import Icon, { IconType } from "../shared/Icon"

export default class AppWrapper extends React.Component {
    render() {
        return (
            <div  className="container">
                <h1>
                    <Icon name={IconType.Smiley} /> Hello from React
                </h1>
                {this.props.children}
            </div>
        )
    }
}
