(function() {
    const carets = document.querySelectorAll('.fa-chevron-down')
    carets.forEach(caret => {
        caret.addEventListener('click', () => {
            if (caret.classList.contains('fa-chevron-down')) {
                caret.parentElement.classList.add('active')
                caret.classList.remove('fa-chevron-down')
                caret.classList.add('fa-times')
                caret.classList.add('fa-active')
            } else {
                caret.parentElement.classList.remove('active')
                caret.classList.add('fa-chevron-down')
                caret.classList.remove('fa-times')
                caret.classList.remove('fa-active')
            }
            
        })
    })
}())