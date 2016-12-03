import React from "react"

export default class AppWrapper extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from React</h1>
                {this.props.children}
            </div>
        )
    }
}
