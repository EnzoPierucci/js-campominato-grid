document.addEventListener('DOMContentLoaded', function () {
    const grigliaDiv = document.getElementById('griglia');
    const buttonGenera = document.getElementById('generaGriglia');

    generaGriglia();

    buttonGenera.addEventListener('click', function () {
        const difficoltaSelect = document.getElementById('difficolta');
        const difficolta = difficoltaSelect.value;

        generaNumeri(difficolta);
    });
});

function generaGriglia() {
    const grigliaDiv = document.getElementById('griglia');
    grigliaDiv.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const cella = document.createElement('div');
        cella.className = 'cella';
        grigliaDiv.appendChild(cella);
    }
}

function generaNumeri(difficolta) {
    const grigliaDiv = document.getElementById('griglia');
    const celle = grigliaDiv.querySelectorAll('.cella');
    let numCaselle;

    if (difficolta === 'Facile') {
        numCaselle = 100;
    } else if (difficolta === 'Medio') {
        numCaselle = 81;
    } else {
        numCaselle = 49;
    }

    for (let i = 0; i < numCaselle; i++) {
        celle[i].textContent = i + 1;
        celle[i].addEventListener('click', () => handleClick(i + 1));
    }
}

function handleClick(numeroCella) {
    console.log("Hai cliccato sulla cella:", numeroCella);
    const cellaCliccata = document.querySelector(`.cella:nth-child(${numeroCella})`);
    cellaCliccata.classList.add('clicked');
}

