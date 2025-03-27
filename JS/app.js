// Función para obtener los datos 
function obtenerDatos() {
    let nombre = prompt("Ingresa tu nombre:");
    let edad = prompt("Ingresa tu edad:");
    let genero = prompt("¿Eres niña o niño? (escribe 'niña' o 'niño')").toLowerCase();
    let lugar = prompt("Ingresa un lugar (la ciudad, el bosque, un castillo, etc.):");
    let objetoMagico = prompt("Ingresa un objeto mágico (espada, amuleto, libro encantado, etc.):");
    let generoObjeto = prompt(`Tu objeto es "un misterioso ${objetoMagico}" o "una misteriosa ${objetoMagico}"? (escribe "un" o "una")`).toLowerCase();

    return { nombre, edad, genero, lugar, objetoMagico, generoObjeto };
}

function crearHistoria(datos) {
    let introduccion, conflicto, finales;

    // Ajustar la historia según el género
    if (datos.genero === "niña") {
        introduccion = `En una tierra lejana, ${datos.nombre}, una valiente aventurera de ${datos.edad} años, paseaba por ${datos.lugar}.`;
        finales = [
            "Decidió usarlo para ayudar a su pueblo y se convirtió en una heroína.",
            "El objeto era demasiado poderoso y terminó perdiéndose en su magia.",
            "Vendió el objeto por una fortuna y vivió el resto de su vida como una reina."
        ];
    } else { 
        introduccion = `En una tierra lejana, ${datos.nombre}, un valiente aventurero de ${datos.edad} años, paseaba por ${datos.lugar}.`;
        finales = [
            "Decidió usarlo para ayudar a su pueblo y se convirtió en un héroe.",
            "El objeto era demasiado poderoso y terminó perdiéndose en su magia.",
            "Vendió el objeto por una fortuna y vivió el resto de su vida como un rey."
        ];
    }

    // Ajustar redacción según objeto mágico 
    if (datos.generoObjeto === "una") {
        conflicto = `Un día, mientras exploraba, encontró una misteriosa ${datos.objetoMagico} que contenía un gran poder.`;
    } else { 
        conflicto = `Un día, mientras exploraba, encontró un misterioso ${datos.objetoMagico} que contenía un gran poder.`;
    }

    // Para elegir el final
    let mensajeFinales = "Elige cómo termina tu historia:\n" +
                        "1. " + finales[0] + "\n" +
                        "2. " + finales[1] + "\n" +
                        "3. " + finales[2] + "\n" +
                        "Escribe el número del final que prefieres (1, 2 o 3):";
    let eleccion = parseInt(prompt(mensajeFinales));

    let desenlace;
    if (eleccion >= 1 && eleccion <= 3) {
        desenlace = finales[eleccion - 1]; // -1 porque el array empieza en 0
    } else {
        alert("Elección inválida. Se elegirá el primer final por defecto.");
        desenlace = finales[0]; 
    }

    let historia = `${introduccion} ${conflicto} ${desenlace}`;

    alert("Aquí está tu historia:\n\n" + historia);
    console.log("Tu historia:\n" + historia);
}

function jugar() {
    let datosUsuario = obtenerDatos();
    crearHistoria(datosUsuario); 
}

jugar();