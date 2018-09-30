import "./style/container.scss"

import React from "react"

export default function Container({ children, padded }) {
    return (
        <div className={"container " + ( padded ? "container--padded" : "") }>
            {children}
        </div>
    )
}
