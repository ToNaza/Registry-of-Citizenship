const scriptURL = 'https://script.google.com/macros/s/AKfycbwLprY1KqntzO4rWmRuvbWm_MYUwppJGEaB_esZ9Xq3UwmGV9A12vo5bqgN6QU2evDv/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })