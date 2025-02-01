document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Formulas running');
    document.addEventListener('click', (e) => {
        if (e.target.matches('#ver-numeros-nacimiento')) {

            const fechaUser = document.getElementById('nacimiento');
            if (!fechaUser.value) {
                return alert('Por favor seleccione su fecha de nacimiento');
            }

            const parseFecha = fechaUser.value.slice(2).split('-').reverse().join('-').split('').filter(item => item !== '-');
            //console.log(parseFecha)

            //primeros 4
            let r1 = parseInt(parseFecha[0]) + parseInt(parseFecha[2]);
            let r2 = parseInt(parseFecha[0]) + parseInt(parseFecha[3]);
            let r3 = parseInt(parseFecha[0]) + parseInt(parseFecha[4]);
            let r4 = parseInt(parseFecha[0]) + parseInt(parseFecha[5]);
            //segundos 4
            let r5 = parseInt(parseFecha[1]) + parseInt(parseFecha[2]);
            let r6 = parseInt(parseFecha[1]) + parseInt(parseFecha[3]);
            let r7 = parseInt(parseFecha[1]) + parseInt(parseFecha[4]);
            let r8 = parseInt(parseFecha[1]) + parseInt(parseFecha[5]);

            let numbersR = [r1, r2, r3, r4, r5, r6, r7, r8];

            numbersR = numbersR.map(r => {
                if (r >= 10) {
                    let reduce = String(r).split('');
                    r = Number(reduce[0]) + Number(reduce[1]);
                }
                return r;
            });

            console.log(numbersR);
            document.querySelector('.position-r1').textContent = numbersR[0];
            document.querySelector('.position-r2').textContent = numbersR[2];
            document.querySelector('.position-r3').textContent = numbersR[1];
            document.querySelector('.position-r4').textContent = numbersR[3];
            document.querySelector('.position-r6').textContent = numbersR[4];
            document.querySelector('.position-r7').textContent = numbersR[6];
            document.querySelector('.position-r8').textContent = numbersR[5];
            document.querySelector('.position-r9').textContent = numbersR[7];

            function generarCombinacionAleatoria(arreglo) {
                // Selecciona 4 números aleatorios del arreglo
                const combinacion = [];
                const copiaArreglo = [...arreglo]; // Copia el arreglo para no modificar el original

                for (let i = 0; i < 4; i++) {
                    const indiceAleatorio = Math.floor(Math.random() * copiaArreglo.length);
                    combinacion.push(copiaArreglo.splice(indiceAleatorio, 1)[0]);
                }

                return combinacion.join('');
            }

            const numeroSistema = [];
            for (let i = 0; i <= 5; i++) {
                numeroSistema.push(generarCombinacionAleatoria(numbersR));
            }
            console.log(numeroSistema);
            document.querySelector('.numbers').innerHTML = `<h3>Tus números para ganar son:</h3>
                                                            <ul>
                                                                <li>${numeroSistema[0]}</li>
                                                                <li>${numeroSistema[1]}</li>
                                                                <li>${numeroSistema[2]}</li>
                                                                <li>${numeroSistema[3]}</li>
                                                                <li>${numeroSistema[4]}</li>
                                                            </ul>`
        }
    });
});