// Add event listeners for the nav bar on mobile
document.addEventListener('DOMContentLoaded', () => {
  const navBurgers = Array.from(document.querySelectorAll('.navbar-burger'));

  if (navBurgers.length > 0) {
    navBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = document.getElementById(el.dataset.target);

        el.classList.toggle('is-active');
        target.classList.toggle('is-active');
      });
    });
  }
});