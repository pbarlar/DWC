import { Book } from "./Book.js";
import { BookLists } from "./BookLists.js";

/**
 * @typedef {Object} Book
 * @property {string} title - El título del libro.
 * @property {string} genre - El género del libro.
 * @property {string} author - El autor del libro.
 * @property {boolean} read - Indica si el libro ha sido leído.
 * @property {Date | null} readDate - La fecha en que se terminó de leer el libro.
 */

// Inicializamos la instancia global de BookLists, que gestionará el estado de la aplicación.
const readingList = new BookLists([]); 

/**
 * Renderiza la lista completa de libros en el contenedor DOM,
 * actualizando su estado (leído, sin leer, actual, siguiente) y
 * configurando los botones de acción.
 * * También actualiza los contadores de libros leídos y pendientes.
 * * @param {Array<Book>} arrBooks - El array de objetos de libro a renderizar.
 */
const actualizarLibros = (arrBooks) => {
    const container = document.getElementById("books"); 
    if (!container) return; 

    container.innerHTML = "";
    
    arrBooks.forEach(libro => {
        let div = document.createElement("div");
        div.classList.add("book-entry");
        div.dataset.title = libro.title; 
        
        let info = document.createElement("div");
        info.classList.add("book-info");
        
        let title = document.createElement("p");
        let author = document.createElement("p");
        let genre = document.createElement("p");

        title.textContent = libro.title;
        title.classList.add("book-title");
        
        author.textContent = `Autor: ${libro.author}`;
        genre.textContent = `Género: ${libro.genre}`;

        info.appendChild(title);
        info.appendChild(author);
        info.appendChild(genre);
        div.appendChild(info);

        // --- Estado de Lectura y Botones de Acción ---
        let statusContainer = document.createElement("div");
        statusContainer.classList.add("book-actions");
        
        let estadoLectura = document.createElement("div");
        estadoLectura.classList.add("book-status");
        
        let actions = document.createElement("div");
        actions.classList.add("actions-buttons");

        if (libro.read === false) {
            estadoLectura.textContent = "Sin leer";
            estadoLectura.classList.add("status-unread");
            
            // Botón para marcar como libro actual (si no es el actual/siguiente)
            if (libro !== readingList.currentBook && libro !== readingList.nextBook) {
                let setButton = document.createElement("button");
                setButton.textContent = "Marcar como Actual";
                setButton.classList.add("btn-set-current");
                setButton.dataset.title = libro.title; 
                actions.appendChild(setButton);
            }
            
        } else {
            const date = libro.readDate ? new Date(libro.readDate).toLocaleDateString() : "Leído";
            estadoLectura.textContent = `Leído el: ${date}`;
            estadoLectura.classList.add("status-read");
        }
        
        // Indicador de Libro Actual/Siguiente
        if (libro === readingList.currentBook) {
            div.classList.add("is-current");
            estadoLectura.textContent = "📚 Leyendo Ahora";
            estadoLectura.classList.add("status-current");
            
            // Botón para terminar el libro actual
            let finishButton = document.createElement("button");
            finishButton.textContent = "Terminar Lectura";
            finishButton.classList.add("btn-finish");
            actions.appendChild(finishButton);
            
        } else if (libro === readingList.nextBook) {
            div.classList.add("is-next");
            estadoLectura.textContent = "➡️ Siguiente en la lista";
            estadoLectura.classList.add("status-next");
        }
        
        statusContainer.appendChild(estadoLectura);
        statusContainer.appendChild(actions);
        
        div.appendChild(statusContainer);
        container.appendChild(div);
    });
    
    // Configurar los listeners después de renderizar la lista
    configurarListenersAccion();
    
    // Actualizar contadores fuera del área de libros
    document.getElementById("booksReadCount").textContent = readingList.booksRead;
    document.getElementById("booksNotReadCount").textContent = readingList.booksNotRead;
}

// --- 2. GESTIÓN DE LA ADICIÓN DE LIBROS ---
/**
 * Configura el listener de eventos para el formulario de añadir libros.
 * Previene el envío por defecto y añade el nuevo libro a la lista.
 */
function configurarAñadirLibros() {
    const form = document.querySelector(".book form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la página se recargue

        let titulo = document.getElementById("title");
        let author = document.getElementById("author");
        let genre = document.getElementById("genre");
        
        if (!titulo.value || !author.value || !genre.value) {
            alert("Por favor, rellena todos los campos del libro.");
            return;
        }

        let libro = new Book(titulo.value, genre.value, author.value);

        readingList.add(libro); // Añade el libro al array interno

        actualizarLibros(readingList.arrBooks); // Vuelve a renderizar la lista
        
        // Limpiar formulario después de añadir
        titulo.value = '';
        author.value = '';
        genre.value = '';
    });
}

// --- 3. GESTIÓN DE BOTONES DE ACCIÓN (Terminar/Establecer) ---
/**
 * Configura los listeners de los botones de acción dinámicos 
 * (Terminar Lectura y Marcar como Actual) cada vez que la lista se renderiza.
 */
function configurarListenersAccion() {
    /**
     * Listener para el botón "Terminar Lectura" (solo visible en el libro actual).
     */
    const finishBtn = document.querySelector(".btn-finish");
    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            readingList.finishCurrentBook();
            actualizarLibros(readingList.arrBooks);
        });
    }
    
    /**
     * Listener para los botones "Marcar como Actual".
     */
    const setButtons = document.querySelectorAll(".btn-set-current");
    setButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const bookTitle = e.target.dataset.title;
            
            // Busca el objeto libro correspondiente en la lista global
            const bookToSet = readingList.arrBooks.find(b => b.title === bookTitle);
            
            if (bookToSet) {
                // Establece el libro como actual y actualiza el estado de la lista
                readingList.currentBook = bookToSet;
                readingList.updateReadingStatus();
                actualizarLibros(readingList.arrBooks);
            }
        });
    });
}

// --- 4. FUNCIÓN PRINCIPAL ---
/**
 * La función principal que se ejecuta una vez que el DOM está completamente cargado.
 * Inicializa los listeners y renderiza el estado inicial de la lista.
 */
const main = () => {
    configurarAñadirLibros();
    actualizarLibros(readingList.arrBooks); 
}

document.addEventListener("DOMContentLoaded", main);