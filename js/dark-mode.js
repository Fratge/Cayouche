let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

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

  if (darkMode !== 'enabled') {
    enableDarkMode();
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
