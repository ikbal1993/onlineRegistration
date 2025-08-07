// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
document.getElementsByClassName('logo')[0].addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})
const form = document.getElementById("form");
form.addEventListener('submit', () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;
    form.reset(); // `this` refers to the form

    // 2. Show a "Thank you" message
    const thankYouMessage = document.createElement("div");
    thankYouMessage.textContent = "Thank you for your interest! We'll contact you soon.";
    thankYouMessage.style.color = "green";
    thankYouMessage.style.marginTop = "20px";
    thankYouMessage.style.fontWeight = "bold";
    //form.appendChild(thankYouMessage);
    window.alert(thankYouMessage.textContent)

    // Remove after 5 seconds
    setTimeout(() => thankYouMessage.remove(), 5000);
})