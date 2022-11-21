const $ = function (a) { return document.getElementById(a) }
const nabvar = $("navbar")
const logoNavbar = $("navbar-log")
const socialNets = $("socia-net")


const sectionContact = $("contact")
const sectionExperience = $("experience")
const sectionWhois = $("whois")
const sectionStart = $("start")

let changeHast = true

document.addEventListener('scroll', function (e) {
    const scrollY = window.scrollY
    nabvar.classList.toggle('scroll', scrollY > 850)
    logoNavbar.classList.toggle('active', scrollY > 850)
    socialNets.classList.toggle('scroll', scrollY > 850)
    if ( changeHast ) setLinkByScroll(scrollY)
})

document.addEventListener('DOMContentLoaded', function (e) {
    intervalLanguaes(1)
    // console.log({
    //     sectionStart: sectionStart.getBoundingClientRect(),
    //     sectionWhois: sectionWhois.getBoundingClientRect(),
    //     sectionExperience: sectionExperience.getBoundingClientRect(),
    //     sectionContact: sectionContact.getBoundingClientRect(),
    // })
})

window.addEventListener('hashchange', function () {
    activeLink()
});

function setLinkByScroll(scrollY) {

    if ((sectionStart.getBoundingClientRect().bottom) >= 0) {
        if (!window.location.href.includes("#start")) window.location.href = "#start"
        return;
    }

    if ((sectionWhois.getBoundingClientRect().bottom) >= 0) {
        if (!window.location.href.includes("#whois")) window.location.href = "#whois"
        return;
    }

    if ((sectionExperience.getBoundingClientRect().bottom) >= 0) {
        if (!window.location.href.includes("#experience")) window.location.href = "#experience"
        return;
    }

    if ((sectionContact.getBoundingClientRect().bottom) >= 0) {
        if (!window.location.href.includes("#contact")) window.location.href = "#contact"
        return;
    }



}

function intervalLanguaes(num) {
    const languages = ["BackEnd", "Express JS", "Oracle Pl/SQL", "FrontEnd", "React JS",]
    if (num > languages.length) num = 1
    if (num < 1) num = 1

    $("language").innerHTML = ` ${languages[num - 1]}`

    setTimeout(() => {
        intervalLanguaes(num + 1)
    }, 3000)

}


function activeLink() {
    if ( changeHast ) {
        const removeActive = (linkElement) => {
            linkElement.classList.toggle("active", linkElement.href === window.location.href)
        }
        forEachLinks(removeActive)
        changeHast = false 
        setTimeout( () => {
            changeHast = true
        },1000)
    }

}

function forEachLinks(cb) {
    const numOfLinks = nabvar.childElementCount
    for (let i = 0; i < numOfLinks; i++) {
        cb(nabvar.children[i])
    }
}
