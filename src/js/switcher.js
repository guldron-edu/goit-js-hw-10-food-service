const bodyRef = document.querySelector('body');
const switcherRef = document.querySelector('.js-switch-input');
const savedTheme = localStorage.getItem('theme');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (savedTheme === null || savedTheme === Theme.LIGHT) {
  bodyRef.classList.add(Theme.LIGHT);
} else {
  bodyRef.classList.add(Theme.DARK);
  switcherRef.checked = true;
}

switcherRef.addEventListener('change', ev => {
  if (ev.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
