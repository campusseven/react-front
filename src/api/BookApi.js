import axios from 'axios';


class BookApi{
    URL="/api/books/"; //http://localhost:9000/api/books

    bookList(){
        return axios.get(this.URL)
              .then((response)=> response && response.data || null);
    }

    // bookDetail(ISBN) : URL/ISBN Get  : Book
    bookDetail(isbn){
        return axios.get(this.URL+`${isbn}/`)
        .then((response)=> response && response.data || null);
    }
    
    // bookCreate(BookApiModel) : URL  POST  
    bookCreate(bookApiModel){
        let bookJson = JSON.stringify(bookApiModel);
        return axios.post(this.URL, bookJson)
               .then((response)=>response && response.data || null);
               //reoponse!=null && response.data != null ?response.data : null
    }
    // bookModify(BookApiModel) : URL PUT
    bookModify(bookApiModel){
        let bookJson = JSON.stringify(bookApiModel);
        return axios.put(this.URL, bookJson)
               .then((response)=> response && response.data || null);
    }

    // bookDelete(ISBN) : URL/ISBN Delete
    bookDelete(isbn){
        return axios.delete(this.URL+`${isbn}/`)
               .then((response)=>response && response.data || null);
    }

    // search(searchType, keyword): URL/searchType/keyword Get :Book[]
    search(searchType, keyword){
        return axios.get(this.URL+`${searchType}/${keyword}/`)
               .then((response)=>response && response.data || null);
    }
}

export default BookApi;
