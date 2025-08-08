// my beautiful fuck ass fix for mobile that simply changes properties of elements if were on mobile cuz i cant be FUCKED to do css

console.log(navigator.userAgent);

function fixMobile() {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) { // we on mobile mf
        console.log("we on mobile mf");
        document.getElementById("mobileNav").style.display = "none";
        document.getElementById("navbar-dropdown").style.display = "block";
    }
}

fixMobile();

document.getElementById("navbar-dropdown").addEventListener("click", function () {
    document.getElementById("dropdown-bits").classList.toggle("show");
});

document.querySelectorAll(".dropdown-item").forEach(element => {
    element.addEventListener("click", function() {
        document.getElementById("dropdown-bits").classList.remove("show");
        fixMobile();
    })
})