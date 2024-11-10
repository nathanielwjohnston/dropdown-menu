const body = document.querySelector("body");

const menus = document.querySelectorAll(".dropdown-menu");

body.addEventListener("click", e => {
  menus.forEach(menu => {
    if (menu.contains(e.target)) {
      const content = menu.querySelector(".dropdown-content");
      if (menu.classList.contains("closed")) {
        content.style.visibility = "visible";
        menu.classList.remove("closed");
        menu.classList.add("open");
      } else if (menu.classList.contains("open")) {
        content.style.visibility = "hidden";
        menu.classList.remove("open");
        menu.classList.add("closed");
      }
    }
  })
})