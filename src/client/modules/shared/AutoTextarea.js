import "./style/auto-textarea.scss"

import React from "react"

export default class AutoTextarea extends React.PureComponent {
    state = {
        value: this.props.value,
        width: null
    } 
    render(){
        let { placeholder, label } = this.props 

        return (
            <React.Fragment> 
                {label}
                <div className="auto-textarea" style={{ width: this.state.width }} ref={ref => this.ref = ref}>  
                    <div className="auto-textarea__sizer">  
                        <textarea
                            className="auto-textarea__input" 
                            value={this.state.value}  
                            placeholder={placeholder}  
                            onChange={(e) => {
                                let value = e.target.value
                                let onlyWhitespace = value.replace(/(?:\r\n|\r|\n)/g, '<br>').trim()

                                this.setState({ value: onlyWhitespace === "" ? "" : value })
                                this.props.onChange(value)
                            }} />
                        <div aria-hidden="true" role="presentational">{this.state.value + "m"}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}