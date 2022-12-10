const observerHTML = new IntersectionObserver((entries) => {
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


// const divLinks = document.querySelector("#div-links")
// const logoNavbar = document.querySelector("#navbar-log")



export function initManageNavBar() {
    window.addEventListener('hashchange', function () { activeLink() });
    const navbar = document.querySelector("#navbar")
    const socialNets = document.querySelector("#social-nets")

    // Se recorren las secciones para colocarlas en el observer
    const sections = document.querySelectorAll('section')
    sections.forEach(section => { observerHTML.observe(section) })

    
    const navbarBtn = document.querySelector("#navbar-btn")
    navbarBtn?.addEventListener('click', function() {
        navbar?.classList.toggle('full')
        socialNets?.classList.toggle('center')
        socialNets?.classList.remove('full')
    });

    (() => {
        const disableShowNavbar = (linkElement: HTMLAnchorElement) => {
            linkElement.addEventListener('click', function () {
                navbar?.classList.remove('full')
                socialNets?.classList.remove('center')
            })
        }
        forEachLinks(disableShowNavbar)
    })();
    

}


document.addEventListener('scroll', function () {
    const navbar = document.querySelector("#navbar")
    const socialNets = document.querySelector("#social-nets")
    const navbarBtn = document.querySelector("#navbar-btn")
    navbar?.classList.remove('full')
    socialNets?.classList.remove('center')
    const sectionWhois = document.querySelector("#whois")

    if (sectionWhois) {
        const sectionWhoisBounding: DOMRectReadOnly = sectionWhois.getBoundingClientRect()

        const navbarVisible = Boolean((sectionWhoisBounding.top) <= 0)
        navbar?.classList.toggle('scroll', navbarVisible)
        navbarBtn?.classList.toggle('active', navbarVisible)
        socialNets?.classList.toggle('scroll', navbarVisible)
    }


    // manageNavBar()
})

function activeLink() {
    //manageNavBar()

    const removeActive = (linkElement: HTMLAnchorElement) => {
        const isActiveLink = Boolean(linkElement.href === window.location.href)
        linkElement.classList.toggle("active", isActiveLink)
    }

    forEachLinks(removeActive)
}

function forEachLinks(cb: Function) {
    const links = document.querySelectorAll('#div-links a')

    for (let i = 0; i < links.length; i++) {
        const link: HTMLAnchorElement = (links[i] as HTMLAnchorElement)
        cb(link)
    }
}



/*
function manageNavBar() {
    const navbar = document.querySelector("#navbar")
    const socialNets = document.querySelector("#social-nets")
    const navbarBtn = document.querySelector("#navbar-btn")

    const hasLink = window.location.hash
    const navbarActive = ["#whois", "#experience", "#contact"].includes(hasLink)
    navbar?.classList.toggle('scroll', navbarActive)
    socialNets?.classList.toggle('scroll', navbarActive)
    navbarBtn?.classList.toggle('active', navbarActive)
}
*/