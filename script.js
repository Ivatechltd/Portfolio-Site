function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    if (sectionId === 'home') {
        activeSection.style.display = 'flex';
    } else {
        activeSection.style.display = 'block';
    }
    activeSection.classList.add('active');

    document.getElementById('nav-menu').classList.remove('open');
}

function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('open');
}

// Typing Dynamics Setup
var typed = new Typed(".typing", {
    strings: ["Networking & Security Systems Expert", "Field Technician", "IT Specialist"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Production Form Processor
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);
    
    status.innerHTML = "Sending...";
    status.style.color = "#cbd5e1";

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks! Your message was sent successfully.";
            status.style.color = "#4ade80";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form.";
                }
                status.style.color = "#ef4444";
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem connecting to the service.";
        status.style.color = "#ef4444";
    });
});
