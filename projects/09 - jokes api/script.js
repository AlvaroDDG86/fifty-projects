(function () {
    const content = document.querySelector('.content')
    document.querySelector('button.btn').addEventListener('click', getJoke)
    getJoke()

    function getJoke() {
        content.classList.add('loading')
        fetch('https://icanhazdadjoke.com', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            document.querySelector('.joke').innerHTML = data.joke
        })
        .catch(error => {
            console.error(error)
            document.querySelector('.joke').innerHTML = 'Error, please reload the page'
        })
        .finally(() => {
            content.classList.remove('loading')
        })
    }
}())