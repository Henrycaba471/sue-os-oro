document.addEventListener('DOMContentLoaded', () => {
    console.log('cargado');
    const todosResultados = document.querySelector('.todos-resultados');
    const URL = 'https://api-resultadosloterias.com/api/results';

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud falló');
            }
            return response.json();
        })
        .then(data => {
            //console.log('Datos recibidos:', data.data);
            data.data.forEach((item) => {
                todosResultados.innerHTML += `<section class="resultado-loteria">
                <div class="loteria-name"><h3>${item.lottery}</h3></div>
                <div class="resultado"><h2>${item.result}</h2></div>
                <div class="fecha">${item.date}</div>
            </section>`;
            })
        })
        .catch(error => {
            console.error('Error:', error); // Manejar errores de red o de la API
        });
});