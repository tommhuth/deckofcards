import React from "react"

export const IconType = {
    Smiley: "smiley"
}

const ViewBox = {
    [IconType.Smiley]: "0 0 90 90"
}

export default class Icon extends React.Component {
    render() {
        return (
            <svg  key={this.id} className={"icon"} viewBox={ViewBox[this.props.name]} >
                <use xlinkHref={ `/gfx/iconset.svg?v=${process.env.APP_VERSION}#${this.props.name}`}  />
            </svg>
        )
    }
}
