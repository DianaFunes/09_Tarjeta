function openModal() {
    var modal = document.getElementById("ventana");
    modal.style.display = "block";
  }

  
function closeModal() {
  var modal = document.getElementById("ventana");
  modal.style.display = "none";
}


function guardar() {

  var nombre03 = document.getElementById("nombre02").value;
  var mensaje03 = document.getElementById("mensaje02").value;

  document.getElementById("nombre").innerHTML = nombre03;
  document.getElementById("mensaje").innerHTML = mensaje03;

  closeModal();
}