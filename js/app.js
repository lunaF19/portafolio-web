const $ = function (a, all = false) { return !all ? document.querySelector(a) : document.querySelectorAll(a) }

const observerHTML = new IntersectionObserver((entries, observer) => {
    entries.forEach(entrie => {
        if (entrie.isIntersecting) {
            const id = entrie.target.id
            window.location.hash = `#${id}`;
        }
    })
}, {
    root: document,
    threshold: .5,
    rootMargin: '0px 0px 20% 0px'
})

// NavBar
const navbar = $("#navbar")
const navbarBtn = $("#navbar-btn")
const divLinks = $("#div-links")
const logoNavbar = $("#navbar-log")

const sections = document.querySelectorAll('section')
sections.forEach(section => { observerHTML.observe(section) })

// 
const socialNets = $("#social-nets")

// footer
const footerVitaeDowload = $("#footer-vitae-dowload")
const dowloadPdfLink = $("#dowload-pdf-link")

// carrousell
const btnPrev = $(".experience-container-prev")
const btnNext = $(".experience-container-next")
const carouselExperience = $(".carousel-experience")
const cardCarouselExperience = $(".carousel-experience-card", true)
let timerCarousel
const secondsTimerCarousel = 5000
carouselNext()

btnNext.addEventListener("click", carouselNext)
btnPrev.addEventListener("click", carouselPrev)


for ( let card of cardCarouselExperience) {
    card.addEventListener('click', resetTimerCarousel)
    for (let childCard of card.children) {
        childCard.addEventListener('click', resetTimerCarousel)
        childCard.addEventListener('scroll', resetTimerCarousel)
    }
}

function resetTimerCarousel() {
    clearTimeout(timerCarousel)
    timerCarousel = setTimeout(()=>carouselNext(), 10000 )
}

document.addEventListener('DOMContentLoaded', function (e) {
    intervalLanguaes(1)

    const disableShowNavbar = linkElement => {
        linkElement.addEventListener('click', function (e) {
            navbar.classList.remove('full')
            socialNets.classList.remove('center')
        })
    }
    forEachLinks(disableShowNavbar)
})

document.addEventListener('scroll', function (e) {
    navbar.classList.remove('full')
    socialNets.classList.remove('center')

    const navbarVisible = (($("#whois").getBoundingClientRect().top) <= 0)
    navbar.classList.toggle('scroll', navbarVisible)
    navbarBtn.classList.toggle('active', navbarVisible)
    socialNets.classList.toggle('scroll', navbarVisible)

})

window.addEventListener('hashchange', function () { activeLink() });

navbarBtn.addEventListener('click', function (e) {
    navbar.classList.toggle('full')
    socialNets.classList.toggle('center')
    socialNets.classList.remove('full')

})

footerVitaeDowload.addEventListener('click', function () { dowloadPdfLink.click() })


function carouselNext() {
    clearTimeout(timerCarousel)
    const firstCard = $(".carousel-experience-card", true)[0]
    carouselExperience.insertAdjacentElement('beforeend', firstCard)

    timerCarousel = setTimeout(()=>carouselNext(), secondsTimerCarousel )
}

function carouselPrev() {
    clearTimeout(timerCarousel)
    const card = $(".carousel-experience-card", true)
    const lastCard = card[card.length - 1]
    carouselExperience.insertAdjacentElement('afterbegin', lastCard)
    timerCarousel = setTimeout(()=>carouselNext(), secondsTimerCarousel )
}

// setInterval(() => carouselNext(), 5000)

function intervalLanguaes(num) {
    const laguageElement = $("#language")
    const languages = ["BackEnd", "Express JS", "Oracle Pl/SQL", "FrontEnd", "React JS",]
    if (num > languages.length) num = 1
    if (num < 1) num = 1
    const spanLanguage = document.createElement('span')
    spanLanguage.innerHTML = `${languages[num - 1]}`

    for (const child of laguageElement.childNodes) {
        laguageElement.removeChild(child)

    }
    laguageElement.appendChild(spanLanguage)
    //     = ` ${languages[num - 1]}`

    setTimeout(() => {
        intervalLanguaes(num + 1)
    }, 3000)

}

function manageNavBar() {
    const hasLink = window.location.hash
    const navbarActive = ["#whois", "#experience", "#contact"].includes(hasLink)
    navbar.classList.toggle('scroll', navbarActive)
    socialNets.classList.toggle('scroll', navbarActive)
    navbarBtn.classList.toggle('active', navbarActive)
}

function activeLink() {
    //manageNavBar()

    const removeActive = (linkElement) => {
        const isActiveLink = Boolean(linkElement.href === window.location.href)
        linkElement.classList.toggle("active", isActiveLink)
    }

    forEachLinks(removeActive)
}

function forEachLinks(cb) {
    for (const child of document.querySelectorAll('#div-links')[0].children) {
        if (!child.href) continue
        cb(child)
    }
}
