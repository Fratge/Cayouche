
/** 
/ ** DARK MODE function that allows you to change the root state from light mode to dark mode using CSS variables that are added
 * in the body itself by clicking on the button
 */

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

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//  Change the position of the toggle button in relation to whether dark mode is active in the body or not
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
