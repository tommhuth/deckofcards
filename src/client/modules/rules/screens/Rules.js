import "../style/rule-list.scss"

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
                
                <ul className="rule-list">
                    {rules.active.map((rule, index) => (
                        <li className="rule-list__element" key={index}>
                            <Container> 
                                <Rule rule={rule} />
                            </Container>
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
