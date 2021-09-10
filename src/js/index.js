const imgBackground = document.querySelector('.hero-image');
const inputText = document.querySelector('.input-cidade')
const btnPesquisa = document.querySelector('.btn-pesquisa');
const resultado = document.querySelector('.clima')


const api = {
    url: 'https://api.openweathermap.org/data/2.5/',
    key: '240f50114084569290b7bbea0b82fdd9'
}


function diaSemana() {
    const data = new Date();

    let dia = data.getUTCDay();

    const semana = ['Domingo', 'Segunda - Feira', 'Terça - Feira', 'Quarta - Feira', 'Quinta - Feira', 'Sexta - Feira', 'Sábado'];

    for (let i = 0; i < semana.length; i++) {
        if (semana.indexOf(semana[i]) === dia) {
            return semana[i];
        }
    }
}

function mostraClima(clima) {
    resultado.innerHTML = `
    <h1>${clima.name}, ${clima.sys.country}</h1>
    <p>${diaSemana()}, Temperatura Min ${clima.main.temp_min}Cº, Temperatura Max ${clima.main.temp_max}Cº</p></br>
    <p>Humidade: ${clima.main.humidity}%</p>
    `
}

function dadosClima() {
    if (inputText.value === '' || Number(inputText.value)) {
        alert('Por favor insira o nome de uma cidade');
        inputText.value = '';
        return;
    }

    fetch(`${api.url}weather?q=${inputText.value}&lang=pt-BR&units=metric&appid=${api.key}`)
        .then(weather => {
            if (weather.status === 400) {
                throw new Error("Bad response from server");
            }
            return weather.json()

        }).then(mostraClima);

}

btnPesquisa.addEventListener('click', () => {
    dadosClima();
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        dadosClima();
    }
})
