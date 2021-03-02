(function() {
    const search = document.querySelector('.search')
    const input = document.querySelector('#search-input')
    const icon = document.querySelector('i')
    const btn = document.getElementById('show')
    btn.addEventListener('click', function() {
        search.classList.toggle('active')
        input.value = ''
        input.focus()
    })
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            input.disabled = true;
            btn.disabled = true;
            icon.classList.remove('fa-search')
            icon.classList.add('fa-pulse')
            icon.classList.add('fa-spinner')
            btn.classList.add('disabled')
            input.classList.add('disabled')
            setTimeout(() => {
                input.disabled = false;
                btn.disabled = false;
                icon.classList.add('fa-search')
                icon.classList.remove('fa-pulse')
                icon.classList.remove('fa-spinner')
                btn.classList.remove('disabled')
                input.classList.remove('disabled')
            }, 2000);
        }
      });
      
}())