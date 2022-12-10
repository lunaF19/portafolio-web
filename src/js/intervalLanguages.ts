import { languages } from "./data";


const languagesIntervalSeconds = 3000

export function initIntervalLanguages() {
    createElementsLanguages()
}


function createElementsLanguages() {
    const laguageElement = document.querySelector("#languages")

    for (const language of languages) {
        const spanLanguage = document.createElement('span')
        spanLanguage.classList.add("language-item")
        spanLanguage.innerHTML = `${language}`
        spanLanguage.classList.add("top")
        laguageElement?.appendChild(spanLanguage)
    }

    const languagesElements:NodeListOf<Element> = document.querySelectorAll(".language-item")

    const language0:Element = languagesElements[0]
    const language1:Element = languagesElements[1]
    const languageLast:Element = languagesElements[languagesElements.length-1]

    language0.classList.add("show")
    language0.classList.remove("top")
    language1.classList.add("top")
    language1.classList.add("top")

    languageLast.classList.add("bottom")
    setTimeout(() => intervalLanguaes(0), languagesIntervalSeconds)
}

function intervalLanguaes(num:number) {

    const languagesElements:NodeListOf<Element> = document.querySelectorAll(".language-item")
    const totalLanguagesElements = languagesElements.length

    const clearItem = (elementHTML:Element) => {
        elementHTML.classList.remove("show")
        elementHTML.classList.remove("top")
        elementHTML.classList.remove("bottom")
    }

    let num2:number = 0
    if (num >= totalLanguagesElements - 1) {
        clearItem(languagesElements[totalLanguagesElements - 1])
        languagesElements[totalLanguagesElements - 1].classList.add("bottom")

        clearItem(languagesElements[0])
        languagesElements[0].classList.add("show")

        clearItem(languagesElements[1])
        languagesElements[1].classList.add("top")
        num2 = 0

    } else if (num === 0) {
        clearItem(languagesElements[0])
        languagesElements[0].classList.add("bottom")

        clearItem(languagesElements[1])
        languagesElements[1].classList.add("show")

        clearItem(languagesElements[totalLanguagesElements - 1])
        languagesElements[totalLanguagesElements - 1].classList.add("top")
        num2 = 1

    } else {
        // El elemento mostrado pasa a estar abajo
        clearItem(languagesElements[num])
        languagesElements[num].classList.add("bottom")

        // Elemento de arriba debe pasar a ser mostrado
        clearItem(languagesElements[num + 1])
        languagesElements[num + 1].classList.add("show")

        // Elemento de abajo pasa arriba
        clearItem(languagesElements[num - 1])
        languagesElements[num - 1].classList.add("top")
        num2 = num + 1
    }

    setTimeout(() => intervalLanguaes(num2), languagesIntervalSeconds)
}