import React from 'react'
import ReactDOM from 'react-dom'

// Creating React components
// All React componets should be capitalised
class Message extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello, everyone</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Message />,
    document.getElementById('root')
)
