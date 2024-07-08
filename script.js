//const SCRIPTURL = "https://script.google.com/macros/s/AKfycbzsDOJOWtD8Yg7yQfXv-F8k-kuiu2t6KWbfkZLxqv5UZ7kiGv6gfnWl4v1AKGUUiH3k/exec";
//const deploymentId = "AKfycbzsDOJOWtD8Yg7yQfXv-F8k-kuiu2t6KWbfkZLxqv5UZ7kiGv6gfnWl4v1AKGUUiH3k";
const scriptURL = 'https://script.google.com/macros/s/AKfycbzsDOJOWtD8Yg7yQfXv-F8k-kuiu2t6KWbfkZLxqv5UZ7kiGv6gfnWl4v1AKGUUiH3k/exec';
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = 'Thank You For Subscribing !';
          setTimeout(function(){
              msg.innerHTML = " ";
          },5000);
          form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })