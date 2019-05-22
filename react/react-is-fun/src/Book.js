import React from 'react'

export const Book  = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title} </h2>
            <h2>By: {author} </h2>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? "Yes!" : "No."}</p>
        </section>
    )
}
