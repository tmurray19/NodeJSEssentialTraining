import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'LightPink',
    color: 'white',
    fontFamily: 'Lato'
}

// Creating an element in React
// We wish to create a Header for our page
// We have specified an element called 'title' to be created
// It is a Header, H1
// id of 'title'
// className of 'header'
// Uses the css style specified above
// Its child elements consist of a string, 'Hello, world!'
const title = React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Hello, world!'
)

// This line tells the browser to render the content on the page
// We render the title into the element 'root' in the HTML
// (See the index.html file under public)
ReactDOM.render(
    title,
    document.getElementById('root')
)
