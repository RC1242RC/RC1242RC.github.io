const localMode = localStorage.getItem('theme');

if (localMode === 'dark') {

  document.documentElement.setAttribute('data-dark-mode', '');

}
