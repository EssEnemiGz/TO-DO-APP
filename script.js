function main(){
    // Interaccion con el DOM
    const input = document.getElementById('add');

    if (input.classList.contains('visible')){ // Devuelve un booleano, de si tiene la clase o no
        input.classList.remove('visible'); // Remueve la clase, en caso de tenerla

        const main_container = document.getElementById('sin-empezar'); // document tiene el metodo getElementById, que selecciona el elemento con el id especificado
        const task = document.createElement('div'); // createElement es usado para crear etiquetas desde JS
        task.classList.add('task'); // ClassList es una lista como cualquier otra practicamente, por lo que tiene metodos similares, mas no iguales.

        const desc = document.createElement('p'); 
        desc.classList.add('desc');
        desc.innerText = input.value; // Esta logica es simplemente para que el innerText o texto visible de una etiqueta sea igual a lo que hayan escrito en un input

        task.appendChild(desc) // Agregue el p al div 
        main_container.insertBefore(task, input) // Agrega el div arriba del input, el primer argumento de insertBefore es el elemento a agregar y el segundo el elemento que va a quedar abajo
    } else { // Si es false, agrega la clase
        input.classList.add('visible') 
    }
}

const system = () => { // Arrow function o Funciones de flecha
    const input = document.getElementById('add').value;

    const container = document.getElementsByClassName('task')[0]
    const element = document.createElement('p');
    element.innerText = input;

    container.appendChild(element)
    return 0;
}

function system2(){
    const input = document.getElementById('add').value;

    const container = document.getElementsByClassName('task')[0]
    const element = document.createElement('p');
    element.innerText = input;

    container.appendChild(element)
    return 0;
}

() => { // Funcion lambda o anonima
    console.log(1)
}

let suma = (num1, num2) => {
    num1 = 30
    return num1 + num2
}

// Pass by reference
let y, z;
y = 10;
z = 20;

const x = suma;
console.log(x(y, z))

suma = (num1, num2) => {
    return num1 + num2
}
console.log(x(y, z))