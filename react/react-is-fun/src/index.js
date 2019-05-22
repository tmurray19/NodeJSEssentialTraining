import React from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "The Curious Incident of the Dog in the Night Time", "author": "Mark Haddon", "pages":278 },
    {"title": "The Simpsons and their Mathematical Secrets", "author": "Simon Singh", "pages":179 },
    {"title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "pages":354 },
    {"title": "Fight Club", "author": "Chuck Palahniuk", "pages":190 }
];

const Book  = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title} </h2>
            <h2>By: {author} </h2>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

// Updating to an ES6 class
class Library extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: true
        }
    }
    render () {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                <h1>The library is {this.state.open ? 'open.' : 'closed.'} Books available are:</h1>
                {books.map(
                    (book,i) =>
                        <Book
                            key = {i}
                            title = {book.title}
                            author = {book.author}
                            pages = {book.pages}
                        />
                )}
            </div>
        )
    }
}

render(
    <Library books={bookList}/>,
    document.getElementById('root')
)
