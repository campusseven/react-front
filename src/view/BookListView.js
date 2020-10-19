import React, { Component } from 'react';
import BookItemView from './BookItemView';

class BookListView extends Component {
    render() {
        const { books, onSelect } = this.props;
        const bookList = books.map(book => {
            return (
                <BookItemView key={book.isbn} book={book} onSelect={onSelect} />
            )
        });

        return (
            bookList 
        );
    }
}

export default BookListView;