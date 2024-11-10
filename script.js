function openMenu (menu) {
  menu.classList.remove("closed");
  menu.classList.add("open");
}

function closeMenu (menu) {
  menu.classList.remove("open");
  menu.classList.add("closed");
}

const body = document.querySelector("body");

const menus = document.querySelectorAll(".dropdown-menu");

body.addEventListener("click", e => {
  menus.forEach(menu => {
    if (menu.contains(e.target)) {
      if (menu.classList.contains("closed")) {
        openMenu(menu);
        menus.forEach(selectedMenu => {
          if (selectedMenu.classList.contains("open") && selectedMenu !== menu) {
            closeMenu(selectedMenu);
          }
        })
      } else if (menu.classList.contains("open")) {
        closeMenu(menu);
      }
    } else if (menu.classList.contains("open")) {
      closeMenu(menu)
    }
  })
})