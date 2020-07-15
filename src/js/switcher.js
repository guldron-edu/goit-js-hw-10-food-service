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
    changeTheme(Theme.LIGHT, Theme.DARK);
  } else {
    changeTheme(Theme.DARK, Theme.LIGHT);
  }
});

function changeTheme(firstTheme, secondTheme) {
  bodyRef.classList.remove(firstTheme);
  bodyRef.classList.add(secondTheme);
  localStorage.setItem('theme', secondTheme);
}
