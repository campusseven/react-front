import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import BookDetailsView from '../view/BookDetailsView';

@inject('bookStore')
@observer
class BookDetailsContainer extends Component {
    render() {
        const { bookStore } = this.props;

        return (
            <BookDetailsView book={bookStore._book} />
        );
    }
}

export default BookDetailsContainer;