(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
    emailjs.init("gf76YRLaAip8jAx1e"); // Public Key

    // Attach event listener for form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Show loading spinner (optional)
      document.querySelector(".loading").style.display = "block";

      // Collect form data
      const formData = new FormData(this);
      const formParams = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      // Send email via EmailJS
      emailjs
        .send("service_bf2z1ji", "template_8pfluf9", formParams) // Service ID and Template ID
        .then(
          function (response) {
            document.querySelector(".sent-message").style.display = "block";
            document.getElementById("contact-form").reset();
          },
          function (error) {
            document.querySelector(".error-message").style.display = "block";
          }
        )
        .finally(() => {
          // Hide loading spinner
          document.querySelector(".loading").style.display = "none";
        });
    });
  });
})();
