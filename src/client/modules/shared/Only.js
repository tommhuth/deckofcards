import React from "react"

export default function Only(props) {
    return  props.if ? <React.Fragment>{props.children}</React.Fragment> : null
}