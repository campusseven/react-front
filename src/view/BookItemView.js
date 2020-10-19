import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

class BookItemView extends Component {
    render() {
        const { book, onSelect } = this.props;
        return (
            <div>
                <Item onClick={() => { onSelect(book) }}>
                    <Item.Image size='small' src={book.imgUrl} />
                    <Item.Content>
                        <Item.Header as='a'>{book.title}</Item.Header>
                        <Item.Meta>
                            <span className='price'>{book.price}</span>
                        </Item.Meta>
                        <Item.Description>
                            <p>{book.author}</p>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </div>
        );
    }
}

export default BookItemView;