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

// Dynamic logo overlap prevention
function preventLogoOverlap() {
    const usahgLogo = document.querySelector('.sponsor-item:nth-child(4)');
    const frcteesLogo = document.querySelector('.sponsor-item:nth-child(6)');
    
    if (!frcteesLogo || !usahgLogo) return;
    
    const frcteesRect = frcteesLogo.getBoundingClientRect();
    const usahgRect = usahgLogo.getBoundingClientRect();
    
    // Check if logos overlap
    const overlap = !(frcteesRect.right < usahgRect.left || 
                     frcteesRect.left > usahgRect.right || 
                     frcteesRect.bottom < usahgRect.top || 
                     frcteesRect.top > usahgRect.bottom);
    
    if (overlap) {
        // If overlap detected, adjust transform values
        const windowWidth = window.innerWidth;
        let newTransformX = 0;
        let newScale = 1;
        
        if (windowWidth > 1200) {
            newTransformX = 25;
            newScale = 0.95;
        } else if (windowWidth > 1000) {
            newTransformX = 20;
            newScale = 0.9;
        } else if (windowWidth > 800) {
            newTransformX = 15;
            newScale = 0.85;
        } else {
            newTransformX = 10;
            newScale = 0.8;
        }
        
        // Apply new transforms
        frcteesLogo.style.transform = `translateX(${newTransformX}px) scale(${newScale})`;
        usahgLogo.style.transform = `translateX(-${newTransformX}px) scale(${newScale})`;
    }
}

// Run overlap prevention on load and resize
window.addEventListener('load', preventLogoOverlap);
window.addEventListener('resize', preventLogoOverlap);

// Also run periodically to catch any dynamic changes
setInterval(preventLogoOverlap, 1000);