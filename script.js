function adicionar(valor) {
    document.getElementById('display').value += valor;
}

function limpar() {
    document.getElementById('display').value = '';
}

function apagar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Erro';
    }
}
