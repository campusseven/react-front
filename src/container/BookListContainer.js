import React, { Component } from 'react';
import BookListView from '../view/BookListView';
import { observer, inject } from 'mobx-react';

@inject('bookStore')
@observer
class BookListContainer extends Component {

    componentDidMount(){
        const {bookStore} = this.props;
        if( bookStore){
          bookStore.bookList();
      }
    }

    onSelect = (book) => {
        const { bookStore } = this.props;
        bookStore.select(book);
    }

    render() {
        const { bookStore } = this.props;

        return (
            <BookListView books={bookStore._books} onSelect={this.onSelect} />
        );
    }
}

export default BookListContainer;