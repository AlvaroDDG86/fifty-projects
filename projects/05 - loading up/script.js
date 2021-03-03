(function() {
    const bg = document.querySelector('.bg')
    const loadingText = document.querySelector('.loading-text')
    let start = 0
    let interval = setInterval(() => {
        start++
        loadingText.innerHTML = `${start}%`
        loadingText.style.opacity = `${1 - (start / 100)}`
        loadingText.style.transform = `scale(${start / 10})`
        bg.style.filter = `blur(${100 - start}px)`
        if (start === 100) {
            clearInterval(interval)
        }
    }, 30);

}())