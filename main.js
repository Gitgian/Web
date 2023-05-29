document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuContainer = document.querySelector('.menu-container');
  const menuItems = document.querySelectorAll('.menu-container a');

  hamburgerIcon.addEventListener('click', () => {
    menuContainer.classList.toggle('show');
  });

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
      event.preventDefault();
      menuContainer.classList.remove('show');
      const targetURL = menuItem.getAttribute('href');
      setTimeout(() => {
        window.location.href = targetURL;
      }, 300); 
    });
  });
});
