// Inicializar EmailJS
(function () {
  emailjs.init(geMI38P0upKLiXfjL); // Reemplaza con tu clave pública
})();

// Manejar envío del formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const serviceID = service_a5nzmdk; // Tu ID de servicio
  const templateID = template_u807nfa; // Tu ID de plantilla

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert("Gracias por tu mensaje.");
      this.reset();
    }, (err) => {
      alert("Hubo un error al enviar tu mensaje.");
      console.log(err);
    });
});
