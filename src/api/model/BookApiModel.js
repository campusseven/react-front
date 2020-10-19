class BookApiModel{
    isbn="";
    title="";
    author="";
    publisher="";
    price=0.0;
    imgUrl="";
    introduce="";

    constructor(isbn, title, author, publisher, price, imgUrl, introduce){
        this.isbn =isbn;
        this.title = title;
        this.author=author;
        this.publisher=publisher;
        this.price=price;
        this.imgUrl=imgUrl;
        this.introduce=introduce;
    }
}

export default BookApiModel;