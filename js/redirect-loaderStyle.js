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
  setTimeout(function() {
    const preloader = document.getElementById('preloader')

    preloader.style.transition = '.5s'
    body.style.transition = '.5s'
  }, 500)
  setTimeout(function() {
    document.querySelector('.header').style.background = 'var(--bgColor)'
  }, 1700)

  links.forEach(function(el) {
    el.onclick = () => {
      body.classList.add('loaded')

      setTimeout(function() {
        const redirectLink = el.getAttribute('href') 
        window.location = `${redirectLink}?lastpagename=${pageName}`
      }, 600)
    }
  })
}

window.addEventListener('DOMContentLoaded', function() {
  redirect()
})