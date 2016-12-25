import React from "react"
import manifest from "../../../public/gfx-manifest.json"

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
                <use xlinkHref={ `/gfx/${manifest["iconset.svg"]}#${this.props.name}`}  />
            </svg>
        )
    }
}
