// Toggle class Active
const navbarNav = document.querySelector(".navbar-nav");
const navbarLogo = document.querySelector(".navbar-logo");
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
const navbarExtra = document.querySelector(".navbar-extra");
const searchInput = document.querySelector("input");
const enterKey = document.querySelector("input");
// ketika search bar diklik
document.querySelector(".search-btn").onclick = () => {
    searchBox.classList.toggle("active");
};

document.querySelector("input").onclick = () => {
    searchInput.classList.toggle("active");
};
document.querySelector(".search-box").onclick = () => {
    searchInput.classList.toggle("active");
};
// menutup search bar

// klik diluar area search bar
document.addEventListener("click", function(e) {
    if (!searchBox.contains(e.target) && !searchInput.contains(e.target)) {
        searchInput.classList.remove("active");
    }
});

document.addEventListener("select", function(e) {
    if (searchInput.contains(e.target)) {
        searchInput.classList.add("active");
    }
});

// mengaplikasikan fungsi enter
input.onkeydown = function(e) {
    if (e.key == "enter") {
        alert("enter key pressed");
    }
    e.preventDefault();
};