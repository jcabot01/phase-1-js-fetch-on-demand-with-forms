const init = () => {
    const inputForm = document.querySelector('form')
 
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const input = document.querySelector('input#searchByID');
      
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(res => res.json())
      .then(json => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = json.title;
        summary.innerText = json.summary;
      })
  })
}

document.addEventListener('DOMContentLoaded', init);