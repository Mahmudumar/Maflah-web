function renderMsg(msg) {
    const msg_ = document.querySelector('.msg h2')
    if (msg_.textContent.includes('{')) {
        msg_.textContent = msg
    }
}
renderMsg('Thank you.')