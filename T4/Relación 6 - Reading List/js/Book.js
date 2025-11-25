export class Book {
    constructor(title,genre,author) {
        this.title=title
        this.genre=genre
        this.author=author
        this.read=false
        this.readDate=null;
    }

    readed(){
        this.read=true
        this.readDate=new Date();
    }
}