import React from "react"
import { connect } from "react-redux"
import { setName } from "./store/actions/name"

export class Home extends React.Component {
    componentDidMount(){
        this.props.setName("Foo")
    }
    render() {
        let { name } = this.props
        
        return (
            <div>
                <h2>Route: Home</h2>
                <pre>{JSON.stringify(name, null, 4)}</pre>
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
