import React from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "The Curious Incident of the Dog in the Night Time", "author": "Mark Haddon", "pages":278 },
    {"title": "The Simpsons and their Mathematical Secrets", "author": "Simon Singh", "pages":179 },
    {"title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "pages":354 },
    {"title": "Fight Club", "author": "Chuck Palahniuk", "pages":190 }
];

const Book  = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title} </h2>
            <h2>By: {author} </h2>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? "Yes!" : "No."}</p>
        </section>
    )
}

const Hiring = () =>
    <div>
        <p>The Library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The Library is no longer hiring. Check back later for more info.</p>
    </div>

// Updating to an ES6 class
class Library extends React.Component {

    state = {
        open: true,
        freeBookmark: true,
        hiring: false,
        data: []
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        console.log("The compontent updated successfully.");
    }

    //Triggers change in state
    toggleOpenClosed = ()  => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render () {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img alt = {product.name} src ={product.image} height = {100}/>
                                </div>
                            )
                        })}
                      </div>
                }
                <h1>The library is {this.state.open ? 'open.' : 'closed.'} Books available are:</h1>
                <button onClick = {this.toggleOpenClosed}>Toggle Library</button>
                {books.map(
                    (book,i) =>
                        <Book
                            key = {i}
                            title = {book.title}
                            author = {book.author}
                            pages = {book.pages}
                            freeBookmark = {this.state.freeBookmark}
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
