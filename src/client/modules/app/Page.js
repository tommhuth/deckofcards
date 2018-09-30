import "./style/page.scss"

import React from "react"

export default function Page({ children, ...props }) {
    return (
        <div className="page" {...props}>
            {children}
        </div>
    )
}
