// Inicializar EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // Reemplaza con tu clave pública
})();

// Manejar envío del formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const serviceID = "service_abc123"; // Tu ID de servicio
  const templateID = "template_xyz789"; // Tu ID de plantilla

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert("Gracias por tu mensaje.");
      this.reset();
    }, (err) => {
      alert("Hubo un error al enviar tu mensaje.");
      console.log(err);
    });
});