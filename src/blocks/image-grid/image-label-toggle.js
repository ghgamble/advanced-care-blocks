document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('[data-touchable]').forEach((figure) => {
        figure.addEventListener('click', () => {
          figure.classList.toggle('touched');
        });
      });
    }
});
  