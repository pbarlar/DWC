/**
* @name filterNumbersGreaterThan
* @description Filtra los números de un array que sean mayor a cierto número
x dejando solo los que sean menores a este
*
* @param {number[]} numbers - Array de números a filtrar
* @param {number} filter - Número a partir del cuál filtrar los demás número
s
* @returns {Number[]} - Array de números filtrados menores a {filter}
*
* @example
* filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/
function filterNumbersGreaterThan(numbers, filter) {
    let greaters=new Array();

    numbers.forEach(element => {
        if (element>filter) {
            greaters.push(element)
        }
    });

    return greaters;
}


/**
* @name toHackerSpeak
* @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
transformar las "a" en 4, las "e" en 3, las "i"
* en 1, las "o" en 0 y las "s" en 5
*
* @param {string} text
* @returns {String} - El texto convertido a "Hacker Speak"
*
* @example
* toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
*/
function toHackerSpeak(text) {
    text=text.replace(/e/gi,"3");
    text=text.replace(/a/gi,"4");
    text=text.replace(/i/gi,"1");
    text=text.replace(/o/gi,"0");
    text=text.replace(/s/gi,"5");

    return text;
}


/**
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión
* @returns {String} - La extensión del archivo
*
* @example
* getFileExtension("imagen.jpg") // returns "jpg"
*/
function getFileExtension(file) {
    return file.substring(0,file.indexOf("."));
}


/**
* @name flatArray
* @description Dado un array 2D, devuelve un array 1D que contiene todos los
ítems
*
* @param {[][]} arr - Array 2D a "aplanar"
* @returns {[]} - El array "aplanado"
*
* @example
* flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
*/
function flatArray(arr2D) {
    let nArr=new Array();

    for (let index = 0; index < arr2D.length; index++) {
        for (let f = 0; f < arr2D[index].length; f++) {
            nArr.push(arr2D[index][f]);
        }
    }

    return nArr;
}


/**
* @name removeDuplicates
* @description Remueve duplicados de un array
*
* @param {[]} arr - Array con duplicados a remover
* @returns {[]} - El array resultante sin duplicados
*
* @example
* removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
*/
function removeDuplicates(arr) {
    let nArr=new Array();
    for (let index = 0; index < arr.length; index++) {
        if (!nArr.includes(arr[index])) {
            nArr.push(arr[index]);
        }
    }

    return nArr;
}



/**
* @name countLetter
* @description Devuelve la cantidad de veces que una letra aparece en un str
ing
*
* @param {string} letter - Letra a contar
* @param {string} text - Texto sobre el que realizar la cuenta de {letter}
* @returns {Number} - Número de veces que aparece {letter} en {text}
*
* @example
* countLetter("a", "javascript") // returns 2
*/
function countLetter(letter, text) {
    let counter=0;

    for (let index = 0; index < text.length; index++) {
        if (text[index]==letter) {
            counter++;
        }
    }

    return counter;
}


/**
* @name removeWords
* @description Dado un string y un array de palabras a remover, devuelve el
string sin las palabras removidas
*
* @param {string} str - Texto a recortar
* @param {string[]} words - Palabras a remover
* @returns {string} - Texto resultante con las palabras removidas
*
* @example
* removeWords("This is a really bad test", ["really", "bad"]) // returns
"This is a test"
*/
function removeWords(str,words) {
    for (let index = 0; index < words.length; index++) {
        if (str.includes(words[index])) {
            str=str.replace(words[index],"");
        }
    }

    return str;
}