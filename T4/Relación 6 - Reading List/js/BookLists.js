export class BookLists {
    constructor(arrBooks = []) { 
        this.arrBooks = arrBooks;
        this.booksRead = 0;
        this.booksNotRead = 0;
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null;
        this.updateReadingStatus(); 
    }

    
    updateReadingStatus() {
        // 1. Recalcular contadores (mejor que incrementarlos manualmente)
        this.booksRead = this.arrBooks.filter(book => book.read).length;
        this.booksNotRead = this.arrBooks.length - this.booksRead;

        // 2. Definir currentBook y nextBook
        const unreadBooks = this.arrBooks.filter(book => !book.read);

        // El primer libro no leído es el actual
        this.currentBook = unreadBooks.length > 0 ? unreadBooks[0] : null;

        // El segundo libro no leído es el siguiente
        this.nextBook = unreadBooks.length > 1 ? unreadBooks[1] : null;
    }

    add(book) {
        this.arrBooks.push(book);
        this.updateReadingStatus(); // Actualiza el estado al añadir
    }

    finishCurrentBook() {
        if (!this.currentBook) {
            console.warn("No hay libro actual para terminar.");
            return;
        }
        
        // El libro actual se marca como leído
        this.currentBook.read = true;
        this.currentBook.readDate = new Date();
        
        // Mover al historial
        this.lastBook = this.currentBook;
        
        // Re-evaluar el estado para establecer el nuevo current y next
        this.updateReadingStatus(); 
    }
}