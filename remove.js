 // setTimeout(typeEffect, 1500);
    // Jacek added:
    if (isDeleting) {
        // word on screen (keep for 1500ms)
        setTimeout(typeEffect, 1500);
    } else {
        // empty string (keep empty for 300ms)
        setTimeout(typeEffect, 300);
    }
    // end Jacek added
  


    // document.addEventListener("click", (e) => { ---- for service dropdown

//   const isDropdownButton = e.target.matches("[data-dropdown-button]");
//   if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

//   let currentDropdown;
//   if (isDropdownButton) {
//     currentDropdown = e.target.closest("[data-dropdown]");
//     currentDropdown.classList.toggle("active");
//   }

//   document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
//     if (dropdown === currentDropdown) return;
//     dropdown.classList.remove("active");
//   });
// });


// const tabs = document.querySelectorAll("[data-tab-target]"); ------- for service dropdown converted into tabs to hide and show content.
// const tabContents = document.querySelectorAll("[data-tab-content]");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove("active");
//     });
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tab.classList.add("active");
//     target.classList.add("active");
//   });
// });



// const scrollers = document.querySelectorAll(".scroller"); ------- remove scrollers from index.html
// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }
// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     scroller.setAttribute("data-animated", true);

//     const scrollerInner = scroller.querySelector(".scroller__inner");
//     const scrollerContent = Array.from(scrollerInner.children);

//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   });
// }