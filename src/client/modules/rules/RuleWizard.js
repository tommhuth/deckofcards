import "./style/rule-wizard.scss" 

import { connect } from "react-redux" 
import Rank from "../deck/const/Rank"
import Suit from "../deck/const/Suit"
import { addRule } from "./store/actions/rules"
import { getMatchGrade } from "./store/actions/rules"
import Card from "../deck/Card"
import React from "react" 
import css from "classnames"
import AutoTextarea from "../shared/AutoTextarea";

const suits = [...Object.values(Suit), null]
const ranks = [...Object.values(Rank), null, "<any face>"]
  
export class RuleWizard extends React.Component { 
    state = {
        suit: suits[0],
        rank: ranks[0],
        isFace: null,
        isBlack: null, 
        isRed: null, 
        text: "",
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
                className="rule-wizard"
                onSubmit={(e) => {
                    e.preventDefault() 
                    this.addRule()
                }}
            >   
                <div className="rule-wizard__card">
                    <Card 
                        suit={suit || "<any suit>"}
                        rank={rank || "<any rank>"}
                        onRankClick={() => this.nextRank()}
                        onSuitClick={() => this.nextSuit()}
                    /> 
                </div>
  
                <div className="rule-wizard__color"> 
                    <div 
                        className={css(
                            "rule-wizard__color__dot", 
                            "rule-wizard__color__dot--black", 
                            {  
                                "rule-wizard__color__dot--on": isBlack
                            })
                        } 
                        onClick={e =>  this.setColor(true, null)}>  
                    </div>  
                    <div  
                        className={css(
                            "rule-wizard__color__dot", 
                            "rule-wizard__color__dot--red", 
                            {  
                                "rule-wizard__color__dot--on": isRed
                            })
                        } 
                        onClick={e =>  this.setColor(null, true)}>  
                    </div>  
 
                    <div 
                        className={css(
                            "rule-wizard__color__dot",  
                            {  
                                "rule-wizard__color__dot--on": !isBlack && !isRed
                            })
                        } 
                        onClick={e =>  this.setColor(null, null) }>  
                    </div>  
                </div>

                <div className="rule-wizard__match-meter">
                    <p>Match-o-meter: {(Math.floor(matchGrade * 1000) / 10)}%</p>
                </div> 

                <div className="rule-wizard__text"> 
                    <AutoTextarea 
                        label="Rule text" 
                        placeholder="Rule text goes here"
                        onChange={value => this.setState({ text: value })} /> 
                </div>

                <div className="rule-wizard__footer">
                    <button type="submit">Add rule</button>  
                </div>
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
