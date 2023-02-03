/*tratamento de entrada de numeros e não letras*/
document.querySelector('#inputShow').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});


/*entrada/deletar valores do input*/
function getValueButton(number) {
    console.log('teste', number);
    showScreenOnResult(number)
}

function showScreenOnResult(value) {
    const inputShow = document.querySelector('#inputShow')
    inputShow.value += value
}

function deleteResultOnScreen() {
    const inputShow = document.querySelector('#inputShow')
    inputShow.value = inputShow.value.slice(0, -1);
}