document.addEventListener("DOMContentLoaded", () => {
    console.log('Running');
    const generarColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    const chances = document.querySelector('.chances');
    const loteria = document.querySelector('.loteria');
    const dobleChance = document.querySelector('.cuatro-cifras');
    const dobleChanceT = document.querySelector('.tres-cifras');
    const astroSL = document.querySelector('.astro-dos');
    const miloto = document.querySelector('.miloto');
    const baloto = document.querySelector('.baloto');
    const tripletazo = document.querySelector('.tripletazo');
    const schance = document.querySelector('.schance');

    const dataSorteos = document.querySelectorAll('.data-sorteos');
    const sorteos = document.querySelectorAll('.sorteos');

    const deleteBorders = (excludedElement) => {
        sorteos.forEach((el) => {
            if (el !== excludedElement) {
                el.classList.remove('see-borders');
            }
        });
    }
    const deleteClass = (excludedElement) => {
        dataSorteos.forEach((el) => {
            if (el !== excludedElement) {
                el.classList.remove('see-data');
            }
        });
    };

    chances.addEventListener('click', (e) => {
        chances.classList.toggle('see-borders');
        const dataSorteoChance = document.querySelector('.data-sorteo-chance');
        dataSorteoChance.classList.toggle('see-data');
        deleteClass(dataSorteoChance);
        deleteBorders(chances);
    });

    loteria.addEventListener('click', (e) => {
        loteria.classList.toggle('see-borders');
        const dataSorteoLoteria = document.querySelector('.data-sorteo-loteria');
        dataSorteoLoteria.classList.toggle('see-data');
        deleteClass(dataSorteoLoteria);
        deleteBorders(loteria);
    });

    dobleChance.addEventListener('click', (e) => {
        dobleChance.classList.toggle('see-borders');
        const dataSorteoDobleC = document.querySelector('.data-sorteo-4c');
        dataSorteoDobleC.classList.toggle('see-data');
        deleteClass(dataSorteoDobleC);
        deleteBorders(dobleChance);
    });

    dobleChanceT.addEventListener('click', (e) => {
        dobleChanceT.classList.toggle('see-borders');
        const dataSorteoDobleC = document.querySelector('.data-sorteo-3c');
        dataSorteoDobleC.classList.toggle('see-data');
        deleteClass(dataSorteoDobleC);
        deleteBorders(dobleChanceT);
    });

    astroSL.addEventListener('click', (e) => {
        astroSL.classList.toggle('see-borders');
        const dataSorteoAstro = document.querySelector('.data-sorteo-astro');
        dataSorteoAstro.classList.toggle('see-data');
        deleteClass(dataSorteoAstro);
        deleteBorders(astroSL);
    });
    miloto.addEventListener('click', (e) => {
        miloto.classList.toggle('see-borders');
        const dataSorteoMilo = document.querySelector('.data-sorteo-miloto');
        dataSorteoMilo.classList.toggle('see-data');
        deleteClass(dataSorteoMilo);
        deleteBorders(miloto);
    });
    baloto.addEventListener('click', (e) => {
        baloto.classList.toggle('see-borders');
        const dataSorteoBal = document.querySelector('.data-sorteo-baloto');
        dataSorteoBal.classList.toggle('see-data');
        deleteClass(dataSorteoBal);
        deleteBorders(baloto);
    });
    tripletazo.addEventListener('click', (e) => {
        tripletazo.classList.toggle('see-borders');
        const dataSorteoTri = document.querySelector('.data-sorteo-tripletazo');
        dataSorteoTri.classList.toggle('see-data');
        deleteClass(dataSorteoTri);
        deleteBorders(tripletazo);
    });
    schance.addEventListener('click', (e) => {
        schance.classList.toggle('see-borders');
        const dataSorteoSc = document.querySelector('.data-sorteo-schance');
        dataSorteoSc.classList.toggle('see-data');
        deleteClass(dataSorteoSc);
        deleteBorders(schance);
    });

    const verNumero = document.querySelector('.ver-numero');
    verNumero.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.number-play');
        let luckNumber = Math.round(Math.random() * 9999);
        luckNumber = luckNumber.toString().padStart(4, '0').split('');
        writeLuckNumber.innerHTML = '';
        writeLuckNumber.innerHTML = `<h4>Tú numero es:</h4>`
        luckNumber.forEach(el => {
            writeLuckNumber.innerHTML += `
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${el}</span>
                                                </article>
                                            </section>`
        });
    });

    const verNumeroLoteria = document.querySelector('.ver-numero-loteria');
    verNumeroLoteria.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.loteria-serie');
        let luckNumber = Math.round(Math.random() * 9999);
        luckNumber = luckNumber.toString().padStart(4, '0').split('');
        let luckNumberSerie = Math.round(Math.random() * 999);
        luckNumberSerie = luckNumberSerie.toString().padStart(3, '0').split('');
        writeLuckNumber.innerHTML = '';
        writeLuckNumber.innerHTML = `<h4>Tú numero es:</h4>`
        luckNumber.forEach(el => {
            writeLuckNumber.innerHTML += `
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${el}</span>
                                                </article>
                                            </section>`
        });
        writeLuckNumber.innerHTML += '<h1> - </h1>'
        luckNumberSerie.forEach(el => {
            writeLuckNumber.innerHTML += `
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${el}</span>
                                                </article>
                                            </section>`
        });
    });

    const verNumerosDC = document.querySelector('.ver-numero-dc');
    verNumerosDC.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.doble-chance');
        writeLuckNumber.innerHTML = '';
        writeLuckNumber.innerHTML = `<h4>Tus números son:</h4>`

        for (let index = 1; index < 6; index++) {
            let luckNumber = Math.round(Math.random() * 9999);
            luckNumber = luckNumber.toString().padStart(4, '0').split('');
            writeLuckNumber.innerHTML += `<div class="numero-detalles-dc">
            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${luckNumber[0]}</span>
                                                </article>
                                            </section>
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${luckNumber[1]}</span>
                                                </article>
                                            </section>
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${luckNumber[3]}</span>
                                                </article>
                                            </section>
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${luckNumber[2]}</span>
                                                </article>
                                            </section></div>`
        }
    });

    const verNumerosDCT = document.querySelector('.ver-numero-dct');
    verNumerosDCT.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.doble-chance-tres');
        writeLuckNumber.innerHTML = '';
        writeLuckNumber.innerHTML = `<h4>Tus números son:</h4>`

        for (let index = 1; index < 6; index++) {
            let luckNumber = Math.round(Math.random() * 999);
            luckNumber = luckNumber.toString().padStart(3, '0').split('');
            writeLuckNumber.innerHTML += `<div class="numero-detalles-dc">
            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${luckNumber[0]}</span>
                                                </article>
                                            </section>
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${luckNumber[1]}</span>
                                                </article>
                                            </section>
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${luckNumber[2]}</span>
                                                </article>
                                            </section>
                                            </div>`
        }
    });

    const verNumerosAstro = document.querySelector('.ver-numero-astro');
    verNumerosAstro.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.astro');
        writeLuckNumber.innerHTML = '';
        let luckNumber = Math.round(Math.random() * 9999);
        luckNumber = luckNumber.toString().padStart(4, '0').split('');
        const signos = ['aries', 'tauro', 'géminis', 'cancer', 'leo', 'virgo', 'libra', 'escorpión', 'sagitario', 'capricornio', 'acuario', 'piscis'];
        let luckSigno = signos[Math.floor(Math.random() * signos.length)];
        writeLuckNumber.innerHTML = `<h4>Tus número y signo son:</h4>`
        luckNumber.forEach(el => {
            writeLuckNumber.innerHTML += `
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${el}</span>
                                                </article>
                                            </section>`
        });
        writeLuckNumber.innerHTML += '<h1> - </h1>'

        writeLuckNumber.innerHTML += `
                                        <section class="signo-astro" style="background: ${generarColor()};">
                                            <article class="border-signo" style="background: ${generarColor()};">
                                                <span class="signo-luck">${luckSigno}</span>
                                            </article>
                                        </section>`
    });

    const verNumeroMilo = document.querySelector('.ver-numero-miloto');
    verNumeroMilo.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.miloto-number');
        const miloNumber = [];

        for (let i = 0; i < 5; i++) {
            let balota;
            do {
                balota = Math.ceil(Math.random() * 39);
            } while (miloNumber.includes(balota));
            miloNumber.push(balota);
        }
        writeLuckNumber.innerHTML = '';
        writeLuckNumber.innerHTML = `<h4>Tú numero para Miloto es:</h4>`
        miloNumber.forEach(el => {
            writeLuckNumber.innerHTML += `
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number number-milo">${el}</span>
                                                </article>
                                            </section>`
        });
    });

    const verNumerobaloto = document.querySelector('.ver-numero-baloto');
    verNumerobaloto.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.baloto-number');
        const miloNumber = [];

        for (let i = 0; i < 5; i++) {
            let balota;
            do {
                balota = Math.ceil(Math.random() * 43);
            } while (miloNumber.includes(balota));
            miloNumber.push(balota);
        }
        writeLuckNumber.innerHTML = '';
        writeLuckNumber.innerHTML = `<h4>Tú numero para Baloto es:</h4>`
        miloNumber.forEach(el => {
            writeLuckNumber.innerHTML += `
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number number-milo">${el}</span>
                                                </article>
                                            </section>`
        });
        writeLuckNumber.innerHTML += `      <h1> - </h1>
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: red;">
                                                    <span class="number number-milo">${Math.ceil(Math.random() * 16)}</span>
                                                </article>
                                            </section>`
    });

    const verNumerotriple = document.querySelector('.ver-numero-tripletazo');
    verNumerotriple.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.tripletazo-number');
        function generarNumero() {
            return String(Math.floor(Math.random() * 100)).padStart(2, '0');
        }
        writeLuckNumber.innerHTML = '';
        writeLuckNumber.innerHTML = `<h4>Tú numero para Tripletazo  es:</h4>`
        writeLuckNumber.innerHTML += `<section class="balota" style="background: ${generarColor()};">
                                            <article class="border-balota" style="background: ${generarColor()};">
                                                <span class="number number-milo">${generarNumero()}</span>
                                            </article>
                                        </section><section class="balota" style="background: ${generarColor()};">
                                            <article class="border-balota" style="background: ${generarColor()};">
                                                <span class="number number-milo">${generarNumero()}</span>
                                            </article>
                                        </section><section class="balota" style="background: ${generarColor()};">
                                            <article class="border-balota" style="background: ${generarColor()};">
                                                <span class="number number-milo">${generarNumero()}</span>
                                            </article>
                                        </section>`
    });

    const verNumerosSc = document.querySelector('.ver-numero-schance');
    verNumerosSc.addEventListener('click', () => {
        const writeLuckNumber = document.querySelector('.schance-number');
        writeLuckNumber.innerHTML = '';
        let luckNumber = Math.round(Math.random() * 9999);
        luckNumber = luckNumber.toString().padStart(4, '0').split('');

        writeLuckNumber.innerHTML = `<h4>Tu número es:</h4>`
        luckNumber.forEach(el => {
            writeLuckNumber.innerHTML += `
                                            <section class="balota" style="background: ${generarColor()};">
                                                <article class="border-balota" style="background: ${generarColor()};">
                                                    <span class="number">${el}</span>
                                                </article>
                                            </section>`
        });
        writeLuckNumber.innerHTML += '<h1> - </h1>'

        writeLuckNumber.innerHTML += `
                                        <section class="balota" style="background: ${generarColor()};">
                                            <article class="border-balota" style="background: ${generarColor()};">
                                                <span class="number">${Math.round(Math.random() * 9)}</span>
                                            </article>
                                        </section>`
    });
});