import "./style/rule-wizard.scss" 

import { connect } from "react-redux" 
import Rank from "../deck/const/Rank"
import Suit from "../deck/const/Suit"
import { addRule } from "./store/actions/rules"
import { getMatchGrade } from "./store/actions/rules" 
import React from "react" 
import css from "classnames"
import AutoTextarea from "../shared/AutoTextarea"
import { capitalize } from "../../data/helpers/utils"

const suits = [...Object.values(Suit), null]
const ranks = [...Object.values(Rank), null, "Any face"]
  
export class RuleWizard extends React.Component { 
    state = {
        suit: suits[0],
        rank: ranks[0],
        isFace: null,
        isBlack: null, 
        isRed: null, 
        text: "Everybody drinks!",
        matchGrade: 0
    } 
    componentDidMount(){
        this.setMatchGrade()
    }
    makeRuleSet(){ 
        let { suit, rank, isBlack, isRed } = this.state 

        return { 
            suit, 
            rank: rank === "<any face>" ? null : rank,
            isFace: rank === "<any face>" ? true : null,
            isBlack,
            isRed
        }
    }
    addRule(){
        let { text } = this.state 

        this.props.addRule({
            set: this.makeRuleSet(),
            text
        })
    }
    setMatchGrade(){ 
        this.setState({ matchGrade: getMatchGrade({ set: this.makeRuleSet() }) })
    }
    setColor(isBlack, isRed){
        this.setState({ isBlack, isRed }, () => this.setMatchGrade())
    }
    nextSuit(){
        let index = suits.indexOf(this.state.suit) 

        this.setState({ suit: suits[index + 1 < suits.length ?  index + 1 : 0]}, () => this.setMatchGrade())
    }
    nextRank(){
        let index = ranks.indexOf(this.state.rank) 

        this.setState({ rank: ranks[index + 1 < ranks.length ?  index + 1 : 0]}, () => this.setMatchGrade())
    }
    render() {  
        let { isBlack, isRed, suit, rank, matchGrade } = this.state 

        return (  
            <form 
                onSubmit={(e) => {
                    e.preventDefault() 
                    this.addRule()
                }}>   
                <fieldset>
                    <legend className="h3 h3--fluff-top"><span>Add rule</span></legend>
                    <div className="rule-wizard">
                        <div className="rule-wizard__group">
                            <label className="rule-wizard__legend">Rule set</label>
                            <div className="rule-wizard__card">
                                <button type="button" onClick={() => this.nextRank()}>
                                    {capitalize(rank) || "Any rank"}
                                </button>
                                {" of "} 
                                <button type="button" onClick={() => this.nextSuit()}>
                                    {suit || "any suit"}
                                </button>
                            </div>
                        </div>

                        <div className="rule-wizard__group">
                            <fieldset>
                                <legend className="rule-wizard__legend">Color</legend>
                                <ul 
                                    className="rule-wizard__color"
                                    onChange={e => {
                                        let isBlack = e.target.value === "black" ? true : null 
                                        let isRed = e.target.value === "red" ? true : null

                                        this.setColor(isBlack, isRed)
                                    }}>
                                    <li className="rule-wizard__color__element">
                                        <label  
                                            className={css(
                                                "rule-wizard__color__dot",  
                                                {  
                                                    "rule-wizard__color__dot--on": !isBlack && !isRed
                                                })
                                            }> 
                                            <input className="visually-hidden" name="color" value="any" type="radio" defaultChecked />
                                            <span className="visually-hidden">Any color</span> 
                                        </label>
                                    </li>
                                    <li className="rule-wizard__color__element">
                                        <label 
                                            className={css(
                                                "rule-wizard__color__dot", 
                                                "rule-wizard__color__dot--black", 
                                                {  
                                                    "rule-wizard__color__dot--on": isBlack
                                                })
                                            }> 
                                            <input className="visually-hidden" name="color" value="black" type="radio" />
                                            <span className="visually-hidden">Black</span>
                                        </label>
                                    </li>
                                    <li className="rule-wizard__color__element">
                                        <label 
                                            className={css(
                                                "rule-wizard__color__dot", 
                                                "rule-wizard__color__dot--red", 
                                                {  
                                                    "rule-wizard__color__dot--on": isRed
                                                })
                                            }> 
                                            <input className="visually-hidden" name="color" value="red" type="radio" />
                                            <span className="visually-hidden">Red</span>
                                        </label>
                                    </li>
                                </ul> 
                            </fieldset>
                        </div> 

                        <div className="rule-wizard__group"> 
                            <div className="rule-wizard__text"> 
                                <AutoTextarea
                                    label={<label className="rule-wizard__legend">Text</label>}
                                    value="Everybody drinks!"
                                    onChange={value => this.setState({ text: value })} /> 
                            </div>
                        </div>

                        <div className="rule-wizard__footer">
                            <button className="button" type="submit">Add rule</button>  
                        </div>
                    </div>
                </fieldset> 
            </form>    
        )
    }
}

export default connect(
    null,
    dispatch => {
        return { 
            addRule: (rule) => dispatch(addRule(rule))
        }
    }
)(RuleWizard)



/*

<Card 
                        suit={suit || "<any suit>"}
                        rank={rank || "<any rank>"}
                        onRankClick={() => this.nextRank()}
                        onSuitClick={() => this.nextSuit()}
                    /> 

*/