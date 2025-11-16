// Initialize AOS (Animate on Scroll)
AOS.init({ duration: 800, once: true });

// Typed.js for hero text animation
var options = {
    strings: ["& Beyond.", "With Style.", "For You."],
    typeSpeed: 70, backSpeed: 40, backDelay: 1500, loop: true
};
var typed = new Typed('#typed-text', options);

// Custom cursor logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const hoverables = document.querySelectorAll('a, button, .card-brutalist, .profile-pic');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
    cursorRing.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
});

hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Auto-close mobile navbar on link click
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (menuToggle.classList.contains('show')) {
            bsCollapse.toggle();
        }
    });
});

// Save and load contact form data
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formName = document.getElementById('formName');
    const formEmail = document.getElementById('formEmail');
    const formMessage = document.getElementById('formMessage');

    // Load saved data from localStorage
    const loadFormData = () => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            formName.value = savedData.name || '';
            formEmail.value = savedData.email || '';
            formMessage.value = savedData.message || '';
        }
    };

    // Save data to localStorage on input
    const saveFormData = () => {
        const formData = {
            name: formName.value,
            email: formEmail.value,
            message: formMessage.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    // Clear data on form submission
    const clearFormData = () => {
        localStorage.removeItem('formData');
    };

    // Add event listeners (check if form exists first)
    if (contactForm) {
        formName.addEventListener('input', saveFormData);
        formEmail.addEventListener('input', saveFormData);
        formMessage.addEventListener('input', saveFormData);
        contactForm.addEventListener('submit', clearFormData);
        
        // Load any saved data when the page loads
        loadFormData();
    }
});


// === Add this to your script.js ===

// (This can go before or after your Typed.js and AOS.init() code)

tsParticles.load("tsparticles-hero", {
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab", // Creates a "grab" effect on hover
            },
            onClick: {
                enable: true,
                mode: "push", // Pushes particles away on click
            },
        },
        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 0.8,
                    color: "#39FF14" // Your theme color
                },
            },
            push: {
                quantity: 4,
            },
        },
    },
    particles: {
        color: {
            value: "#39FF14", // Your theme color
        },
        links: {
            color: "#ffffff", // Line color
            distance: 150,
            enable: true,
            opacity: 0.2, // Subtle links
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.5, // Particle speed
            direction: "none",
            outModes: "out",
        },
        number: {
            density: {
                enable: true,
            },
            value: 80, // Number of particles
        },
        opacity: {
            value: 0.4, // Particle opacity
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
});