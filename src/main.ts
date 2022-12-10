import './style/main.css'
import { initCarousel } from './js/carouselExperience'
import { initManageNavBar } from './js/manageNavbar'
import { initIntervalLanguages } from './js/intervalLanguages'

document.addEventListener("DOMContentLoaded", function () {
  initCarousel()
  initManageNavBar()
  initIntervalLanguages()

  const footerVitaeDowload = document.querySelector("#footer-vitae-dowload")
  const dowloadPdfLink = ( document.querySelector("#dowload-pdf-link") as HTMLElement)

  footerVitaeDowload?.addEventListener('click', function () { dowloadPdfLink?.click() })
})