// ===== TYPEWRITER EFFECT =====
const text = "SAP Functional Consultant & Trainer";
let index = 0;
const speed = 80;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typedText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Run when page loads
window.onload = function () {
    typeWriter();
};

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".section, .about-card, .skill-box, .timeline-item").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});
// ===== RESUME BUTTON ACTION (NO HTML CHANGE) =====
const resumeBtn = document.getElementById("resumeBtn");

if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
        window.open("MADASAMY M RESUME.pdf", "_blank");
    });
}