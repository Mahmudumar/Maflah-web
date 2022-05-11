const form = document.querySelector('.form')
const email = document.querySelector('.subs')
const submit = document.querySelector('.submit')


function checkemail() {

    if (!form.checkValidity()) {
        submit.setAttribute('disabled', null)
    } else {
        if (email.value.length <= 0) {
            submit.setAttribute('disabled', null)
        } else {
            submit.removeAttribute('disabled')
        }

    }
}

window.addEventListener('load', checkemail)
email.addEventListener('focusout', checkemail)
window.addEventListener('keyup', checkemail)