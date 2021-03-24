(function() {
    const button = document.getElementById('btn-menu')
    const menu = document.querySelector('#menu')
	button.addEventListener('click', (btn) => {
        menu.classList.toggle('show')
        menu.classList.toggle('hide')
        button.classList.toggle('show')
    })
}())