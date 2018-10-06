import React from "react" 
import Page from "../../app/Page" 
import Container from "../../app/Container" 

export default class Deck extends React.Component { 
    pullCard(){
        let { pullCard } = this.props 

        pullCard() 
    }
    render() {  
        return (
            <Page>
                <Container padded> 
                    <h1 className="h1">
                        Stack<br/> of cards
                    </h1>
                </Container>
            </Page>
        )
 
    }
} 
