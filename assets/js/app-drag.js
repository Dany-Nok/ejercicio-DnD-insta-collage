var ev = document.getElementById('text');

// FUNCION QUE "ARRASTRARA" LA IMAGEN
function drag(ev) {
  // Elemento a arrastrar
  ev.dataTransfer.setData('text', ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(event) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}