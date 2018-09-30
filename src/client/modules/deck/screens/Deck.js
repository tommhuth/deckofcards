import React from "react" 
import Page from "../../app/Page"
import { connect } from "react-redux"
import { pullCard, resetDeck } from "../store/actions/deck" 
import Rule from "../../rules/Rule" 
import {TransitionGroup, CSSTransition } from "react-transition-group"
import Card from "../Card"
import { Icon, IconType } from "../../shared/Icon"
import Only from "../../shared/Only"
import Container from "../../app/Container"
import Poster from "../../app/Poster"

export class Deck extends React.Component { 
    pullCard(){
        let { pullCard } = this.props 

        pullCard() 
    }
    render() { 
        const { deck, rules, players } = this.props
        const { used, unused } = deck 
          
        return (
            <React.Fragment> 
                <div className="toolbar">
                    <div className="toolbar__inner"> 
                        <hr className="toolbar__ruler" />
                        <ul className="toolbar__stuff">
                            <li onClick={() => this.pullCard()}>
                                Pull card 
                            </li> 
                        </ul>
                        <ul className="toolbar__people">
                            {
                                players.roster.map(i => {
                                    return (
                                        <li className={i.id === players.active.id ? "active": ""} key={i.id}>{i.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <Page> 
                        
                    <Only if={!unused.length}>
                        <Container>
                            <Poster> 
                                <Icon type={IconType.HandEmpty} />
                                <p>Click to make new deck</p>
                            </Poster>
                        </Container>
                    </Only>
                    <Only if={!used.length}>
                        <Container>
                            <Poster> 
                                <Icon type={IconType.HandCards} />
                                <p>Click to start and pull a card</p>
                            </Poster>
                        </Container>
                    </Only>
                    
                    <TransitionGroup>
                        {used.map((card, index) => (
                            <CSSTransition
                                key={card.id}
                                timeout={800}
                                exit={false}
                                enter={true}
                                classNames="card">
                                <Card card={card} isFirst={index === 0} isLast={index === used.length-1} rules={rules.active}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup> 
                </Page>
            </React.Fragment>
        )
    }
} 

export default connect(
    store => {
        return {
            deck: store.deck,
            rules: store.rules,
            players: store.players
        }
    },
    dispatch => {
        return { 
            resetDeck: () => dispatch(resetDeck()),
            pullCard: () => dispatch(pullCard()),
        }
    }
)(Deck)
