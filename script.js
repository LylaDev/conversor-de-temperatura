const temperatura = document.querySelector('input#temp');
const option = document.querySelector('select#options');
const res = document.querySelector('p#res');

function converter() {
    if (option.value === 'celsius') {
        res.innerHTML = `Temperatura convertida : ${
            (temperatura.value - 32) * 1.8
        }`;
    } else {
        res.innerHTML = `Temperatura convertida: ${
            temperatura.value * 1.8 + 32
        }`;
    }
}
