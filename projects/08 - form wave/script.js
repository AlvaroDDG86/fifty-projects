(function() {
    const labels = document.querySelectorAll('.form-item label')
    labels.forEach(label => {
        label.innerHTML = label.innerHTML
            .split('')
            .map((letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`)
            .join('')
    })
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', () => {
        })
        input.addEventListener('blur', () => {
        })
    })
}())