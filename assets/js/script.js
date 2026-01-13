// var nav = document.querySelector(".navbar");
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 20) {
//         nav.classList.add("scroll-on");
//     }
//     else {
//         nav.classList.remove("scroll-on");
//     }
// }

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

