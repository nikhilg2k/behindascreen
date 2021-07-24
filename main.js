// Variables
var navbar = document.getElementById("navigation-bar");
var header = document.getElementById("header-container");
var sticky = navbar.offsetTop;
var nav_toggle_btn = document.getElementById("nav-toggle-btn")
var mybutton = document.getElementById("scroll-btn");
let i = 0;

// Post arrays
let titles = [
    "Loyalty to political parties has caused a breakdown in healthy public debate",
    "Why India needs cyber defense as well as cyber offense",
    "Baba Ramdev’s comments on allopathic medicine are not funny. They are dangerous",
    "TVF's Aspirants Review | A blueprint of sophisticated storytelling",
    "What The Pegasus Project revelations mean for privacy in the future"
]

let dates = [
    "Jun 12 &middot 3 min read",
    "Jun 25 &middot 3 min read",
    "Jun 25 &middot 4 min read",
    "Jun 25 &middot 3 min read",
    "Jul 24 &middot 5 min read"
]

let summary = [
    "Have we forgotten out responsibity towards the nation and the republic?...",
    "Why increasing Chinese threats should make us rethink cyber defense...",
    "Irresponsible comments by celebrities can increase vaccine hesitancy...",
    "Review of TVF's latest addition to a series of popular hits...",
    "Analysing the implications of the The Pegasus Project revelations..."
]

window.onscroll = function() {scrollActions()};
window.onload = function() {renderCards(titles, dates, summary)};

function renderCards(titles, dates, summary) {
    for (i=4; i>=0; i--) {
        console.log(i);
        document.getElementById("cards-go").innerHTML += `
        <div>
            <a href="post${i+1}.html">
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