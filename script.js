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

    // const projects = document.querySelectorAll('.project')
    // window.addEventListener('scroll', checkProject)
    // checkProject()

    // function checkProject() {
    //     const trigger = window.innerHeight / 5 * 4
    //     projects.forEach(box => {
    //         const top = box.getBoundingClientRect().top
    //         if (top < trigger) {
    //             box.classList.add('animate__fadeInUp')
    //             box.classList.remove('hide')
    //         } else {
    //             box.classList.remove('animate__fadeInUp')
    //             box.classList.add('hide')
    //         }
    //     })
    // }
}()) 