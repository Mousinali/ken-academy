document.addEventListener("DOMContentLoaded", () => {
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");

  if (!offcanvas || !overlay) return;

  window.openMenu = function () {
    offcanvas.classList.remove("-translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    offcanvas.setAttribute("aria-hidden", "false");
    document.body.classList.add("overflow-hidden");
  };

  window.closeMenu = function () {
    offcanvas.classList.add("-translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
    offcanvas.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overflow-hidden");
  };

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeMenu();
    }
  });
});


document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
        const submenu = btn.nextElementSibling;
        const icon = btn.querySelector("i");

        if (submenu.style.maxHeight) {
            submenu.style.maxHeight = null;
            icon.classList.remove("rotate-180");
        } else {
            submenu.style.maxHeight = submenu.scrollHeight + "px";
            icon.classList.add("rotate-180");
        }
    });
});

// apply-modal.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("applyModal");
    const backdrop = document.getElementById("applyBackdrop");
    const modalBox = modal.querySelector("div");

    window.openApplyModal = function () {
        modal.classList.remove("hidden");
        backdrop.classList.remove("hidden");

        setTimeout(() => {
            backdrop.classList.remove("opacity-0");
            modalBox.classList.remove("scale-95", "opacity-0");
            modal.classList.add("flex");
        }, 10);
    };

    window.closeApplyModal = function () {
        backdrop.classList.add("opacity-0");
        modalBox.classList.add("scale-95", "opacity-0");

        setTimeout(() => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
            backdrop.classList.add("hidden");
        }, 200);
    };
});

