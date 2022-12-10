
const carouselExperience = document.querySelector(".carousel-experience")
let timerCarousel: any
const secondsTimerCarousel = 10000

// inicia carousel
export function initCarousel() {
    const btnPrev = document.querySelector(".experience-container-prev")
    const btnNext = document.querySelector(".experience-container-next")
    btnNext?.addEventListener("click", carouselNext)
    btnPrev?.addEventListener("click", carouselPrev)

    const cardCarouselExperience = document.querySelectorAll<Element>(".carousel-experience-card")

    cardCarouselExperience.forEach(card => {
        card.addEventListener('click', resetTimerCarousel)
        for (let i = 0; i < card.children.length; i++) {
            card.children[i].addEventListener('click', resetTimerCarousel)
            card.children[i].addEventListener('scroll', resetTimerCarousel)
        }
    })
    setTimeout(() => carouselNext(), secondsTimerCarousel)
}

export function carouselNext() {
    clearTimeout(timerCarousel)
    const cards = document.querySelectorAll(".carousel-experience-card")
    const firstCard = cards[0]
    carouselExperience?.insertAdjacentElement('beforeend', firstCard)
    timerCarousel = setTimeout(() => carouselNext(), secondsTimerCarousel)
}

export function carouselPrev() {
    clearTimeout(timerCarousel)
    const cards = document.querySelectorAll(".carousel-experience-card")
    const lastCard = cards[cards.length - 1]

    carouselExperience?.insertAdjacentElement('afterbegin', lastCard)
    timerCarousel = setTimeout(() => carouselNext(), secondsTimerCarousel)
}


function resetTimerCarousel() {
    clearTimeout(timerCarousel)
    timerCarousel = setTimeout(() => carouselNext(), 10000)
}

