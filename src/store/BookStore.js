import { observable, computed, action } from 'mobx';
import BookApi from '../api/BookApi';

class BookStore {

    bookApi=new BookApi();

    @observable books = [];  //BookApi- bookList()
    @observable book = null; //BookApi- bookDetail(ISBN)
    @observable errorMessage="";
    
    @computed get _book() {
        return this.book ? { ...this.book } : {};
    }

    @computed get _books() {
        return this.books ? this.books.slice() : [];
    }

    @computed get getErrorMessage(){
        return this.errorMessage ? this.errorMessage : "FAIL.";
    }

    @action select = (book) => {
       // this.book = book;
       this.findByBook(book.isbn);
    }

    @action
    async bookList(){
       let result= await this.bookApi.bookList();
       //console.log(result);
       //result instanceof Array check - {message:"error"}인경우 처리
       //parsing check - pasing form맞추기 위해 result JSON.stringify(result) 변환 후 사용
       // result -> JSON 객체로 정규화 -> books 객체로 parsing
       if(result instanceof Array){
         this.books = JSON.parse(JSON.stringify(result));
       }else if(result){
            this.errorMessage = result("message");
       }
    }

    @action
    async findByBook(isbn){
        this.book= await this.bookApi.bookDetail(isbn);
    }

    @action
    async bookCreate(bookApiModel){
        let result = this.bookApi.bookCreate(bookApiModel);
        if(result == null ) this.errorMessage="CREATE ERROR!";
    }

    @action
    async bookDelete(isbn){
        let result = this.bookApi.bookDelete(isbn);
        if(result == null ) this.errorMessage=`${isbn} DELETE ERROR!`;
    }

    @action
    async bookUpdate(bookApiModel){
       let result = this.bookApi.bookUpdate(bookApiModel);
        if(result == null ) this.errorMessage=`${bookApiModel.isbn} UPDATE ERROR!`;
    }

    @action
    async search(searchType, keyword){
        this.books = this.bookApi.search(searchType, keyword);
    }
}

export default new BookStore();