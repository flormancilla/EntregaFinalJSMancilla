// CALCULO PROMEDIO - HACER FUNCION
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

for (const piloto of pilotos) {
    for (const propiedad in piloto) {
        console.log(`${propiedad}: ${piloto[propiedad]}`);
    }
    console.log('------------------');
}

console.log()
const usuarioNombre = prompt("Bienvenido Ingeniero/a, ingrese solo su/s nombre/s por favor.");
const usuarioApellido = prompt("Ahora indiqueme su/s Apellido/s.");

alert("Su tarjeta de acceso ha sido emitida " + usuarioNombre + " " + usuarioApellido + ".");
console.log("Su tarjeta de acceso ha sido emitida " + usuarioNombre + " " + usuarioApellido + ".");

alert("Para que piloto estará trabajando?");
console.log("Para que piloto estará trabajando?");

let piloto1 = prompt("Elija la Opcion que desea. Sainz para Carlos Sainz o Verstappen para Max Verstappen");
console.log(pilotos.find((piloto) => piloto.apellido === piloto1))
if (piloto1 == Sainz.apellido) { //CAMINO CARLOS SAINZ
    let piloto1 = "Carlos Sainz";
    let piloto2 = "Max Verstappen";
    console.log(Sainz.nombre + " " + Sainz.apellido);
    alert("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    console.log("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    alert("Lo primero que debes saber es que trabajar con " + piloto1 + " es algo muy importante.");
    console.log("Lo primero que debes saber es que trabajar con " + piloto1 + " es algo muy importante.");
    alert(Sainz.nombreEscuderia + " es el sueño de todos.");
    console.log(Sainz.nombreEscuderia + " es el sueño de todos.");
    alert("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    console.log("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    alert(piloto1 + " te saluda a lo lejos y se sube a su monoplaza color " + Sainz.color + ".");
    console.log(piloto1 + " te saluda a lo lejos y se sube a su monoplaza color " + Sainz.color + ".");
    alert("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    console.log("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    alert("Debes decidir:");
    alert("A - ");
    alert("B - Sacar a " + piloto1 + " despues del minuto 5, con más trafico pero con mayor adherencia.");

    let camino1 = prompt("Ingrese A - Para sacar al piloto primero. B - Para sacar al piloto despues del minuto 5.");
    if (camino1 == "A") {
        ; //CAMINO 1
        console.log("Salen primero.")
        alert("Fue una buena idea para esta parte clasificatoria, " + Sainz.nombre + " consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        console.log("Fue una buena idea para esta parte clasificatoria, " + Sainz.nombre + "consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        alert("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido);
        console.log("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido);
        q1 = 2;
    } else { //CAMINO 2
        console.log("Esperan unos minutos.")
        alert("A " + piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + Sainz.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + Sainz.directorEscuderiaNombre + " en tu espalda varias veces.");
        console.log("A " + piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + Sainz.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + Sainz.directorEscuderiaNombre + " en tu espalda varias veces.");
        q1 = 4;
    }

    alert("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    console.log("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    alert("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    console.log("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    alert("Para la Q3 se utilizaron neumaticos intermedios nuevos. Deseas continuar con esos o cambiar?");

    let camino3 = prompt("Ingrese A - Para continuar con neumaticos intermedios. B - Para cambiar a compuesto blando");
    if (camino3 == "A") {
        console.log("Optaste por seguir con neumaticos intermedios usados.");
        alert("A veces ir por lo seguro es una buena opción, " + Sainz.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        console.log("A veces ir por lo seguro es una buena opción, " + Sainz.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        alert("Ve a " + piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        console.log("Ve a " + piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        alert("P6 para " + piloto1 + " y sus nervios afloran. " + Sainz.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        console.log("P6 para " + piloto1 + " y sus nervios afloran. " + Sainz.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        q2 = 6;
    } else { //CAMINO 4
        console.log("Hora de ir por los blandos.");
        alert(piloto1 + " va volando, siente que puede conseguir ese P1. " + piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + Sainz.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + Sainz.nacionalidad + ".");
        console.log(piloto1 + " va volando, siente que puede conseguir ese P1. " + piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + Sainz.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + Sainz.nacionalidad + ".");
        alert("De fondo se escucha a un emocionado " + Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        console.log("De fondo se escucha a un emocionado " + Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        alert(Sainz.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        console.log(Sainz.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        q2 = 1;
    }

    alert("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    console.log("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    alert("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    console.log("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    alert(Sainz.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    console.log(Sainz.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    alert("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    console.log("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    alert(Sainz.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    console.log(Sainz.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    alert(Sainz.apellido + " se siente confiado y dice que puede controlar el monoplaza " + Sainz.color + " con los neumáticos full wet.");
    console.log(Sainz.apellido + " se siente confiado y dice que puede controlar el monoplaza " + Sainz.color + " con los neumáticos full wet.");
    alert("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    console.log("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    alert("Que deseas hacer?")

    let camino5 = prompt("A - Hacer caso al piloto y poner compuesto para mucha lluvia (full wet). B - Seguir tu instinto y utilizar neumáticos intermedios para lluvia (inter wet).");
    if (camino5 == "A") { //CAMINO 5
        console.log(Sainz.nombre + "  entra a boxes y le colocan neumáticos full wet.");
        alert("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        console.log("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        alert("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        console.log("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        alert(Sainz.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + Sainz.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        console.log(Sainz.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + Sainz.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        q3 = 3;
    } else { //CAMINO 6
        console.log(Sainz.nombre + "  entra a boxes y le colocan neumáticos inter wet.");
        alert(Sainz.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        console.log(Sainz.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        alert(piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        console.log(piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        alert("Con cuidado " + Sainz.nombre + " llega al pit y todos los presentes festejan. " + piloto2 + " no pudo superar el resultado. Mañana " + Sainz.nombreEscuderia + " sale desde la primera línea.");
        console.log("Con cuidado " + Sainz.nombre + " llega al pit y todos los presentes festejan. " + piloto2 + " no pudo superar el resultado. Mañana " + Sainz.nombreEscuderia + " sale desde la primera línea.");
        q3 = 1;
    }

    let final = finalPromedio(q1, q2, q3)

    if (final >= 3) { //BUENO
        alert(Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + Sainz.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
        console.log(Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + Sainz.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
    } else { //MALO
        alert("Sabes que estar trabajando para " + Sainz.nombreEscuderia + " es una gran responsabilidad." + Sainz.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
        console.log("Sabes que estar trabajando para " + Sainz.nombreEscuderia + " es una gran responsabilidad." + Sainz.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + Sainz.directorEscuderiaNombre + " " + Sainz.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
    }
} else { //CAMINO MAX Verstappen
    console.log(pilotos.find((piloto) => piloto.apellido === piloto1))
    let Piloto1 = "Max Verstappen";
    let Piloto2 = "Carlos Sainz";
    console.log(Verstappen.nombre + " " + Verstappen.apellido)
    alert("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    console.log("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    alert("Lo primero que debes saber es que trabajar con " + Piloto1 + " es algo muy importante.");
    console.log("Lo primero que debes saber es que trabajar con " + Piloto1 + " es algo muy importante.")
    q3 = 1;

    alert(Verstappen.nombreEscuderia + " es el sueño de todos.");
    console.log(Verstappen.nombreEscuderia + " es el sueño de todos.");
    alert("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    console.log("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    alert(Piloto1 + " te saluda a lo lejos y se sube a su monoplaza color " + Verstappen.color + ".");
    console.log(Piloto1 + " te saluda a lo lejos y se sube a su monoplaza color" + Verstappen.color + ".");
    alert("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    console.log("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    alert("Debes decidir:");
    console.log("Debes decidir:");

    alert("A - Sacar a " + Piloto1 + ", primero, con pista y aire limpio pero con el asfalto menos engomado.");
    alert("B - Sacar a " + Piloto1 + " despues del minuto 5, con más trafico pero con mayor adherencia.");

    let camino1 = prompt("Ingrese A - Para sacar al piloto primero. B - Para sacar al piloto despues del minuto 5.");
    if (camino1 == "A") {
        ; //CAMINO 1
        console.log("Salen primero.")
        alert("Fue una buena idea para esta parte clasificatoria, " + Verstappen.nombre + " consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        console.log("Fue una buena idea para esta parte clasificatoria, " + Verstappen.nombre + "consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        alert("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido);
        console.log("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido);
        q1 = 2;
    } else { //CAMINO 2
        console.log("Esperan unos minutos.")
        alert("A " + Piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + Verstappen.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + Verstappen.directorEscuderiaNombre + " en tu espalda varias veces.");
        console.log("A " + Piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + Verstappen.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + Verstappen.directorEscuderiaNombre + " en tu espalda varias veces.");
        q1 = 4;
    }

    alert("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    console.log("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    alert("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    console.log("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    alert("Para la Q3 se utilizaron neumaticos intermedios nuevos. Deseas continuar con esos o cambiar?");
    let camino3 = prompt("Ingrese A - Para continuar con neumaticos intermedios. B - Para cambiar a compuesto blando");
    if (camino3 == "A") {
        console.log("Optaste por seguir con neumaticos intermedios usados.");
        alert("A veces ir por lo seguro es una buena opción, " + Verstappen.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        console.log("A veces ir por lo seguro es una buena opción, " + Verstappen.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        alert("Ve a " + Piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        console.log("Ve a " + Piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        alert("P6 para " + Piloto1 + " y sus nervios afloran. " + Verstappen.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        console.log("P6 para " + Piloto1 + " y sus nervios afloran. " + Verstappen.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        q2 = 6;
    } else { //CAMINO 4
        console.log("Hora de ir por los blandos.");
        alert(Piloto1 + " va volando, siente que puede conseguir ese P1. " + Piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + Verstappen.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + Verstappen.nacionalidad + ".");
        console.log(Piloto1 + " va volando, siente que puede conseguir ese P1. " + Piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + Verstappen.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + Verstappen.nacionalidad + ".");
        alert("De fondo se escucha a un emocionado " + Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        console.log("De fondo se escucha a un emocionado " + Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        alert(Verstappen.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        console.log(Verstappen.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        q2 = 1;
    }

    alert("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    console.log("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    alert("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    console.log("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    alert(Verstappen.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    console.log(Verstappen.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    alert("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    console.log("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    alert(Verstappen.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    console.log(Verstappen.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    alert(Verstappen.apellido + " se siente confiado y dice que puede controlar el monoplaza " + Verstappen.color + " con los neumáticos full wet.");
    console.log(Verstappen.apellido + " se siente confiado y dice que puede controlar el monoplaza " + Verstappen.color + " con los neumáticos full wet.");
    alert("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    console.log("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    alert("Que deseas hacer?")

    let camino5 = prompt("A - Hacer caso al piloto y poner compuesto para mucha lluvia (full wet). B - Seguir tu instinto y utilizar neumáticos intermedios para lluvia (inter wet).");
    if (camino5 == "A") { //CAMINO 5
        console.log(Verstappen.nombre + "  entra a boxes y le colocan neumáticos full wet.");
        alert("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + Piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        console.log("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + Piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        alert("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + Piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        console.log("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + Piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        alert(Verstappen.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + Verstappen.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        console.log(Verstappen.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + Verstappen.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        q3 = 3;
    } else { //CAMINO 6
        console.log(Verstappen.nombre + "  entra a boxes y le colocan neumáticos inter wet.");
        alert(Verstappen.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        console.log(Verstappen.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        alert(Piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        console.log(Piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        alert("Con cuidado " + Verstappen.nombre + " llega al pit y todos los presentes festejan. " + Piloto2 + " no pudo superar el resultado. Mañana " + Verstappen.nombreEscuderia + " sale desde la primera línea.");
        console.log("Con cuidado " + Verstappen.nombre + " llega al pit y todos los presentes festejan. " + Piloto2 + " no pudo superar el resultado. Mañana " + Verstappen.nombreEscuderia + " sale desde la primera línea.");
        q3 = 1;
    }

    let final = finalPromedio(q1, q2, q3)

    if (final >= 3) { //BUENO
        alert(Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + Verstappen.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
        console.log(Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + Verstappen.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
    } else { //MALO
        alert("Sabes que estar trabajando para " + Verstappen.nombreEscuderia + " es una gran responsabilidad." + Verstappen.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
        console.log("Sabes que estar trabajando para " + Verstappen.nombreEscuderia + " es una gran responsabilidad." + Verstappen.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + Verstappen.directorEscuderiaNombre + " " + Verstappen.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
    }
}


