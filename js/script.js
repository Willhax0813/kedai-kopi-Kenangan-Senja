// Toggle class Active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// search bar active
const navbarExtra = document.querySelector("input");
// ketika search bar diklik
document.querySelector("#search").onclick = () => {
    navbarExtra.classList.toggle("active");
};

// menutup search bar
const search = document.querySelector("#search");

// klik diluar area search bar
document.addEventListener("click", function(e) {
    if (!search.contains(e.target) && !navbarExtra.contains(e.target)) {
        navbarExtra.classList.remove("active");
    }
});

// mengaplikasikan fungsi enter