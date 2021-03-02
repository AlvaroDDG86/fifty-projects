document.querySelectorAll('.panel').forEach((panel, _, panels) => {
    panel.addEventListener('click', (event) => {
        panels.forEach(panel => panel.classList.contains('active') && panel.classList.remove('active'))
        event.target.classList.add('active')
    })
})