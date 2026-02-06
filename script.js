// Fade-in animation when page loads
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    sections.forEach(section => {
        section.classList.add("show");
    });
});


// Contact form validation
function validateForm() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    }

    alert("Thank you! Your message has been sent successfully.");
    return true;
}