const paragraphResult = document.querySelector('.result-paragraph');
const inputShow = document.querySelector('#inputShow')

/*tratamento de entrada de numeros e não letras*/
document.querySelector('#inputShow').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

/*Função para calcular*/
function calcular() {

    const valores = inputShow.value.split(/(\+|\-|\*|\/)/);
    const valueOne = parseFloat(valores[0])
    const valueTwo= parseFloat(valores[2])
    const operator = valores[1]
   

    let result;

    switch (operator) {
        case '+':
          result = valueOne + valueTwo;
          break;
        case '-':
            result = valueOne - valueTwo;
          break;
        case '*':
            result = valueOne * valueTwo;
          break;
        case '/':
            result = valueOne / valueTwo;
          break;
        default:
          result = 'Operador inválido';
    }

    paragraphFormulaShowAndResult(valueOne, operator, valueTwo, result);

}

/*Função para pegar os valores escritos pelos botão*/
function getValueButton(value) {
    showScreenOnResult(value)
}
/*Função para mostrar valores na tela*/
function showScreenOnResult(value) {
    inputShow.value += value
}
/*Função para mostrar a "formula" no paragrafo e mostrar o resultado na tela*/
function paragraphFormulaShowAndResult(valueOne, operator, valueTwo, result) {
    paragraphResult.innerText = `${valueOne} ${operator} ${valueTwo}`
    inputShow.value = `${result}`
}

/*Função para resetar valores */
function deletaAllResultOnScreen() {
    inputShow.value = ""
    paragraphResult.innerText = ""
}
/*Função para deletar valores*/
function deleteResultOnScreen() {
    const inputShow = document.querySelector('#inputShow')
    inputShow.value = inputShow.value.slice(0, -1);
}

/*Função para tranformar resultado Negativo para Positivo*/
function transformValue(result) {
    result = Math.abs(result);
    console.log(result)
    inputShow.value = `${result}`
}
