function Registrarse_Inicio () {
  var usuario = document.getElementById("registro_usuario").value
  if (usuario === ""){
        // NO HACE NADA SI NO SE INTRODUCE NINGUN USUARIO.
  } else {
  document.getElementById("registro_texto").innerHTML = "¡Bienvenido " + usuario + " ! " + "Última conexión: Hace 2 días";
  document.getElementById("tab12").style.display = 'block';
        // INFORMACION ENCONTRADA EN: https://stackoverflow.com/questions/45012378/cant-change-style-display-using-getelementbyclassname
        // ES POR QUE CON getElementsByClassName FUNCIONA CON OTRO LENGUAJE.
  document.getElementsByClassName('registro_ocultar')[0].style.display = 'none';
  document.getElementById("registro_boton").innerHTML = usuario;
 document.getElementById('identificacion').style.display = 'none';
  
  }
}

// PESTAÑAS O TABS
function abrirtab(tab_enlaces) {
        // Oculta los tabs para que al volver a hacer click se resetee
  document.getElementById("tab_cuentas").style.display = 'none';
  document.getElementById("tab_movimientos").style.display = 'none';
  document.getElementById("tab_presupuestos").style.display = 'none';
  document.getElementById("tab_calculadora").style.display = 'none';
        // Muestra el tab
  document.getElementById(tab_enlaces).style.display = 'block';
  document.getElementById("slide_masterino").style.display = 'none';
}
// INICIO SLIDE DE IMAGENES

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide_imagen");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
// FIN SLIDE DE IMAGENES






// CALCULADORA
var a;
var b;
var operacion;
function init(){
  var resultado = document.getElementById('resultado');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var reset = document.getElementById('reset');
}
uno.onclick = function(e){
     resultado.textContent = resultado.textContent  + "1";
 }
 dos.onclick = function(e){
     resultado.textContent = resultado.textContent  + "2";
 }
 tres.onclick = function(e){
     resultado.textContent = resultado.textContent  + "3";
 }
 cuatro.onclick = function(e){
     resultado.textContent = resultado.textContent  + "4";
 }
 cinco.onclick = function(e){
     resultado.textContent = resultado.textContent  + "5";
 }
 seis.onclick = function(e){
     resultado.textContent = resultado.textContent  + "6";
 }
 siete.onclick = function(e){
     resultado.textContent = resultado.textContent  + "7";
 }
 ocho.onclick = function(e){
     resultado.textContent = resultado.textContent  + "8";
 }
 nueve.onclick = function(e){
     resultado.textContent = resultado.textContent  + "9";
 }
 cero.onclick = function(e){
     resultado.textContent = resultado.textContent  + "0";
 }
 reset.onclick = function(e){
     resetear();
 }
 suma.onclick = function(e){
     a = resultado.textContent;
     operacion = "+";
     limpiar();
 }
 resta.onclick = function(e){
     a = resultado.textContent;
     operacion = "-";
     limpiar();
 }
 multiplicacion.onclick = function(e){
     a = resultado.textContent;
     operacion = "*";
     limpiar();
 }
 division.onclick = function(e){
     a = resultado.textContent;
     operacion = "/";
     limpiar();
 }
 igual.onclick = function(e){
     b = resultado.textContent;
     resolver();
 }
 function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  a = 0;
  b = 0;
  operacion = "";
}
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(a) + parseFloat(b);
      break;
    case "-":
        res = parseFloat(a) - parseFloat(b);
        break;
    case "*":
      res = parseFloat(a) * parseFloat(b);
      break;
    case "/":
      res = parseFloat(a) / parseFloat(b);
      break;
  }
  resetear();
  resultado.textContent = res;
}
// cosa

// Get the modal
var modal = document.getElementById('dialogo_modal');

// Get the button that opens the modal
var btn = document.getElementById("identificacion");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// acordeon 
var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Entre la activaciçon y desactivacion */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// INICIO FILTRO

function movimientos_buscar() {
  
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('movimientos');
  filter = input.value.toUpperCase();
  ul = document.getElementById("cuentas_lista");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// FIN FILTRO
//INICIO TO DO LIST
// Crear un boton de cerrar a cada item y asociarselo
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Clicar en el boton cerrar del elemeento para esconderlo
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// añadir un simbolo de chequeado al elemento que hayamos clicado
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// crear un luevo elemento en la lista cuando clicamos el boton introducir
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// indicamos el precio de lo que ha costado el gasto
function sumaEuros() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myEuros").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes poner lo que cuesta!");
  } else {
    document.getElementById("misEuros").appendChild(li);
  }
  document.getElementById("m").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


