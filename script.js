function validateForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var message = document.getElementById('message');

    if (firstname === "" || lastname === "" || email === "" || contact === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Basic email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Basic contact number validation (numbers only, length between 7-15)
    var contactPattern = /^\d{7,15}$/;
    if (!contactPattern.test(contact)) {
        alert("Please enter a valid contact number (7-15 digits)");
        return false;
    }

    message.innerText = "Registration complete";
    return false; // Prevent form submission for demonstration purposes
}
