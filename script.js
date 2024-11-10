const body = document.querySelector("body");

const menus = document.querySelectorAll(".dropdown-menu");

body.addEventListener("click", e => {
  menus.forEach(menu => {
    if (menu.contains(e.target)) {
      if (menu.classList.contains("closed")) {
        menu.classList.remove("closed");
        menu.classList.add("open");
        menus.forEach(selectedMenu => {
          if (selectedMenu.classList.contains("open") && selectedMenu !== menu) {
            selectedMenu.classList.remove("open");
            selectedMenu.classList.add("closed");
          }
        })
      } else if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menu.classList.add("closed");
      }
    }
  })
})