let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const logos = document.querySelectorAll('.logo'); 
const header = document.querySelector('header');
const burger = document.querySelector('.burger-button');

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
    logos.forEach(logo => {
      logo.src = './img/logo-dark.png';
      header.style.backgroundColor = '#293145';
      burger.src = './img/burger-white.svg'; 
    });
  } else {
    disableDarkMode();
    header.style.backgroundColor = 'white';
    burger.src = './img/burger-dark.svg'; 

    logos.forEach(logo => {
      logo.src = './img/logo-white.png';
    });
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
});
