var event = document.getElementsByTagName('img');

// FUNCION QUE "ARRASTRARA" LA IMAGEN
function drag(event) {
  // Elemento a arrastrar
  console.log('Funciona. Está arrastrando la imagen');
  event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
  console.log('Se está moviendo la imagen');
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));
  console.log('Logró dejar la imagen en el nuevo div');
}