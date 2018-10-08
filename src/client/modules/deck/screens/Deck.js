import React from "react" 
import Page from "../../app/Page"
import { connect } from "react-redux" 
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Card from "../Card"
import { Icon, IconType } from "../../shared/Icon"
import Only from "../../shared/Only"
import Container from "../../app/Container"
import Poster from "../../app/Poster"
import DeckControls from "../DeckControls"

export class Deck extends React.Component {  
    render() { 
        const { deck, rules } = this.props
        const { used, unused } = deck 
          
        return (
            <React.Fragment> 
                <h1 className="visually-hidden">Play</h1>

                <DeckControls />

                <Page>  
                    <Only if={!unused.length}>
                        <Container>
                            <Poster> 
                                <Icon type={IconType.HandEmpty} />
                                <p>Click to start over</p>
                            </Poster>
                        </Container>
                    </Only>
                    <Only if={!used.length}>
                        <Container>
                            <Poster> 
                                <Icon type={IconType.HandCards} />
                                <p>Click to pull a card</p>
                            </Poster>
                        </Container>
                    </Only>
                    
                    <Only if={used.length}>
                        <div aria-live="off" id="deck">
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
                        </div>
                    </Only>
                </Page>
            </React.Fragment>
        )
    }
} 

export default connect(
    store => {
        return {
            deck: store.deck,
            rules: store.rules 
        }
    }
)(Deck)
