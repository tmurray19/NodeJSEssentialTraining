import React from 'react'
import ReactDOM from 'react-dom'

// Creating React components
// All React componets should be capitalised
class Message extends React.Component {
    render(){
        console.log(this.props)
        // JSX curly braces
        // Double set to pass style object into expression
        return (
            <div>
                <h1 style = {{ color: this.props.color}}>
                    {this.props.msg}
                </h1>
                <p>
                    I'll check back in {this.props.age} minutes
                </p>
            </div>
        )
    }
}

// We've defined our objects here, to be passed into the Message component
ReactDOM.render(
    <Message age = {50} color="fuchsia" msg="How are you?"/>,
    document.getElementById('root')
)
