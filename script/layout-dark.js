export function changeLayoutToDark() {

    document.querySelector('.main-container').classList.toggle('main-container-dark')

    document.querySelector('.calc-number-container').classList.toggle('calc-number-container-dark')

    document.body.classList.toggle('body-dark')
    document.querySelector('.table-container').classList.toggle('table-container-dark')

    document.querySelector('.calc-container').classList.toggle('calc-container-dark')
    
}   