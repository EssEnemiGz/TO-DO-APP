function main(){
    // Interaccion con el DOM
    const input = document.getElementById('add');

    if (input.classList.contains('visible')){ // Devuelve un booleano, de si tiene la clase o no
        input.classList.remove('visible'); // Remueve la clase, en caso de tenerla

        const main_container = document.getElementById('sin-empezar');
        const task = document.createElement('div');
        task.classList.add('task');

        const desc = document.createElement('p');
        desc.classList.add('desc');
        desc.innerText = input.value;

        task.appendChild(desc)
        main_container.insertBefore(task, input)
    } else { // Si es false, agrega la clase
        input.classList.add('visible') 
    }
}