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

// Force mobile layout on iOS Safari
function forceMobileLayout() {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent)) {
        const sponsorGrid = document.querySelector('.sponsor-grid');
        if (sponsorGrid && window.innerWidth <= 768) {
            // Force 2x3 grid layout
            sponsorGrid.style.setProperty('grid-template-columns', 'repeat(2, 1fr)', 'important');
            sponsorGrid.style.setProperty('grid-template-rows', 'auto auto auto', 'important');
            sponsorGrid.style.setProperty('gap', '15px', 'important');
            sponsorGrid.style.setProperty('padding', '0 10px', 'important');
            
            // Force all sponsor items to center
            const sponsorItems = document.querySelectorAll('.sponsor-item');
            sponsorItems.forEach((item, index) => {
                item.style.setProperty('transform', 'none', 'important');
                item.style.setProperty('max-width', '140px', 'important');
                item.style.setProperty('justify-self', 'center', 'important');
                
                // Set grid positions
                const row = Math.floor(index / 2) + 1;
                const col = (index % 2) + 1;
                item.style.setProperty('grid-column', col.toString(), 'important');
                item.style.setProperty('grid-row', row.toString(), 'important');
            });
            
            // Force mission text centering
            const missionText = document.querySelector('.mission-text');
            if (missionText) {
                const h2 = missionText.querySelector('h2');
                const p = missionText.querySelector('p');
                if (h2) h2.style.setProperty('text-align', 'center', 'important');
                if (p) p.style.setProperty('text-align', 'center', 'important');
            }
            
            // Force button and donor text centering
            const sponsorPlaceholder = document.querySelector('.sponsor-placeholder');
            if (sponsorPlaceholder) {
                sponsorPlaceholder.style.setProperty('text-align', 'center', 'important');
                const button = sponsorPlaceholder.querySelector('button');
                if (button) {
                    button.style.setProperty('margin', '0 auto', 'important');
                    button.style.setProperty('display', 'block', 'important');
                }
            }
            
            const donorText = document.querySelector('.donor-text');
            if (donorText) {
                donorText.style.setProperty('text-align', 'center', 'important');
                donorText.style.setProperty('margin', '0 auto', 'important');
            }
        }
    }
}

// Run on load and resize
window.addEventListener('load', forceMobileLayout);
window.addEventListener('resize', forceMobileLayout);