const next_step = (actual_container, element) => {
    if (actual_container == 'pendiente') {
        const task = element.parentElement.cloneNode(true) // Se clona la tarea actual
        const next = document.getElementById('cont-haciendo')

        const new_button = task.querySelector('span')
        new_button.onclick = () => next_step('haciendo', new_button) // Nuevo estado para el boton de la tarea

        next.appendChild(task)
        element.parentElement.remove()
    } else if (actual_container == 'haciendo') {
        const task = element.parentElement.cloneNode(true)
        const next = document.getElementById('cont-hecho')

        const new_button = task.querySelector('span')
        new_button.onclick = () => next_step('hecho', new_button)

        next.appendChild(task)
        element.parentElement.remove()
    } else element.parentElement.remove()
}

function system() {
    let input = document.getElementById('add');
    if (input.classList.contains('visible')) {
        input.classList.remove('visible');
        input = input.value
        if (input === "") {
            alert("No puede agregar tareas vacias")
            return -1
        }

        const container = document.getElementsByClassName('task')[0]
        const task = document.createElement('span');
        task.classList.add('new')

        const element = document.createElement('h4');
        element.classList.add('desc')
        element.innerText = input;
        task.appendChild(element)

        // Se agrega un icono de Google Icons
        const next = document.createElement('span')
        next.classList.add('material-symbols-outlined')
        next.classList.add('--clickable')
        next.innerText = 'arrow_forward_ios'
        next.onclick = () => next_step('pendiente', next) // Funcion anonima para que el onclick no se ejecute automaticamente
        task.appendChild(next)

        container.appendChild(task)
        return 0;
    } else input.classList.add('visible')
}