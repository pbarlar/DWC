export class BookLists {
    constructor(arrBooks) {
        this.booksRead=arrBooks.filter(book => book.read == true).length;
        this.booksNotRead=arrBooks.filter(book => book.read != true).length;
        this.nextBook="";
        this.currentBook="";
        this.lastBook="";
        this.arrBooks=arrBooks;
    }

    add(book){
        this.arrBooks.push(book);
    }

    finishCurrentBook(){
        this.currentBook.read=true;
        this.currentBook.readDate=new Date();
        this.lastBook=this.currentBook;
        this.currentBook=this.nextBook;
        this.nextBook=this.arrBooks.find(book=>book.read==false)
    }
}