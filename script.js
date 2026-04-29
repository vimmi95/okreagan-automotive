function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

// function showSection(section) {
//     let content = document.getElementById("content");

//     let pages = {
//         home: "<h2>Home</h2><p>Welcome to AutoWorld 🚗</p>",
//         bumper: "<h2>Bumper Repair</h2><p>We fix bumper damage professionally.</p>",
//         dent: "<h2>Paintless Dent Repair</h2><p>Remove dents without repainting.</p>",
//         vin: "<h2>VIN Finder</h2><p>We help you locate and decode your VIN.</p>",
//         autobody: "<h2>Auto Body</h2><p>Full body repair services.</p>",
//         collision: "<h2>Collision Services</h2><p>Accident repair specialists.</p>",
//         reviews: "<h2>Reviews</h2><p>Customer feedback section.</p>",
//         about: "<h2>About Us</h2><p>We are professional auto experts.</p>",
//         contact: "<h2>Contact Us</h2><p>Email: support@autoworld.com</p>"
//     };

//     content.innerHTML = pages[section] || "<h2>Page Not Found</h2>";
// }

function showSection(section) {
    const content = document.getElementById("content");

    fetch(`pages/${section}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(data => {
            content.innerHTML = data;
        })
        .catch(error => {
            content.innerHTML = "<h2>Page Not Found</h2>";
        });
}

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    const current = slides[index];
    const next = slides[(index + 1) % slides.length];

    // Fade in next
    next.classList.add("active");

    // Fade out current AFTER slight overlap
    setTimeout(() => {
        current.classList.remove("active");
    }, 500); // overlap timing

    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);