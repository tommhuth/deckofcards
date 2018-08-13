import React from "react"
import { connect } from "react-redux"
import { setName } from "../../data/store/actions/name"

export class Home extends React.Component {
    componentWillMount(){
        this.props.setName("Foo")
    }
    render() {
        let name = this.props.name
        
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
