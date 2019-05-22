import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'LightPink',
    color: 'white',
    fontFamily: 'Lato'
}



ReactDOM.render(
    <div style = {style}>
        <h1 id = "heading-element">Hello, world!</h1>
        <h2>We're glad you're here.</h2>
    </div>,
    document.getElementById('root')
)
