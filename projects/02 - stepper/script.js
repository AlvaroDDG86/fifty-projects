(function() {
    const steps = document.querySelectorAll('.circle')
    const progress = document.getElementById('progress')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')

    prevBtn.addEventListener('click', function () {
        move(true)
    })
    nextBtn.addEventListener('click', function () {
        move(false)
    })

    move = function(prev) {
        let i = 0
        steps.forEach((item, index) => { if (item.classList.contains('active')) i = index })
        const index = prev ? (i - 1) : (i + 1)

        if (prev) steps[index + 1].classList.remove('active')
        else steps[index].classList.add('active')
        progress.style.width = `${((100 / (steps.length - 1)) * index)}%`
        prevBtn.disabled = (index === 0)
        nextBtn.disabled = (index === (steps.length - 1))
    }
})()