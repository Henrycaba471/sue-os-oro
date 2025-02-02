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

            const datosLimpios = [...new Map(data.data.map(sorteo => [sorteo.slug, sorteo])).values()];

            const modificarSerie = (serie) => {
                switch (serie) {
                    case "ARI":
                        return "ARIES";
                    case "TAU":
                        return "TAURO";
                    case "GEM":
                        return "GEMINIS"
                    case "CAN":
                        return "CANCER";
                    case "LEO":
                        return "LEO";
                    case "VIR":
                        return "VIRGO"
                    case "LIB":
                        return "LIBRA";
                    case "ESC":
                        return "ESCORPIÓN";
                    case "SAG":
                        return "SAGITARIO"
                    case "CAP":
                        return "CAPRICORNIO";
                    case "ACU":
                        return "ACUARIO";
                    case "PIS":
                        return "PISCIS"
                    default:
                        return serie; // Si no hay coincidencia, devuelve la serie original
                }
            };
            const datosModificados = datosLimpios.map(sorteo => {
                if (sorteo.lottery === "ASTRO SOL" || sorteo.lottery === "ASTRO LUNA") {
                    return {
                        ...sorteo, // Copia todas las propiedades del sorteo
                        series: modificarSerie(sorteo.series) // Modifica la propiedad "series"
                    };
                }
                return sorteo; // Devuelve el sorteo sin modificar si no es "ASTRO SOL" o "ASTRO LUNA"
            });

            datosModificados.forEach((item) => {
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

                //Eliminar repetidos
                const datosLimpios = [...new Map(data.data.map(sorteo => [sorteo.slug, sorteo])).values()];

                const modificarSerie = (serie) => {
                    switch (serie) {
                        case "ARI":
                            return "ARIES";
                        case "TAU":
                            return "TAURO";
                        case "GEM":
                            return "GEMINIS"
                        case "CAN":
                            return "CANCER";
                        case "LEO":
                            return "LEO";
                        case "VIR":
                            return "VIRGO"
                        case "LIB":
                            return "LIBRA";
                        case "ESC":
                            return "ESCORPIÓN";
                        case "SAG":
                            return "SAGITARIO"
                        case "CAP":
                            return "CAPRICORNIO";
                        case "ACU":
                            return "ACUARIO";
                        case "PIS":
                            return "PISCIS"
                        default:
                            return serie; // Si no hay coincidencia, devuelve la serie original
                    }
                };
                const datosModificados = datosLimpios.map(sorteo => {
                    if (sorteo.lottery === "ASTRO SOL" || sorteo.lottery === "ASTRO LUNA") {
                        return {
                            ...sorteo, // Copia todas las propiedades del sorteo
                            series: modificarSerie(sorteo.series) // Modifica la propiedad "series"
                        };
                    }
                    return sorteo; // Devuelve el sorteo sin modificar si no es "ASTRO SOL" o "ASTRO LUNA"
                });

                datosModificados.forEach((item) => {
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