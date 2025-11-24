export class Book {
    constructor(title,genre,author) {
        this.title=title
        this.genre=genre
        this.author=author
        this.read=false
        this.readDate=""
    }

    readed(){
        this.read=true
    }
}