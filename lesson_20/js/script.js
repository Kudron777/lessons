
document.addEventListener("click", function (e) {
   const targetElement = e.target;

   if (targetElement.closest('.catalog__open-filter-button')) {
      document.documentElement.classList.toggle('menu-open');
      e.preventDefault();
   }

})