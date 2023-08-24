let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const logoFooter = document.querySelector('.logo-footer');

const enableDarkMode = () => {

  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  logoFooter.src = './img/logo.png'; // Nouveau chemin d'image pour le mode sombre

  if (darkMode !== 'enabled') {
    enableDarkMode();
    logoFooter.src = './img/download.png'; // Revenir à l'image d'origine pour le mode clair

  } else {
    disableDarkMode();
  }
});


const toggleDugmeId = document.getElementById("toggleDugmeId")

const enableDarkModeDugme = () => {
  toggleDugmeId.classList.add('toggleDugmePomijeriDesno');
};

const disableDarkModeDugme = () => {
  toggleDugmeId.classList.remove('toggleDugmePomijeriDesno');
};

if (document.body.classList.contains('darkmode')) {
  enableDarkModeDugme();
}

toggleDugmeId.addEventListener("click", () => {
  if (document.body.classList.contains('darkmode')) {
    enableDarkModeDugme();
  } else {
    disableDarkModeDugme();
  }
})
