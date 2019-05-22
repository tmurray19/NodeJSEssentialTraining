import React from 'react'
import { render } from 'react-dom'

const Book  = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title} </h2>
            <h2>By: {author} </h2>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

const Library = () => {
    return (
        <div>
            <Book title="The Curious Incident of the Dog in the Night Time" author="Mark Haddon" pages = {278} />
            <Book title="The Simpsons and their Mathematical Secrets" author="Simon Singh" pages = {179} />
            <Book title="The Hitchhiker's Guide to the Galaxy" author="Douglas Adams" pages = {354} />
        </div>
    )
}
/*
One way to render multiple compontents:
 - By wrapping the components into a single div, React renders only that div.
 - But the Library tags within the div still gets rendered as intended
<div>
    <Library />,
    <Library />,
</div>
*/


render(
    <Library />,
    document.getElementById('root')
)
