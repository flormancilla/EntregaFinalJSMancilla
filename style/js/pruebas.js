.caja-pie-de-pagina {
    width: 100vw;
    height: auto;
    background-color: #e10600;
    grid-area: footer;
}

.florencia-mancilla {
    grid-area: firma;
}

.icono-instagram {
    grid-area: instagram;
}

.comunidad-reddit {
    grid-area: comunidad;
}

.icono-reddit {
    grid-area: reddit;
}

.copy {
    grid-area: copy;
}

.f1 {
    grid-area: f1;
}

. f1 p {
    font-style: none;
}

.container-redes-sociales {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: grid;
    grid-column: auto auto;
    grid-row: auto auto auto;
    grid-template-areas:
        "firma instagram"
        "comunidad reddit"
        "copy f1";
        width: 75vw;
}