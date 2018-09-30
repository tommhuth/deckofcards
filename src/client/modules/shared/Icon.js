import "./style/icon.scss"

import React from "react"

export const IconType = {
    Smiley: "smiley",
    HandEmpty: "hand-empty",
    HandCards: "hand-cards"
}

const ViewBox = {
    [IconType.Smiley]: "0 0 90 90",
    [IconType.HandCards]: "0 0 42 72",
    [IconType.HandEmpty]: "0 0 42 72"
}

export class Icon extends React.Component {
    render() {
        return (
            <svg  key={this.id} className={"icon"} viewBox={ViewBox[this.props.type]} >
                <use xlinkHref={ `/gfx/iconset.bundle.svg?v=${process.env.APP_VERSION}#${this.props.type}`}  />
            </svg>
        )
    }
}
