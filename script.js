(function(params) {
    const body = document.querySelector('body')
    let nightMode = false
    const swichBtn = document.getElementById('switch')
    const icon = document.getElementById('switch-icon')
    swichBtn.addEventListener('click', function() {
        body.classList.toggle('dark')
        nightMode = !nightMode
        if (nightMode) {
            icon.classList.remove('fa-moon')
            icon.classList.add('fa-sun')
        } else {
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-moon')
        }
    })
}())