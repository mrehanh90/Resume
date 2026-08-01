window.addEventListener("load", function () {
    // Generate matrix rain effect for the welcome overlay
    const matrixContainer = document.getElementById("matrix-container");
    const characters = "0101010101REHAN_CS_SQA_MYSQL_PYTHON";
    
    for (let i = 0; i < 35; i++) {
        const drop = document.createElement("div");
        drop.className = "matrix-drop";
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${1 + Math.random() * 2}s`;
        drop.style.animationDelay = `${Math.random() * 1}s`;
        
        let text = "";
        for(let j = 0; j < 20; j++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length)) + "<br>";
        }
        drop.innerHTML = text;
        matrixContainer.appendChild(drop);
    }

    // Fade out the boot screen overlay after the sequence completes
    setTimeout(function () {
        const overlay = document.getElementById("welcome-overlay");
        overlay.classList.add("fade-out");
    }, 2800);
});
// Disable Right-Click Context Menu
/* document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener("keydown", function (e) {
    // Prevent F12
    if (e.key === "F12") {
        e.preventDefault();
    }
    
    // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) {
        e.preventDefault();
    }
    
    if (e.ctrlKey && e.key === "U") {
        e.preventDefault();
    }
});*/