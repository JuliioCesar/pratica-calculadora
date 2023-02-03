import { changeLayoutToDark } from './layout-dark.js'

const buttonSwitchLayout = document.querySelector("input")
const iconBlackLayout = "image/icone-black.svg"
const iconLightlayout = "image/icone-light.svg"

buttonSwitchLayout.addEventListener('click', () => {
    let buttonSrc = buttonSwitchLayout.getAttribute('src')
    if (buttonSrc === iconBlackLayout) {
        buttonSwitchLayout.setAttribute('src', iconLightlayout)
        changeLayoutToDark()
    } else {
        buttonSwitchLayout.setAttribute('src', iconBlackLayout)
        changeLayoutToDark()
    }
})
