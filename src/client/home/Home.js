import React from "react"
import { connect } from "react-redux"
import { setName } from "../data/store/actions/name"

export class Home extends React.Component {
    componentWillMount(){
        this.props.setName("Foo")
    }
    render() {
        let name = this.props.name
        
        return (
            <div>
                <h2>Home</h2>
                {JSON.stringify(name, null, 4)}
            </div>
        )
    }
}

export default connect(
    store => {
        return {
            name: store.name
        }
    },
    dispatch => {
        return {
            setName: (name) => dispatch(setName(name))
        }
    }
)(Home)
