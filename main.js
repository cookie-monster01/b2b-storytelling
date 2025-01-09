const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});


document.addEventListener("click", e => {

  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown 
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });

})


const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
