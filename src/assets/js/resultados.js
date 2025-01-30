document.addEventListener('DOMContentLoaded', () => {
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
            todosResultados.innerHTML = '';
            data.data.sort((a, b) => {
                if (a.lottery < b.lottery) return -1; // a viene antes que b
                if (a.lottery > b.lottery) return 1;  // b viene antes que a
                return 0; // son iguales
            });

            data.data.forEach((item) => {
                let contenido = `
                    <section class="resultado-loteria">
                        <div class="loteria-name"><h3>${item.lottery}</h3></div>
                        <div class="resultado"><h2>${item.result}</h2></div>`;

                if (item.series !== '000' && item.series !== '') {
                    contenido += `<div><span>${item.series}</span></div>`;
                } else {
                    contenido += `<div><span>---</span></div>`;
                }

                contenido += `
                        <div class="fecha">${item.date}</div>
                    </section>`;

                todosResultados.innerHTML += contenido;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

    const btnSearch = document.getElementById('buscar-results');
    btnSearch.addEventListener('click', () => {
        const fechaActual = new Date();
        const fechaToSearch = document.getElementById('fecha');
        let fechaBuscar = new Date(fechaToSearch.value);

        if (!fechaToSearch.value) {
            return alert('Seleccione una fecha para buscar');
        }

        if (fechaBuscar > fechaActual) {
            todosResultados.innerHTML = '';
            return todosResultados.innerHTML = '<div><h1 style="color: #444;">Resultados no disponibles para fechas futuras.</h1></div>'
        }
        //console.log(fechaToSearch.value);

        fetch(`${URL_FECHA}${fechaToSearch.value}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud falló');
                }
                return response.json();
            })
            .then(data => {
                todosResultados.innerHTML = '';

                data.data.sort((a, b) => {
                    if (a.lottery < b.lottery) return -1; // a viene antes que b
                    if (a.lottery > b.lottery) return 1;  // b viene antes que a
                    return 0; // son iguales
                });
                data.data.forEach((item) => {
                    let contenido = `
                        <section class="resultado-loteria">
                            <div class="loteria-name"><h3>${item.lottery}</h3></div>
                            <div class="resultado"><h2>${item.result}</h2></div>`;
                    if (item.series !== '000' && item.series !== '') {
                        contenido += `<div><span>${item.series}</span></div>`;
                    } else {
                        contenido += `<div><span>---</span></div>`;
                    }
                    contenido += `
                            <div class="fecha">${item.date}</div>
                        </section>`;
                    todosResultados.innerHTML += contenido;
                });
            })
            .catch(error => {
                console.error('Error:', error); // Manejar errores de red o de la API
            });
    });
});