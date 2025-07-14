// Obtenemos todos los cursos clicables
const cursos = document.querySelectorAll(".curso");

// Modal y contenido
const modal = document.createElement("div");
modal.id = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <span id="cerrar">❌</span>
    <p id="descripcion"></p>
  </div>
`;
document.body.appendChild(modal);

// Función para mostrar descripción
cursos.forEach(curso => {
  curso.addEventListener("click", () => {
    const texto = curso.getAttribute("data-info");
    document.getElementById("descripcion").innerText = texto;
    modal.style.display = "block";
  });
});

// Cerrar modal
document.getElementById("cerrar").onclick = () => {
  modal.style.display = "none";
};

// También cierra si haces clic fuera del cuadro
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
