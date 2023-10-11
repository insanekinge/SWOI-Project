function redirect() {
  const links = document.querySelectorAll('.redirect')
  const body = document.querySelector('body')
  const pageName = document.body.getAttribute('data-page');

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('lastpagename');

  console.log(myParam)
  if (myParam) {
    body.setAttribute('data-page', `${myParam}`)

    setTimeout(function() {
      body.setAttribute('data-page', `${pageName}`)
    }, 1200)
  }

  links.forEach(function(el) {
    el.onclick = () => {
      const redirectLink = el.getAttribute('href') 
      window.location = `${redirectLink}?lastpagename=${pageName}`
    }
  })
}
window.addEventListener('DOMContentLoaded', function() {
  redirect()
})