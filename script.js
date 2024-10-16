// script.js

document.getElementById("capture-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        document.getElementById("form-message").textContent = `¡Gracias por registrarte, ${name}! Nos pondremos en contacto contigo pronto.`;
        document.getElementById("capture-form").reset();
    } else {
        document.getElementById("form-message").textContent = "Por favor, completa todos los campos.";
    }
});
