// mobile menu
  const burger = document.querySelector(".burger");
  const menuContainerEl = document.querySelector(".header__menu-container");
  
  burger.addEventListener('click', function() {
    this.classList.toggle('burger_closed');
    menuContainerEl.classList.toggle('header__menu-container_visible');
    header.classList.toggle('header_menu-opend');
    document.body.classList.toggle('content-hidden');
  
  });
