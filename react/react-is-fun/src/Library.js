import React from 'react'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends React.Component {

    static defaultProps = {
        books: [
            {"title": "Parllel Worlds", "author": "Michio Kaku", "pages": 409}
        ]
    }

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

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library
