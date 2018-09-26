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
                <div className="auto-textarea" style={{ width: this.state.width }} ref={ref => this.ref = ref}> 
                    <label className="visually-hidden">{label}</label> 

                    <div className="auto-textarea__sizer">  
                        {this.state.value + "m"}
                        
                        <textarea
                            value={this.state.value}  
                            placeholder={placeholder}  
                            onChange={(e) => {
                                let value = e.target.value
                                let onlyWhitespace = value.replace(/(?:\r\n|\r|\n)/g, '<br>').trim()

                                this.setState({ value: onlyWhitespace === "" ? "" : value })
                                this.props.onChange(value)
                            }} 
                            className="auto-textarea__input" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}