alert("Welcome to Sarvesh Pandey Portfollio");
// ==========================================
// 1. SMOOTH SCROLLING FOR NAVBAR
// ==========================================

let navLinks = document.querySelectorAll(".navlinks a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        let sectionId = link.getAttribute("href");

        let section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==========================================
// 2. CONTACT FORM
// ==========================================

let form = document.querySelector(".contact-form form");

form.addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get the values entered by user
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    // Check if name or email is empty
    if (name === "" || email === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Thank you " + name + "! Your message has been submitted.");

        // Clear the form after submission
        form.reset();

    }

});


// ==========================================
// 3. WELCOME MESSAGE
// ==========================================

console.log("Welcome to Sarvesh Pandey's Portfolio!");


// ==========================================
// 4. BACK TO TOP BUTTON
// ==========================================

// Create a button
let topButton = document.createElement("button");

topButton.innerText = "↑ Top";

topButton.id = "topButton";

// Add button to the webpage
document.body.appendChild(topButton);


// Button styling
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";


// Show button when user scrolls down
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


// Go to top when button is clicked
topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});