// Variables
var navbar = document.getElementById("navigation-bar");
var header = document.getElementById("header-container");
var sticky = navbar.offsetTop;
var nav_toggle_btn = document.getElementById("nav-toggle-btn")
var mybutton = document.getElementById("scroll-btn");
let i = 0;

// Post arrays
let titles = [
    "Post 1 Title",
    "Post 2 Title",
    "Post 3 Title",
    "Post 4 Title",
]

let dates = [
    "Mar 12 - 5 min read",
    "Apr 25 - 3 min read",
    "May 26 - 4 min read",
    "Jun 22 - 7 min read"
]

let summary = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
]

window.onscroll = function() {scrollActions()};
window.onload = function() {renderCards(titles, dates, summary)};

function renderCards(titles, dates, summary) {
    for (i=0; i<4; i++) {
        console.log(i);
        document.getElementById("cards-go").innerHTML += `
        <div>
            <a href="post.html">
                <div class="card-container">
                    <div class="card">
                        <div class="image-container">
                            <img src="assets/img${i+1}.jpg" alt="img1">
                        </div>
                        <div class="text-container">
                            <div class="date-time">
                                ${dates[i]}
                            </div>
                            <div class="post-title">
                                ${titles[i]}
                            </div>
                            <div class="summary">
                                ${summary[i]}
                            </div>
                        </div>
                        <div class="card-icons-container">
                            <div class="share">
                                <img src="assets/share.svg" alt="share">
                            </div>
                            <div class="likes">
                                <div class="likes-number">
                                    31
                                </div>
                                <div class="heart">
                                    <img src="assets/heart.svg" alt="likes">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>`;
    }
}

function scrollActions() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        header.classList.add("mobile-sticky");
    } 
    else {
        navbar.classList.remove("sticky");
        header.classList.remove("mobile-sticky")
    }
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybutton.style.display = "block";
    } 
    else {
        mybutton.style.display = "none";
    }   
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openNav() {
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        nav_toggle_btn.setAttribute("src", "assets/ham-menu.png");
    }
    else {
        navbar.classList.add("open")
        nav_toggle_btn.setAttribute("src", "assets/close.png")
    }
}

function navLinks() {
    navbar.classList.remove("open");
    nav_toggle_btn.setAttribute("src", "assets/ham-menu.png");
}