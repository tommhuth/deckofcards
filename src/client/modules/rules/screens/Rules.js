import React from "react"
import Page from "../../app/Page"
import Rule from "../Rule"
import RuleWizard from "../RuleWizard";
import { connect} from "react-redux"

export class Rules extends React.Component {  
    render() { 
        const { rules } = this.props  

        return (
            <Page>
                 <RuleWizard />

                <ul>
                    {rules.active.map((rule, index) => <li key={index}><Rule rule={rule} /></li>)}
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
