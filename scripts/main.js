let firefoxImage = document.querySelector('img')

firefoxImage.onclick = function () {
  let src = firefoxImage.getAttribute('src')
  if (src === 'images/firefox-icon.png') {
    firefoxImage.setAttribute('src', 'images/firefox2.png')
  } else {
    firefoxImage.setAttribute('src', 'images/firefox-icon.png')
  }
}

let button = document.querySelector('button')
let header = document.querySelector('h1')

function defineUserName() {
  let userName = prompt('Por favor, digite seu nome.')
  if (!userName || userName === null) {
    defineNomeUsuario()
  } else {
    localStorage.setItem('userName', userName)
    header.textContent = 'Mozilla é legal, ' + userName
  }
}

if (!localStorage.getItem('username')) {
  defineUserName()
} else {
  let storedUserName = localStorage.getItem('userName')
  header.textContent = 'Mozilla é legal, ' + storedUserName
}

button.onclick = function () {
  defineUserName()
}
