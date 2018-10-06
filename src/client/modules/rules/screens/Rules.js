import "../style/rules-list.scss"

import React from "react"
import Page from "../../app/Page"
import Container from "../../app/Container"
import Rule from "../Rule"
import RuleWizard from "../RuleWizard"
import { connect} from "react-redux"

export class Rules extends React.Component {  
    render() { 
        const { rules } = this.props  

        return (
            <Page> 
                <Container padded> 
                    <RuleWizard /> 
                </Container> 
                
                <h2 className="h3">Active rules</h2>
                <ul className="rules-list">
                    {rules.active.map((rule, index) => (
                        <li className="rules-list__element" key={index}> 
                            <div className="rules-list__element__rule"> 
                                <Rule rule={rule} />
                            </div>
                            <p className="rules-list__element__text">{rule.text}</p> 
                        </li>
                    ))}
                </ul>
            </Page>
        )
    }
}

export default connect(
    store => {
        return {
            rules: store.rules
        }
    } 
)(Rules)
