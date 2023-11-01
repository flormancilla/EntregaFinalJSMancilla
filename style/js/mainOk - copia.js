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

colorModeButton.addEventListener("click", cambiarModoColor);

function cambiarModoColor() {
    body.classList.toggle("dark-mode");
    textos.classList.toggle("textosDarkMode");

    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Modo Claro";
    } else {
        colorModeButton.innerText = "Modo Oscuro";
    }
}
//--------------------------------------------------------------------------------------------

const usuarioNombreInput = document.querySelector(".input-nombre");

usuarioNombreInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const usuarioNombre = usuarioNombreInput.value;
        console.log(usuarioNombre);

        const textosElement = document.querySelector(".textos");
        textosElement.innerHTML = `
            <h2 class="textos">Ahora indíqueme su/s Apellido/s.</h2>
            <input class="input-apellido" type="text" name="Apellido" placeholder="Presione ENTER">
        `;

        usuarioNombreInput.remove();
        const usuarioApellidoInput = document.querySelector(".input-apellido");

        usuarioApellidoInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                const usuarioApellido = usuarioApellidoInput.value;
                console.log(usuarioApellido);
                usuarioApellidoInput.remove();

                textosElement.innerHTML = `
                    <p>Su tarjeta de acceso ha sido emitida ${usuarioNombre}  ${usuarioApellido}.</p>
                    <button class="boton-siguiente">Siguiente</button>
                `;

                const botonSiguiente = document.querySelector(".boton-siguiente");
                botonSiguiente.addEventListener("click", function () {
                    textosElement.innerHTML = `
                        <p>¿Para qué piloto estará trabajando?</p>
                        <button class = "boton-sainz">Carlos Sainz</button>
                        <button class = "boton-verstappen">Max Verstappen</button>
                    `;
                    const botonSainz = document.querySelector(".boton-sainz");
                    botonSainz.addEventListener("click", function () {
                        event.preventDefault();
                        let piloto1 = "Carlos Sainz";
                        let piloto2 = "Max Verstappen";
                        textosElement.innerHTML = `<p>Bienvenido ${usuarioNombre} ${usuarioApellido} dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.</p>
                        <p>Lo primero que debes saber es que trabajar con ${piloto1} es algo muy importante.</p>
                        <button class="boton-siguiente1">Siguiente</button>`; //esta bien
                        let botonSiguiente1 = document.querySelector(".boton-siguiente1")
                        botonSiguiente1.addEventListener("click", function () {
                            event.preventDefault();
                            textosElement.innerHTML = `<p>${Sainz.nombreEscuderia} es el sueño de todos.</p>
                        <p>Bueno, acomodate, ya estamos casi listos para ponernos en marcha.</p>
                        <p>${piloto1} te saluda a lo lejos y se sube a su monoplaza color ${Sainz.color}.</p>
                        <button class="boton-siguiente2">Siguiente</button>`;
                            let botonSiguiente2 = document.querySelector(".boton-siguiente2");
                            botonSiguiente2.addEventListener("click", function () {
                                event.preventDefault();
                                textosElement.innerHTML = `<p>Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.</p>
                            <p>Debes decidir:</p>
                            <button class = "opcion1">Sacar a ${piloto1}, primero, con pista y aire limpio pero con el asfalto menos engomado.</button>
                            <button class = "opcion2">Sacar a ${piloto1} despues del minuto 5, con más trafico pero con mayor adherencia.</button>`;//1 devuelve null pero continua y luego reinicia 2 se reinicia automaticamente
                                let botonOpcion1 = document.querySelector(".opcion1");
                                botonOpcion1.addEventListener("click", function () {
                                    event.preventDefault();
                                    textosElement.innerHTML = `<p>Fue una buena idea para esta parte clasificatoria, ${Sainz.nombre} consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.</p>
                            <p>Buen trabajo, ${usuarioNombre} Sigamos así. Te dice ${Sainz.directorEscuderiaNombre} ${Sainz.directorEscuderiaApellido}</p>
                            <button class = "boton-siguiente3">Siguiente</button>
                            `
                                    let botonOpcion2 = document.querySelector(".opcion2");
                                    botonOpcion2.addEventListener("click", function () {
                                        event.preventDefault();
                                        textosElement.innerHTML = `<p>A ${piloto1} se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. ${Sainz.nombre} se sintió un poco nervioso. Durante estos minutos sentiste la mirada de ${Sainz.directorEscuderiaNombre} en tu espalda varias veces.</p>
                                <button class = "boton-siguiente3">Siguiente</button>`
                                    })
                                    let botonSiguiente3 = document.querySelector(".boton-siguiente3");
                                    botonSiguiente3.addEventListener("click", function () {
                                        event.preventDefault();
                                        textosElement.innerHTML = `<p>Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.</p>
                                <p>Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.</p>
                                <button class = "boton-siguiente4">Siguiente</button>`
                                let botonSiguiente4 = document.querySelector(".boton-siguiente4");
                                botonSiguiente4.addEventListener("click", function() {
                                    event.preventDefault();
                                    textosElement.innerHTML =`<p>Para la Q3 se utilizaron neumaticos intermedios nuevos. Deseas continuar con esos o cambiar?</p>
                                    <button class = "opcion3">Continuar con neumaticos intermedios.</button>
                                    <button class = "opcion4">Cambiar a compuesto blando</button>`
                                    let botonOpcion3 = document.querySelector(".opcion3");
                                    botonOpcion3.addEventListener("click", function(){
                                        event.preventDefault();
                                        textosElement.innerHTML = `<p>Optaste por seguir con neumaticos intermedios usados.</p>
                                        <p>A veces ir por lo seguro es una buena opción, ${Sainz.nombre}, logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.</p>
                                        <p>Ve a ${piloto2} pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.</p>
                                        <p>P6 para ${piloto1} y sus nervios afloran. ${Sainz.directorEscuderiaNombre} se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores</p>
                                        <button class = "boton-siguente5"></button>`
                                    })
                                    let botonOpcion4 = document.querySelector(".opcion4");
                                    botonOpcion4.addEventListener("click", function {
                                        event.preventDefault();
                                        textosElement.innerHTML =`<p>Hora de ir por los blandos.</p>
                                        <p>${piloto1} va volando, siente que puede conseguir ese P1. ${piloto2} a cerrado su vuelta en 1.29.17y ha ingresado a boxes ${Sainz.nombre} se prepara nuevamente para una vuelta rápida y la consigue! P1 para el ${Sainz.nacionalidad}.</p>
                                        <p>De fondo se escucha a un emocionado " ${Sainz.directorEscuderiaNombre} ${Sainz.directorEscuderiaApellido} emocionado, que da cuenta de la ilusión de todo el equipo.</p>
                                        <p>${Sainz.nombre} se sintió muy cómodo con tu actuación y con el auto.</p>
                                        <button class = "boton-siguente5"></button>`
                                    })
                                    let botonSiguiente5 = document.querySelector(".boton-siguiente5");
                                    botonSiguiente5.addEventListener("click", function {
                                        event.preventDefault();
                                        textosElement.innerHTML = `<p>Hora de ir por los blandos.</p>
                                        <p>${piloto1} va volando, siente que puede conseguir ese P1. ${piloto2} a cerrado su vuelta en 1.29.17y ha ingresado a boxes.</p>
                                        <p>De fondo se escucha a un emocionado ${Sainz.directorEscuderiaNombre} ${Sainz.directorEscuderiaApellido} emocionado, que da cuenta de la ilusión de todo el equipo.</p>
                                        <p>${Sainz.nombre} se sintió muy cómodo con tu actuación y con el auto.</p>
                                        <button class ="boton-siguiente6></button>`
                                    })
                                    let botonSiguiente6 = document.querySelector(".boton-siguiente7");
                                    botonSiguiente6.addEventListener("click", function {
                                        event.preventDefault();
                                        textosElement.innerHTML = `<p>Que deseas hacer?</p>
                                        <button class = "opcion5">Hacer caso al piloto y poner compuesto para mucha lluvia (full wet).</button>
                                        <button class = "opcion6">Seguir tu instinto y utilizar neumáticos intermedios para lluvia (inter wet).</button>`
                                    })
                                    let botonOpcion5 = document.querySelector(".opcion5");
                                    botonOpcion5.addEventListener("click", function(){
                                        event.preventDefault();
                                        textosElement.innerHTML = `<p>${Sainz.nombre} entra a boxes y le colocan neumáticos full wet</p>
                                        <p>Decides escuchar a tu piloto. Luego de dos curvas, notas que ${piloto1} está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.</p>
                                        Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. ${piloto2} con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.
                                        <p>${Sainz.nombre} logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " ${Sainz.nombreEscuderia} está conforme. Mañana durante la carrera saldrá en segunda fila.</p>
                                        <button class= "boton-siguiente7>Siguiente</button>`
                                    })
                                    let botonOpcion6 = document.querySelector(".opcion6");
                                    botonOpcion6.addEventListener("click", function (){
                                        event.preventDefault();
                                        textosElement.innerHTML = `<p>${Sainz.nombre} entra a boxes y le colocan neumáticos inter wet.</p>
                                        <p>${Sainz.nombre} no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.</p>
                                        <p>${piloto1} logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.</p>
                                        <p>Con cuidado ${Sainz.nombre} llega al pit y todos los presentes festejan. ${piloto2} no pudo superar el resultado. Mañana ${Sainz.nombreEscuderia} sale desde la primera línea.</p>
                                        <button class= "boton-siguiente7>Siguiente</button>`
                                    })
                                })
                                    })
                                })
                            })
                        })
                    });
                });
            }
        })
    }
})


