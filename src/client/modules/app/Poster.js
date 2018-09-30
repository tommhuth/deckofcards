import "./style/poster.scss"

import React from "react"

export default function Poster({ children }) {
    return (
        <div className="poster">
            {children}
        </div>
    )
}
