import React from "react" 
import { Link } from "react-router-dom" 
import Page from "../../app/Page" 
import Container from "../../app/Container" 

export default class Deck extends React.Component {  
    render() {  
        return (
            <Page>
                <Container padded> 
                    <h1 className="h1">
                        Stack<br/> of cards
                    </h1>
                    <ul>
                        <li>
                            <Link to="/people">People</Link>
                        </li>
                        <li>
                            <Link to="/play">Play</Link>
                        </li>
                    </ul> 
                </Container>
            </Page>
        ) 
    }
} 
