function hello() {
  var mensaje = "hola ismael";
  console.log(mensaje);
  return mensaje;
}

function goodbye() {
  var mensaje = "adios ismael";
  console.log(mensaje);
  return mensaje;
}

function saludarNombre(nombre) {
  var mensaje = "hola " + nombre;
  console.log(mensaje);
  return mensaje;
}

function saludarConNombre() {
  var nombre = document.getElementById("nombreInput").value;

  if (nombre == "") {
    alert("Escriba algun nombre");
    return;
  }

  var mensaje = saludarNombre(nombre);
  document.getElementById("resultado").innerText = mensaje;
}

hello();
goodbye();
