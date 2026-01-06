const form = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;

  respuesta.textContent = `Gracias ${nombre}, pronto me pondré en contacto contigo.`;
  respuesta.style.color = "green";

  form.reset();
});
