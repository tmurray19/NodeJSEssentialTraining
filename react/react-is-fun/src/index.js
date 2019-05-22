import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
    {"title": "The Curious Incident of the Dog in the Night Time", "author": "Mark Haddon", "pages":278 },
    {"title": "The Simpsons and their Mathematical Secrets", "author": "Simon Singh", "pages":179 },
    {"title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "pages":354 },
    {"title": "Fight Club", "author": "Chuck Palahniuk", "pages":190 }
];


render(
    <Library books={bookList}/>,
    document.getElementById('root')
)
