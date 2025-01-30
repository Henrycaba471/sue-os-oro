document.addEventListener('DOMContentLoaded', () => {
    console.log('cargado');
    const todosResultados = document.querySelector('.todos-resultados');
    const URL = 'https://api-resultadosloterias.com/api/results';
    const URL_FECHA = 'https://api-resultadosloterias.com/api/results/';

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
            console.error('Error:', error);
        });

    const btnSearch = document.getElementById('buscar-results');
    btnSearch.addEventListener('click', () => {
        const fechaToSearch = document.getElementById('fecha');
        todosResultados.innerHTML = '';
        if (!fechaToSearch.value) {
            return alert('Seleccione una fecha para buscar');
        }
        console.log(fechaToSearch.value);

        fetch(`${URL_FECHA}${fechaToSearch.value}`)
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
    })
});