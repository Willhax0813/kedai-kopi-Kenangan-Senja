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

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
// ketika search bar diklik
document.querySelector(".search-btn").onclick = () => {
    searchBox.classList.toggle("active");
};

const searchInput = document.querySelector("input");
document.querySelector("input").onclick = () => {
    searchInput.classList.toggle("active");
};
// menutup search bar
const navbarExtra = document.querySelector(".navbar-extra");

// klik diluar area search bar
document.addEventListener("click", function(e) {
    if (!searchBtn.contains(e.target) && !navbarExtra.contains(e.target)) {
        searchBox.classList.remove("active");
    }
});

// mengaplikasikan fungsi enter