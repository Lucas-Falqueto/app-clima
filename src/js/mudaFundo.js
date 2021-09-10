const divImag = document.querySelector('.hero-image');

function horaAtual() {
    const data = new Date();
    let hora = data.getHours();
    return hora;
}


function mudaFundo() {
    let hora = horaAtual();

    if (hora >= 12 && hora < 18) return divImag.style.backgroundImage = 'url("./../src/img/tarde.jpg")';

    if (hora >= 18) return divImag.style.backgroundImage = 'url("./../src/img/desert.jpg")';

    if (hora >= 0 && hora < 12) return divImag.style.backgroundImage = 'url("./../src/img/manha.jpg")';
}


mudaFundo();


