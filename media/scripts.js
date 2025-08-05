// my beautiful fuck ass fix for mobile that simply changes properties of elements if were on mobile cuz i cant be FUCKED to do css

console.log(navigator.userAgent);
if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) { // we on mobile mf
    console.log("we on mobile mf");
    document.querySelectorAll(".viewer-container").forEach(element => {
        element.style.display = "none";
    });
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("navbar-dropdown").style.display = "block";
}

document.getElementById("navbar-dropdown").addEventListener("change", function () {
    window.location.href = this.value;
});