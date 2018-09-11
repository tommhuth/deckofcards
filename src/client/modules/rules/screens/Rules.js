import "../style/card.scss"

import React from "react"
import { connect } from "react-redux" 
import Page from "../../app/Page"
import { addRule } from "../store/actions/rules"
import Rank from "../../deck/const/Rank"
import Suit from "../../deck/const/Suit"


const suits = [...Object.values(Suit), null]
const ranks = [...Object.values(Rank), null]
 
export class Rules extends React.Component { 
    state = {
        suit: suits[0],
        rank: ranks[0],
        isFace: null,
        isBlack: null, 
        isRed: null, 
        text: ""
    }
    addRule(){
        let { suit, rank, isFace, isBlack, isRed, text } = this.state 

        this.props.addRule({
            set: { 
                suit, 
                rank,
                isFace,
                isBlack,
                isRed
            },
            text
        })
    }
    nextSuit(){
        let index = suits.indexOf(this.state.suit) 

        this.setState({ suit: suits[index + 1 < suits.length ?  index + 1 : 0]})
    }
    nextRank(){
        let index = ranks.indexOf(this.state.rank) 

        this.setState({ rank: ranks[index + 1 < ranks.length ?  index + 1 : 0]})
    }
    render() { 
        const { rules } = this.props  

        return (
            <Page>
                <form onSubmit={(e) => {
                    e.preventDefault() 
                    this.addRule()
                }}> 

                    <div style={{ display: "none" }}>
 

                        <fieldset>
                            <legend>Color</legend>
                            <ul>  
                                <li
                                    onChange={e => {
                                        this.setState({ isBlack: e.target.checked ? true : null })
                                    }}>
                                    <input type="radio" name="color" value="black" /> 
                                    Black
                                </li>  
                                <li
                                    onChange={e => {
                                        this.setState({ isRed: e.target.checked ? true : null })
                                    }}>
                                    <input type="radio" name="color" value="red"/> 
                                    Red
                                </li>  
                            </ul>
                        </fieldset>

                        <fieldset
                            onChange={e => {
                                this.setState({ isFace: e.target.value === "face" ? true : null })
                            }}>
                            <legend>Face</legend>
                            <ul>  
                                <li><input type="radio" name="face" value="face" /> Face card</li>  
                                <li><input type="radio" name="face" value="number"/> Number card</li>   
                            </ul>
                        </fieldset>
                    </div>
                    

                    <fieldset>
                        <legend>Description</legend>
                        <textarea onChange={e => this.setState({ text: e.target.value })} />
                    </fieldset>
 

                    <div  className="card">
                        <div className="card__suit card__suit--bottom" onClick={() => this.nextSuit()}>{this.state.suit}</div>
                        <div className="card__suit card__suit--top" onClick={() => this.nextSuit()}>{this.state.suit}</div>
                        <div className="card__rank" onClick={() => this.nextRank()}>{this.state.rank}</div>
                    </div>

                    <div className="face"> 
                        <div 
                            className={"face__dot face__dot--black " + (this.state.isBlack ? "face__dot--on" : "")} 
                            onClick={e =>  this.setState({ isBlack: true, isRed: null }) }>  
                        </div>  
                        <div 
                            className={"face__dot face__dot--red " + (this.state.isRed ? "face__dot--on" : "")} 
                            onClick={e =>  this.setState({ isBlack: null, isRed: true }) }>  
                        </div>  
                        <div 
                            className={"face__dot  " + (!this.state.isRed && !this.state.isBlack ? "face__dot--on" : "")} 
                            onClick={e =>  this.setState({ isBlack: null, isRed: null }) }>  
                        </div>  
                    </div>

                    <button type="submit">Add</button>  
                </form>

                <ul>
                    {rules.active.map((rule, index) => <li key={index}>{JSON.stringify(rule)}</li>)}
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
    },
    dispatch => {
        return { 
            addRule: (rule) => dispatch(addRule(rule))
        }
    }
)(Rules)
