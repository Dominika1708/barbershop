const navMenu = document.querySelector("#navMenu");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-open");
    }
})();