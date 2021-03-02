(function () {
    const container = document.getElementById('container')
    const mainNav = document.getElementById('main-nav')
    document.getElementById('open').addEventListener('click', function () {
        container.classList.add('show-nav')
        mainNav.classList.add('nav-ahead')
        scrollToTop()
    })
    document.getElementById('close').addEventListener('click', function () {
        container.classList.remove('show-nav')
        mainNav.classList.remove('nav-ahead')
        scrollToTop()
    })

    scrollToTop = function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}())
