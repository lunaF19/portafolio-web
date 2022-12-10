export function initContactForm(){
    const contactForm = document.querySelector("#contact-form")

    contactForm?.addEventListener('submit', function(e){
        onSubmit(e as SubmitEvent)
    })
}

function onSubmit(e:SubmitEvent) {
    e.preventDefault()
    alert("Falta manejar")
}
