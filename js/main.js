function finalPromedio(q1, q2, q3) {
    let final = (q1 + q2 + q3) / 3;
    console.log('q1:' + q1);
    console.log('q2:' + q2);
    console.log('q3:' + q3);
    console.log('final:' + final)
    return final;
}

let q1 = 0;
let q2 = 0;
let q3 = 0;

const Sainz = {
    nombre: "Carlos",
    apellido: "Sainz",
    nacionalidad: "español",
    nombreEscuderia: "Ferrari",
    directorEscuderiaNombre: "Fred",
    directorEscuderiaApellido: "Vasseur",
    color: "rojo",
}

const Verstappen = {
    nombre: "Max",
    apellido: "Verstappen",
    nacionalidad: "holandes",
    nombreEscuderia: "Red Bull",
    directorEscuderiaNombre: "Christian",
    directorEscuderiaApellido: "Horner",
    color: "azul",
}

const pilotos = [Sainz, Verstappen];

/*for (const piloto of pilotos) {
    for (const propiedad in piloto) {
        console.log(`${propiedad}: ${piloto[propiedad]}`);
    }
    console.log('------------------');
}*/

console.log()

//DARK MODE
const colorModeButton = document.querySelector(".boton-modo-pantalla");
const body = document.querySelector("body");
const textos = document.querySelector(".containerTextos");


let darkMode = localStorage.getItem("dark-mode");

if (darkMode === "activado") {
    activarDarkMode();
}

colorModeButton.addEventListener("click", cambiarModoColor);

function cambiarModoColor() {
    body.classList.toggle("dark-mode");
    textos.classList.toggle("textosDarkMode");

    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerHTML = `<div class="container">
        <div class="boton-claro-oscuro">
            <img src="./assets/images/boton-claro.png" width="30vw" heith="30vw"></span>
            <div></div>
        </div>
    </div>`;
        localStorage.setItem("dark-mode", "activado");
    } else {
        colorModeButton.innerHTML = `<div class="container">
        <div class="boton-claro-oscuro">
            <img src="./assets/images/boton-oscuro.png" width="30vw" heith="30vw"></span>
            <div></div>
        </div>
    </div>`;
        localStorage.setItem("dark-mode", "desactivado");
    }
}

function activarDarkMode() {
    body.classList.add("dark-mode");
    textos.classList.add("textosDarkMode");
}

//--------------------------------------------------------------------------------------------

const usuarioNombreInput = document.querySelector(".input-nombre");
const textosElement = document.querySelector(".textos");
const imagenes = document.querySelector(".container-imagenes");
let usuarioApellido = "";
let piloto1 = " ";
let piloto2 = " ";

usuarioNombreInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const usuarioNombre = usuarioNombreInput.value;

        if (usuarioNombre === "") {
            alert("Por favor ingrese un nombre.");
            return;
        } else {
            usuarioNombreInput.remove();

            textosElement.innerHTML = `
                <h2 class="textos">Ahora indíqueme su/s Apellido/s.</h2>
                <input class="input-apellido" type="text" name="Apellido" placeholder="Presione ENTER">
            `;
        }
    }
});

const usuarioApellidoInput = document.querySelector(".input-apellido");

usuarioApellidoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const usuarioApellido = usuarioApellidoInput.value;
        usuarioApellidoInput.remove();

        if (usuarioApellido === "") {
            alert("Por favor ingrese un apellido.");
            return;
        } else {
            textosElement.innerHTML = `
                    <p>Su tarjeta de acceso ha sido emitida ${usuarioNombre} ${usuarioApellido}.</p>
                    <div class="container">
                    <div class="btn">
                        <span class="boton-siguiente">Siguiente</span>
                        <div class="dot"></div>
                    </div>
                </div>`;

            const botonSiguiente = document.querySelector(".boton-siguiente");
            botonSiguiente.addEventListener("click", function () {
                event.preventDefault();
                mostrarPilotoOptions(usuarioNombre, usuarioApellido);
            });
        }
    }
});

function mostrarPilotoOptions(usuarioNombre, usuarioApellido) {
    textosElement.innerHTML = `
        <p>¿Para qué piloto estará trabajando?</p>
        <div class="container">
        <div class="btn">
            <span class="boton-sainz">Carlos Sainz</span>
            <div class="dot"></div>
        </div>
    </div>
    <div class="container">
    <div class="btn">
        <span class="boton-verstappen">Max Verstappen</span>
        <div class="dot"></div>
    </div>
</div>
    `;

    const botonSainz = document.querySelector(".boton-sainz"); //CARLOS SAINZ
    const toastifySainz = document.querySelector(".boton-sainz");
    const botonVerstappen = document.querySelector(".boton-verstappen");//MAX VERSTAPPEN
    const toastifyVerstappen = document.querySelector(".boton-verstappen")

    botonSainz.addEventListener("click", function () {
        mostrarSainzScenario(usuarioNombre, usuarioApellido);
    });

    toastifySainz.addEventListener("click", function () {
        Toastify({
            text: "Elegiste a Carlos Sainz",
            duration: 6000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #FF0000, #F9DB2D)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    })

    botonVerstappen.addEventListener("click", function () {
        mostrarVerstappenScenario(usuarioNombre, usuarioApellido);
    });


    toastifyVerstappen.addEventListener("click", function () {
        Toastify({
            text: "Elegiste a Max Verstappen",
            duration: 6000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #1967D2, #F9DB2D)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    })
}
function mostrarSainzScenario(usuarioNombre, usuarioApellido) {
    event.preventDefault();
    let piloto1 = "Carlos Sainz";
    let piloto2 = "Max Verstappen";
    textosElement.innerHTML = `<p>Bienvenido ${usuarioNombre} ${usuarioApellido} dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.</p>
                        <p>Lo primero que debes saber es que trabajar con ${piloto1} es algo muy importante.</p>
                        <div class="container">
                        <div class="btn">
                            <span class="boton-siguiente1">Siguiente</span>
                            <div class="dot"></div>
                        </div>
                    </div>`;
    let botonSiguiente1 = document.querySelector(".boton-siguiente1")
    botonSiguiente1.addEventListener("click", function () {
        event.preventDefault();
        imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/sainz.png" alt="imagen de Carlos Sainz sin casco">`;
        textosElement.innerHTML = `<p>${Sainz.nombreEscuderia} es el sueño de todos.</p>
                        <p>Bueno, acomodate, ya estamos casi listos para ponernos en marcha.</p>
                        <p>${piloto1} te saluda a lo lejos y se sube a su monoplaza color ${Sainz.color}.</p>
                        <div class="container">
                        <div class="btn">
                            <span class="boton-siguiente2">Siguiente</span>
                            <div class="dot"></div>
                        </div>
                    </div>`;
        let botonSiguiente2 = document.querySelector(".boton-siguiente2");
        botonSiguiente2.addEventListener("click", function () {
            event.preventDefault();
            imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/sainz-casco.png" alt="imagen de Carlos Sainz con casco">`
            textosElement.innerHTML = `<p>Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.</p>
                            <p>Debes decidir:</p>
                            <div class="container">
                            <div class="btn2">
                                <span class="opcion1">Sacar a ${piloto1}, primero, con pista y aire limpio pero con el asfalto menos engomado.</span>
                                <div class="dot2"></div>
                            </div>
                        </div>
                        <div class="container">
                        <div class="btn2">
                            <span class="opcion2">Sacar a ${piloto1} despues del minuto 5, con más trafico pero con mayor adherencia.</span>
                            <div class="dot2"></div>
                        </div>
                    </div>`;
            const botonOpcion1 = document.querySelector(".opcion1");
            const botonOpcion2 = document.querySelector(".opcion2");

            botonOpcion1.addEventListener("click", funcionOpcion1);
            botonOpcion2.addEventListener("click", funcionOpcion2);
        })
    })
}

function mostrarVerstappenScenario(usuarioNombre, usuarioApellido) { //MAX VERSTAPPEN
    event.preventDefault();
    let piloto1 = "Max verstappen";
    let piloto2 = "Carlos Sainz";
    textosElement.innerHTML = `<p>Bienvenido ${usuarioNombre} ${usuarioApellido} dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.</p>
                        <p>Lo primero que debes saber es que trabajar con ${piloto1} es algo muy importante.</p>
                        <div class="container">
                        <div class="btn">
                            <span class="boton-siguiente1">Siguiente</span>
                            <div class="dot"></div>
                        </div>
                    </div>`;
    let botonSiguiente1 = document.querySelector(".boton-siguiente1")
    botonSiguiente1.addEventListener("click", function () {
        event.preventDefault();
        imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/verstappen.png" alt="imagen de Max Verstappen sin casco">`
        textosElement.innerHTML = `<p>${Verstappen.nombreEscuderia} es el sueño de todos.</p>
                        <p>Bueno, acomodate, ya estamos casi listos para ponernos en marcha.</p>
                        <p>${piloto1} te saluda a lo lejos y se sube a su monoplaza color ${Verstappen.color}.</p>
                        <div class="container">
                        <div class="btn">
                            <span class="boton-siguiente2">Siguiente</span>
                            <div class="dot"></div>
                        </div>
                    </div>`;
        let botonSiguiente2 = document.querySelector(".boton-siguiente2");
        botonSiguiente2.addEventListener("click", function () {
            event.preventDefault();
            imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/verstappen-casco.png" alt="imagen de Max Verstappen con casco">`
            textosElement.innerHTML = `<p>Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.</p>
                            <p>Debes decidir:</p>
                            <div class="container">
                        <div class="btn2">
                            <span class="opcion1">Sacar a ${piloto1}, primero, con pista y aire limpio pero con el asfalto menos engomado.</span>
                            <div class="dot2"></div>
                        </div>
                    </div>
                    <div class="container">
                    <div class="btn2">
                        <span class="opcion2">Sacar a ${piloto1} despues del minuto 5, con más trafico pero con mayor adherencia.</span>
                        <div class="dot2"></div>
                    </div>
                </div>`;
            const botonOpcion1 = document.querySelector(".opcion1");
            const botonOpcion2 = document.querySelector(".opcion2");

            botonOpcion1.addEventListener("click", funcionOpcion1MV);
            botonOpcion2.addEventListener("click", funcionOpcion2MV);
        })
    })
}


//------------- FUNCIONES CARLOS
function funcionOpcion1(event) {
    event.preventDefault();
    textosElement.innerHTML =
        `<p>Fue una buena idea para esta parte clasificatoria, ${Sainz.nombre} consigue un P2 que fue fácil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.</p>
        <p>Buen trabajo, ${usuarioNombre} Sigamos así. Te dice ${Sainz.directorEscuderiaNombre} ${Sainz.directorEscuderiaApellido}</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente3">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;
    q1 = 2;
    const botonSiguiente3 = document.querySelector(".boton-siguiente3");

    botonSiguiente3.addEventListener("click", function () {
        mostrarSiguienteContenido();
    });
}

function funcionOpcion2(event) {
    event.preventDefault();
    let piloto1 = "Carlos Sainz";

    textosElement.innerHTML =
        `<p>A ${piloto1} se le ha complicado conseguir espacio para hacer una vuelta rápida y limpia. Consigue un P4 que lo coloca cómodamente en la Q2. ${Sainz.nombre} se sintió un poco nervioso. Durante estos minutos sentiste la mirada de ${Sainz.directorEscuderiaNombre} en tu espalda varias veces.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente3">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;
    q1 = 4;
    const botonSiguiente3 = document.querySelector(".boton-siguiente3");

    botonSiguiente3.addEventListener("click", function () {
        mostrarSiguienteContenido();
    });
}


function mostrarSiguienteContenido() {
    textosElement.innerHTML =
        `<p>Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.</p>
        <p>Los especialistas dicen que, por lo menos en esta sesión, con seguridad, no lloverá.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente4">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;

    const botonSiguiente4 = document.querySelector(".boton-siguiente4");
    botonSiguiente4.addEventListener("click", function () {
        event.preventDefault();
        eleccionNeumaticos();
    });
}

function eleccionNeumaticos() {
    textosElement.innerHTML =
        `<p>Para la Q3 se utilizaron neumáticos intermedios nuevos. ¿Deseas continuar con esos o cambiar?</p>
        <div class="container">
                        <div class="btn2">
                            <span class="opcion3">Continuar con neumáticos intermedios.</span>
                            <div class="dot2"></div>
                        </div>
                    </div>
                    <div class="container">
                    <div class="btn2">
                        <span class="opcion4">Cambiar a compuesto blando.</span>
                        <div class="dot2"></div>
                    </div>
                </div>`
        ;

    const botonOpcion3 = document.querySelector(".opcion3");
    const botonOpcion4 = document.querySelector(".opcion4");

    botonOpcion3.addEventListener("click", function () {
        event.preventDefault();
        neumaticosQ3(piloto1, piloto2);
    });

    botonOpcion4.addEventListener("click", function () {
        event.preventDefault();
        neumaticosQ3(piloto1, piloto2);
    });
}

function neumaticosQ3(piloto1, piloto2) {
    const botonOpcion3 = document.querySelector(".opcion3");
    const botonOpcion4 = document.querySelector(".opcion4");

    botonOpcion3.addEventListener("click", function () {
        event.preventDefault();
        textosElement.innerHTML = `
            <p>Optaste por seguir con neumáticos intermedios usados.</p>
            <p>A veces ir por lo seguro es una buena opción, ${Sainz.nombre}, logra controlar el monoplaza, pero no está consiguiendo el ritmo que desea.</p>
            <p>Ve a ${piloto2} pasarlo muy rápido. En ese momento tu piloto se da cuenta de que con una llanta más rápida podría, al menos haber puesto resistencia.</p>
            <p>P6 para ${piloto1} y sus nervios afloran. ${Sainz.directorEscuderiaNombre} se acerca y pregunta por qué no optaste por los blandos y vuelve a su lugar, ya que aún estamos entre los 10 mejores</p>
            <div class="container">
            <div class="btn">
                <span class="boton-siguiente5">Siguiente</span>
                <div class="dot"></div>
            </div>
        </div>
        `;
        q2 = 6;
        const botonSiguiente5 = document.querySelector(".boton-siguiente5");
        botonSiguiente5.addEventListener("click", function () {
            funcionBotonSiguiente5();
        });
    });

    botonOpcion4.addEventListener("click", function () {
        event.preventDefault();
        textosElement.innerHTML = `
            <p>Hora de ir por los blandos.</p>
            <p>${piloto1} va volando, siente que puede conseguir ese P1. ${piloto2} ha cerrado su vuelta en 1.29.17 y ha ingresado a boxes ${Sainz.nombre} se prepara nuevamente para una vuelta rápida y la consigue! P1 para el ${Sainz.nacionalidad}.</p>
            <p>De fondo se escucha a un emocionado ${Sainz.directorEscuderiaNombre} ${Sainz.directorEscuderiaApellido} emocionado, que da cuenta de la ilusión de todo el equipo.</p>
            <p>${Sainz.nombre} se sintió muy cómodo con tu actuación y con el auto.</p>
            <div class="container">
            <div class="btn">
                <span class="boton-siguiente5">Siguiente</span>
                <div class="dot"></div>
            </div>
        </div>
        `;
        q2 = 1;
        const botonSiguiente5 = document.querySelector(".boton-siguiente5");
        botonSiguiente5.addEventListener("click", function () {
            funcionBotonSiguiente5();
        });
    });
}

function funcionBotonSiguiente5() {
    event.preventDefault();
    textosElement.innerHTML =
        `<p>Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.</p>
        <p>Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.</p>
        <p>${Sainz.nombre} sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.</p>
        <p>Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.</p>
        <p>${Sainz.nombre} avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.</p>
        <p>${Sainz.apellido} se siente confiado y dice que puede controlar el monoplaza ${Sainz.color} + " con los neumáticos full wet.</p>
        <p>Vos y tus mecánicos habían preparado el compuesto inter wet.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente6">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;

    const botonSiguiente6 = document.querySelector(".boton-siguiente6");
    botonSiguiente6.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonSiguiente6();
    });
}

function funcionBotonSiguiente6() {
    event.preventDefault();
    textosElement.innerHTML =
        `<p>¿Qué deseas hacer?</p>
        <div class="container">
        <div class="btn2">
            <span class="opcion5">Hacer caso al piloto y poner compuesto para mucha lluvia (full wet).</span>
            <div class="dot2"></div>
        </div>
    </div>
    <div class="container">
    <div class="btn2">
        <span class="opcion6">Seguir tu instinto y utilizar neumáticos intermedios para lluvia (inter wet).</span>
        <div class="dot2"></div>
    </div>
</div>`
        ;

    const botonOpcion5 = document.querySelector(".opcion5");
    const botonOpcion6 = document.querySelector(".opcion6");

    botonOpcion5.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonOpcion5();
    });

    botonOpcion6.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonOpcion6();
    });
}
function funcionBotonOpcion5() {
    event.preventDefault();
    imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/sainz-frustrado.png" alt="imagen de Carlos Sainz ligeramente frustrado">`
    textosElement.innerHTML = `
        <p>${Sainz.nombre} entra a boxes y le colocan neumáticos full wet</p>
        <p>Decides escuchar a tu piloto. Luego de dos curvas, notas que ${piloto1} está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.</p>
        Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wet comienzan a irse de la pista. ${piloto2} con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.
        <p>${Sainz.nombre} logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " ${Sainz.nombreEscuderia} está conforme. Mañana durante la carrera saldrá en segunda fila.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente7">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>
    `;
    q3 = 3;
    const botonSiguiente7 = document.querySelector(".boton-siguiente7");
    botonSiguiente7.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonSiguiente7();
    });
}

function funcionBotonOpcion6() {
    event.preventDefault();
    imagenes.innerHTML = `            <img class = "imagen-dialogos" src="./assets/images/sainz-festejo.png" alt="imagen de Carlos Sainz festejando">`
    textosElement.innerHTML = `
        <p>${Sainz.nombre} entra a boxes y le colocan neumáticos inter wet.</p>
        <p>${Sainz.nombre} no protesta y respeta tu decisión como ingeniero. Sale a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vuelta rápida, el clima lo acompaña, sigue moderada.</p>
        <p>${piloto1} logra marcar un tiempazo ! 1.28.54. De lo más rápido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser más fuerte.</p>
        <p>Con cuidado ${Sainz.nombre} llega al pit y todos los presentes festejan. ${piloto2} no pudo superar el resultado. Mañana ${Sainz.nombreEscuderia} sale desde la primera línea.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente7">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>
    `;
    q3 = 1;
    let botonSiguiente7 = document.querySelector(".boton-siguiente7");
    botonSiguiente7.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonSiguiente7();
    })
}
//FINAL CS
function funcionBotonSiguiente7() {
    event.preventDefault();
    const textosElement = document.querySelector(".textos");
    const final = finalPromedio(q1, q2, q3);

    if (final >= 5) { // BUENO
        imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/vasseur-conforme.png" alt="imagen de Fred Vasseur con una sonrisa">`;
        textosElement.innerHTML = `<p>${Sainz.directorEscuderiaNombre} ${Sainz.directorEscuderiaApellido} se te acerca con una sonrisa y abraza alegremente junto a ${Sainz.nombre}. Sabe que mañana será un día con muchas expectativas. Y lo conseguiste todo en un solo día, ${usuarioNombre} ${usuarioApellido}.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente8">Fin de la aventura</span>
            <div class="dot"></div>
        </div>
    </div>`;
    } else { // MALO
        imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/vasseur-frustrado.png" alt="imagen de Fred Vasseur muy serio">`
        textosElement.innerHTML = `<p>Sabes que estar trabajando para ${Sainz.nombreEscuderia} es una gran responsabilidad. ${Sainz.nombre} se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. ${Sainz.directorEscuderiaNombre} ${Sainz.directorEscuderiaApellido} sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente8">Fin de la aventura</span>
            <div class="dot"></div>
        </div>
    </div>`;
        const botonSiguiente8 = document.querySelector(".boton-siguiente8");
        botonSiguiente8.addEventListener("click", function () {
            event.preventDefault();
            funcionBotonSiguiente8();
        })
    }
};



//-------------------------------------------FUNCIONES MAX
function funcionOpcion1MV(event) {
    event.preventDefault();
    textosElement.innerHTML =
        `<p>Fue una buena idea para esta parte clasificatoria, ${Verstappen.nombre} consigue un P2 que fue fácil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.</p>
        <p>Buen trabajo, ${usuarioNombre} Sigamos así. Te dice ${Verstappen.directorEscuderiaNombre} ${Verstappen.directorEscuderiaApellido}</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente3">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;
    q1 = 2;
    const botonSiguiente3 = document.querySelector(".boton-siguiente3");

    botonSiguiente3.addEventListener("click", function () {
        mostrarSiguienteContenidoMV();
    });
}

function funcionOpcion2MV(event) {
    event.preventDefault();
    let piloto1 = "Max Verstappen";

    textosElement.innerHTML =
        `<p>A ${piloto1} se le ha complicado conseguir espacio para hacer una vuelta rápida y limpia. Consigue un P4 que lo coloca cómodamente en la Q2. ${Verstappen.nombre} se sintió un poco nervioso. Durante estos minutos sentiste la mirada de ${Sainz.directorEscuderiaNombre} en tu espalda varias veces.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente3">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;
    q1 = 4;
    const botonSiguiente3 = document.querySelector(".boton-siguiente3");

    botonSiguiente3.addEventListener("click", function () {
        mostrarSiguienteContenidoMV();
    });
}


function mostrarSiguienteContenidoMV() {
    textosElement.innerHTML =
        `<p>Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.</p>
        <p>Los especialistas dicen que, por lo menos en esta sesión, con seguridad, no lloverá.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente4">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;

    const botonSiguiente4 = document.querySelector(".boton-siguiente4");
    botonSiguiente4.addEventListener("click", function () {
        event.preventDefault();
        eleccionNeumaticosMV();
    });
}

function eleccionNeumaticosMV() {
    textosElement.innerHTML =
        `<p>Para la Q3 se utilizaron neumáticos intermedios nuevos. ¿Deseas continuar con esos o cambiar?</p>
        <div class="container">
        <div class="btn2">
            <span class="opcion3">Continuar con neumáticos intermedios.</span>
            <div class="dot2"></div>
        </div>
    </div>
    <div class="container">
    <div class="btn2">
        <span class="opcion4">Cambiar a compuesto blando.</span>
        <div class="dot2"></div>
    </div>
</div>
`
        ;

    const botonOpcion3 = document.querySelector(".opcion3");
    const botonOpcion4 = document.querySelector(".opcion4");

    botonOpcion3.addEventListener("click", function () {
        event.preventDefault();
        neumaticosQ3MV(piloto1, piloto2);
    });

    botonOpcion4.addEventListener("click", function () {
        event.preventDefault();
        neumaticosQ3MV(piloto1, piloto2);
    });
}

function neumaticosQ3MV(piloto1, piloto2) {
    const botonOpcion3 = document.querySelector(".opcion3");
    const botonOpcion4 = document.querySelector(".opcion4");

    botonOpcion3.addEventListener("click", function () {
        event.preventDefault();
        textosElement.innerHTML = `
            <p>Optaste por seguir con neumáticos intermedios usados.</p>
            <p>A veces ir por lo seguro es una buena opción, ${Verstappen.nombre}, logra controlar el monoplaza, pero no está consiguiendo el ritmo que desea.</p>
            <p>Ve a ${piloto2} pasarlo muy rápido. En ese momento tu piloto se da cuenta de que con una llanta más rápida podría, al menos haber puesto resistencia.</p>
            <p>P6 para ${piloto1} y sus nervios afloran. ${Verstappen.directorEscuderiaNombre} se acerca y pregunta por qué no optaste por los blandos y vuelve a su lugar, ya que aún estamos entre los 10 mejores</p>
            <div class="container">
            <div class="btn">
                <span class="boton-siguiente5">Siguiente</span>
                <div class="dot"></div>
            </div>
        </div>
        `;
        q2 = 6;
        const botonSiguiente5 = document.querySelector(".boton-siguiente5");
        botonSiguiente5.addEventListener("click", function () {
            funcionBotonSiguiente5MV();
        });
    });

    botonOpcion4.addEventListener("click", function () {
        event.preventDefault();
        textosElement.innerHTML = `
            <p>Hora de ir por los blandos.</p>
            <p>${piloto1} va volando, siente que puede conseguir ese P1. ${piloto2} ha cerrado su vuelta en 1.29.17 y ha ingresado a boxes ${Verstappen.nombre} se prepara nuevamente para una vuelta rápida y la consigue! P1 para el ${Verstappen.nacionalidad}.</p>
            <p>De fondo se escucha a un emocionado ${Verstappen.directorEscuderiaNombre} ${Verstappen.directorEscuderiaApellido} emocionado, que da cuenta de la ilusión de todo el equipo.</p>
            <p>${Verstappen.nombre} se sintió muy cómodo con tu actuación y con el auto.</p>
            <div class="container">
            <div class="btn">
                <span class="boton-siguiente5">Siguiente</span>
                <div class="dot"></div>
            </div>
        </div>
        `;
        q2 = 1;
        const botonSiguiente5 = document.querySelector(".boton-siguiente5");
        botonSiguiente5.addEventListener("click", function () {
            funcionBotonSiguiente5MV();
        });
    });
}

function funcionBotonSiguiente5MV() {
    event.preventDefault();
    textosElement.innerHTML =
        `<p>Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.</p>
        <p>Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.</p>
        <p>${Verstappen.nombre} sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.</p>
        <p>Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.</p>
        <p>${Verstappen.nombre} avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.</p>
        <p>${Verstappen.apellido} se siente confiado y dice que puede controlar el monoplaza ${Verstappen.color} + " con los neumáticos full wet.</p>
        <p>Vos y tus mecánicos habían preparado el compuesto inter wet.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente6">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>`
        ;

    const botonSiguiente6 = document.querySelector(".boton-siguiente6");
    botonSiguiente6.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonSiguiente6MV();
    });
}

function funcionBotonSiguiente6MV() {
    event.preventDefault();
    textosElement.innerHTML =
        `<p>¿Qué deseas hacer?</p>
        <div class="container">
        <div class="btn2">
            <span class="opcion5">Hacer caso al piloto y poner compuesto para mucha lluvia (full wet).</span>
            <div class="dot2"></div>
        </div>
    </div>
    <div class="container">
    <div class="btn2">
        <span class="opcion6">Seguir tu instinto y utilizar neumáticos intermedios para lluvia (inter wet).</span>
        <div class="dot2"></div>
    </div>
</div>`
        ;

    const botonOpcion5 = document.querySelector(".opcion5");
    const botonOpcion6 = document.querySelector(".opcion6");

    botonOpcion5.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonOpcion5MV();
    });

    botonOpcion6.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonOpcion6MV();
    });
}
function funcionBotonOpcion5MV() {
    event.preventDefault();
    imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/verstappen-frustrado.png" alt="imagen de Max Verstappen ligeramente frustrado.">`
    textosElement.innerHTML = `
        <p>${Verstappen.nombre} entra a boxes y le colocan neumáticos full wet</p>
        <p>Decides escuchar a tu piloto. Luego de dos curvas, notas que ${piloto1} está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.</p>
        Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wet comienzan a irse de la pista. ${piloto2} con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.
        <p>${Verstappen.nombre} logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " ${Verstappen.nombreEscuderia} está conforme. Mañana durante la carrera saldrá en segunda fila.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente8">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>
    `;
    q3 = 3;
    const botonSiguiente7 = document.querySelector(".boton-siguiente7");
    botonSiguiente7.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonSiguiente7MV();
    });
}

function funcionBotonOpcion6MV() {
    event.preventDefault();
    imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/verstappen-festejo.png" alt="imagen de Max Verstappen festejando.">`;
    textosElement.innerHTML = `
        <p>${Verstappen.nombre} entra a boxes y le colocan neumáticos inter wet.</p>
        <p>${Verstappen.nombre} no protesta y respeta tu decisión como ingeniero. Sale a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vuelta rápida, el clima lo acompaña, sigue moderada.</p>
        <p>${piloto1} logra marcar un tiempazo ! 1.28.54. De lo más rápido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser más fuerte.</p>
        <p>Con cuidado ${Verstappen.nombre} llega al pit y todos los presentes festejan. ${piloto2} no pudo superar el resultado. Mañana ${Verstappen.nombreEscuderia} sale desde la primera línea.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente7">Siguiente</span>
            <div class="dot"></div>
        </div>
    </div>
    `;
    q3 = 1;
    const botonSiguiente7 = document.querySelector(".boton-siguiente7")
    botonSiguiente7.addEventListener("click", function () {
        event.preventDefault();
        funcionBotonSiguiente7MV();
    })
}

//FINAL MAX
function funcionBotonSiguiente7MV() {
    event.preventDefault();
    const textosElement = document.querySelector(".textos");
    const final = finalPromedio(q1, q2, q3);

    if (final >= 5) { // BUENO
        imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/horner-conforme.png" alt="imagen de Christian Horner con una sonrisa.">`
        textosElement.innerHTML = `<p>${Verstappen.directorEscuderiaNombre} ${Verstappen.directorEscuderiaApellido} se te acerca con una sonrisa y abraza alegremente junto a ${Verstappen.nombre}. Sabe que mañana será un día con muchas expectativas. Y lo conseguiste todo en un solo día, ${Verstappen} ${usuarioApellido}.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente8">Fin de la aventura</span>
            <div class="dot"></div>
        </div>
    </div>`;
    } else { // MALO
        imagenes.innerHTML = `<img class = "imagen-dialogos" src="./assets/images/horner-frustrado.png" alt="imagen de Christian Horner muy serio.">`
        textosElement.innerHTML = `<p>Sabes que estar trabajando para ${Verstappen.nombreEscuderia} es una gran responsabilidad. ${Verstappen.nombre} se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. ${Verstappen.directorEscuderiaNombre} ${Verstappen.directorEscuderiaApellido} sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.</p>
        <div class="container">
        <div class="btn">
            <span class="boton-siguiente8">Fin de la aventura</span>
            <div class="dot"></div>
        </div>
    </div>`;
        const botonSiguiente8 = document.querySelector(".boton-siguiente8");
        botonSiguiente8.addEventListener("click", function () {
            event.preventDefault();
            funcionBotonSiguiente8();
        })
    }
}


function funcionBotonSiguiente8() {
    event.preventDefault();
    const sweetAlert = document.querySelector(".boton-siguiente8");
    sweetAlert.addEventListener("click", () => {
        Swal.fire({
            title: 'Gracias por participar de esta aventura.',
            text: 'Pronto encontrarás nuevas historias para disfrutar.',
            imageUrl: 'https://phantom-marca.unidadeditorial.es/19d82060d45c6301bc7713d20317ded5/resize/1200/f/jpg/assets/multimedia/imagenes/2021/12/13/16394242416163.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Carlos y Max abrazados.',
        })
    });
}