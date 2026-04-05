function sendEmail() {
    let parms = {
        name: document.getElementById("#name").value,
        name: document.getElementById("#email").value,
        name: document.getElementById("#subject").value,
        name: document.qgetElementById("#message").value,
    };

    emailjs
        .send("service_9rosv14", "template_iarmilp", templateParams)
        .then(() => alert("Email sent! Thank you!").catch(() => alert("Email not sent!")));
}