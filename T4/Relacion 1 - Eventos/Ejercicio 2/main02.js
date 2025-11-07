function mostrarCoordenadas() {
    document.addEventListener("mousemove", (event) => {
        document.body.textContent = `${event.pageX}, ${event.pageY}`;
    });
}

(() => {
    mostrarCoordenadas();
})();
