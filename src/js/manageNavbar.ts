let currentSection = "";

const navbar = document.querySelector("#navbar");
const socialNets = document.querySelector("#social-nets");
const navbarBtn = document.querySelector("#navbar-btn");

const observerHTML = new IntersectionObserver(
  (entries) => {
    entries.forEach((entrie) => {
      if (entrie.isIntersecting) {
        const id = entrie.target.id;
        if (currentSection == id) return;
        currentSection = id;
        activeLink();
      }
    });
  },
  {
    root: document,
    threshold: 0.5,
    rootMargin: "0px 0px 20% 0px",
  }
);

export function initManageNavBar() {
  // Se recorren las secciones para colocarlas en el observer
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observerHTML.observe(section);
  });

  navbarBtn?.addEventListener("click", function () {
    console.log(navbar);
    navbar?.classList.toggle("full");
    socialNets?.classList.toggle("center");
    socialNets?.classList.remove("full");
  });

  (() => {
    const disableShowNavbar = (linkElement: HTMLAnchorElement) => {
      linkElement.addEventListener("click", function () {
        navbar?.classList.remove("full");
        socialNets?.classList.remove("center");
      });
    };
    forEachLinks(disableShowNavbar);
  })();
}

document.addEventListener("scroll", function () {
  navbar?.classList.remove("full");
  socialNets?.classList.remove("center");

  const sectionWhois = document.querySelector("#whois");

  if (sectionWhois) {
    const sectionWhoisBounding: DOMRectReadOnly =
      sectionWhois.getBoundingClientRect();

    const navbarVisible = Boolean(sectionWhoisBounding.top <= 0);
    navbar?.classList.toggle("scroll", navbarVisible);
    navbarBtn?.classList.toggle("active", navbarVisible);
    socialNets?.classList.toggle("scroll", navbarVisible);
  }
});

function activeLink() {
  const toggleActiveLink = (linkElement: HTMLAnchorElement) => {
    const hashOfLink = linkElement.href.split("#")[1];
    const isActiveLink = Boolean(hashOfLink == currentSection);

    linkElement.classList.toggle("active", isActiveLink);
  };

  forEachLinks(toggleActiveLink);
}

function forEachLinks(cb: Function) {
  const links = document.querySelectorAll("#div-links a");

  for (let i = 0; i < links.length; i++) {
    const link: HTMLAnchorElement = links[i] as HTMLAnchorElement;
    cb(link);
  }
}
